import logo from '../../img/lltLogos/logo-colored.svg';

type RasterizedImage = {
  dataUrl: string;
  width: number;
  height: number;
};

const rasterizeImage = (src: string): Promise<RasterizedImage> =>
  new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        reject(new Error('Canvas context not available'));
        return;
      }
      ctx.drawImage(img, 0, 0);
      resolve({
        dataUrl: canvas.toDataURL('image/png'),
        width: img.naturalWidth,
        height: img.naturalHeight,
      });
    };
    img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
    img.src = src;
  });

type ExportOptions = {
  element: HTMLElement;
  title: string;
  filename: string;
  orientation?: 'landscape' | 'portrait';
};

// renders the given DOM element into an A4 PDF, with the Hackathon logo
// and a title in the header
// jspdf/html2canvas are loaded on demand so they don't bloat the main bundle
export const exportSchedulePdf = async ({
  element, title, filename, orientation = 'landscape',
}: ExportOptions) => {
  const [{default: html2canvas}, {default: JsPdf}, logoImage] = await Promise.all([
    import('html2canvas'),
    import('jspdf'),
    rasterizeImage(logo),
  ]);

  const canvas = await html2canvas(element, {backgroundColor: '#ffffff', scale: 2});

  const pdf = new JsPdf({orientation, unit: 'pt', format: 'a4'});
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  const margin = 24;

  const logoHeight = 32;
  const logoWidth = (logoImage.width / logoImage.height) * logoHeight;
  pdf.addImage(logoImage.dataUrl, 'PNG', margin, margin, logoWidth, logoHeight);

  pdf.setFontSize(14);
  pdf.setTextColor('#00254D');
  pdf.text(title, margin + logoWidth + 14, margin + logoHeight / 2 + 5);

  const contentTop = margin + logoHeight + 16;
  const availableWidth = pageWidth - margin * 2;
  const availableHeight = pageHeight - contentTop - margin;

  // JPEG keeps the file size manageable - the captured content is opaque
  // (white background), so there's no transparency to lose
  const contentImage = canvas.toDataURL('image/jpeg', 0.9);
  const scale = Math.min(
      availableWidth / canvas.width,
      availableHeight / canvas.height,
      1,
  );
  const imgWidth = canvas.width * scale;
  const imgHeight = canvas.height * scale;
  const imgX = margin + (availableWidth - imgWidth) / 2;

  pdf.addImage(contentImage, 'JPEG', imgX, contentTop, imgWidth, imgHeight);

  pdf.save(filename);
};
