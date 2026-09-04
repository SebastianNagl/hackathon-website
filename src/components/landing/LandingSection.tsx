import React from 'react';

type Props = {
  id?: string
  eyebrow: string
  // extra classes for the outer <section>
  className?: string
  children: React.ReactNode
};

// LandingSection is the shared shell for the redesigned landing-page blocks:
// a navy full-bleed band with a hairline top border, an eyebrow label and a
// centred content column.
export function LandingSection({id, eyebrow, className = '', children}: Props) {
  return (
    <section
      id={id}
      className={'bg-blue-12 text-white border-t border-white/10 ' +
        'py-20 md:py-28 px-6 ' + className}
    >
      <div className={'max-w-[1000px] mx-auto'}>
        <p className={'text-blue-7 text-text-s font-semi-bold uppercase ' +
          'tracking-[0.18em] mb-5'}>
          {eyebrow}
        </p>
        {children}
      </div>
    </section>
  );
}
