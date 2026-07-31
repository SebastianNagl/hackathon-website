import React from 'react';
import aoShearmanLogo from '../../img/partners/AOShearman.png';
import bayshoreLogo from '../../img/partners/Bayshore_Logotype_Dark.png';
import geminiLogo from '../../img/partners/GoogleGemini.png';
import libraLogo from '../../img/partners/Libra.jpg';
import liquidLegalLogo from '../../img/partners/liquid_legal.png';
import lmuLogo from '../../img/partners/lmu.png';
import lovableLogo from '../../img/partners/Lovable.png';
import ltc from '../../img/partners/ltc.png';
import mlTechLogo from '../../img/partners/org_munich.png';
import riLmuLogo from '../../img/partners/ri_lmu.png';
import stmj from '../../img/partners/stmj.png';
import suitcaseLogo from '../../img/partners/suitcase.png';
import tumLogo from '../../img/partners/TUM_good.svg';
import unternehmerTUM from '../../img/partners/unternehmertum.png';
import uvcLogo from '../../img/partners/UVC.png';
import verbraucherzentraleLogo from '../../img/partners/VerbraucherzentraleBayern.png';

type CurrentPartner = {
  img: string;
  name: string;
  // omitted for partners whose official URL wasn't confirmed
  link?: string;
};

const poweredBy: CurrentPartner[] = [
  {img: lmuLogo, name: 'LMU München', link: 'https://www.lmu.de/de/index.html'},
  {img: tumLogo, name: 'TU München', link: 'https://www.tum.de/'},
  {img: mlTechLogo, name: 'MLTech e. V.', link: 'https://www.ml-tech.org/'},
];

const partners: CurrentPartner[] = [
  {img: aoShearmanLogo, name: 'A&O Shearman', link: 'https://www.aoshearman.com/'},
  {img: stmj, name: 'Bayerisches Staatsministerium der Justiz', link: 'https://www.justiz.bayern.de/ministerium/'},
  {img: bayshoreLogo, name: 'Bayshore'},
  {img: ltc, name: 'Legal Tech Colab', link: 'https://www.legal-tech-colab.de/'},
  {img: libraLogo, name: 'Libra'},
  {img: liquidLegalLogo, name: 'Liquid Legal Institute', link: 'https://www.liquid-legal-institute.com/'},
  {
    img: riLmuLogo,
    name: 'LMU RIZ',
    link: 'https://www.jura.uni-muenchen.de/fakultaet/riz_neu/index.html',
  },
  {img: suitcaseLogo, name: 'Suitcase'},
  {img: unternehmerTUM, name: 'UnternehmerTUM', link: 'https://www.unternehmertum.de/'},
  {img: uvcLogo, name: 'UVC Partners', link: 'https://www.uvcpartners.com/'},
  {
    img: verbraucherzentraleLogo,
    name: 'Verbraucherzentrale Bayern',
    link: 'https://www.verbraucherzentrale-bayern.de/',
  },
];

const technologyPartners: CurrentPartner[] = [
  {img: geminiLogo, name: 'Google Gemini', link: 'https://gemini.google.com/'},
  {img: lovableLogo, name: 'Lovable', link: 'https://lovable.dev/'},
];

const renderLogo = (partner: CurrentPartner, i: number, className: string) => {
  const content = (
    <img
      src={partner.img}
      alt={partner.name}
      className={'max-h-16 max-w-full object-contain'}
    />
  );
  return (
    <div key={i} className={className} title={partner.name}>
      {partner.link ? (
        <a
          href={partner.link}
          target={'_blank'}
          rel={'noreferrer'}
          className={'flex items-center justify-center w-full h-full'}
        >
          {content}
        </a>
      ) : content}
    </div>
  );
};

const cardClassName = 'bg-blue-1 border border-blue-4 rounded flex ' +
  'items-center justify-center h-24 p-4';

export class CurrentPartners extends React.Component {
  render() {
    return (
      <div className={'bg-blue-2 py-16 px-6'}>
        <div className={'max-w-[1100px] mx-auto'}>

          <div className={'text-center mb-12'}>
            <div className={'text-head-s lg:text-head-m font-bold text-blue-12 mb-6 ' +
              'uppercase tracking-wide'}>
              This year&apos;s hackathon is powered by
            </div>
            <div className={'flex flex-wrap justify-center gap-6'}>
              {poweredBy.map((partner, i) => renderLogo(partner, i, cardClassName + ' w-40'))}
            </div>
          </div>

          <h2 className={'text-3xl md:text-4xl font-bold text-blue-12 text-center mb-10'}>
            Partner 2026
          </h2>
          <div className={'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-16'}>
            {partners.map((partner, i) => renderLogo(partner, i, cardClassName))}
          </div>

          <h2 className={'text-3xl md:text-4xl font-bold text-blue-12 text-center mb-10'}>
            Technology Partner
          </h2>
          <div className={'flex flex-wrap justify-center gap-6'}>
            {technologyPartners.map((partner, i) => renderLogo(partner, i, cardClassName + ' w-40'))}
          </div>
        </div>
      </div>
    );
  }
}
