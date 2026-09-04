import React from 'react';

type Props = {
  // imported image source (placeholder SVG or a real photo)
  src: string
  // grey subtitle shown under the image
  caption: string
  // optional speaker / person name shown under the caption
  speaker?: string
  // image width: 'small' thumbnail, 'default' capped, 'large' wide
  size?: 'small' | 'default' | 'large'
  // centre the figure and its caption
  centered?: boolean
};

// RecapFigure renders an image with a grey caption (and optional speaker
// name) beneath it, styled to match the recap pages. Images may be
// placeholders until real photos are available.
export function RecapFigure({
  src,
  caption,
  speaker,
  size = 'default',
  centered = false,
}: Props) {
  const widthClass =
    size === 'small' ? 'max-w-[240px]' :
    size === 'large' ? 'max-w-2xl' :
    'max-w-xl';

  return (
    <figure className={'my-3 ' + widthClass + (centered ? ' mx-auto' : '')}>
      <img
        src={src}
        alt={caption}
        className={'w-full rounded border border-blue-4'}
      />
      <figcaption className={'text-text-s text-blue-11 opacity-80 mt-2 ' +
        'italic' + (centered ? ' text-center' : '')}>
        {caption}
      </figcaption>
      {speaker && (
        <div className={'text-text-s text-blue-11 opacity-70 mt-0.5' +
          (centered ? ' text-center' : '')}>
          {speaker}
        </div>
      )}
    </figure>
  );
}
