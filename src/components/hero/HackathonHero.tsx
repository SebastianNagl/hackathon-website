import React from 'react';
import {Link} from 'react-router-dom';
import {Caret} from '../Caret';
import '../info/Info.css';
import './HackathonHero.css';
import bigHeart from '../../img/decor/big_heart.png';
import mediumHeart from '../../img/decor/medium_heart.png';
import smallHeart from '../../img/decor/small_heart.png';
import fallback1 from '../../img/recap2026/abschluss/pitches/DSC06021.jpg';
import fallback2 from '../../img/recap2026/abschluss/pitches/DSC06099.jpg';
import fallback3 from '../../img/recap2026/abschluss/pitches/DSC06217.jpg';
import fallback4 from '../../img/recap2026/abschluss/pitches/DSC06270.jpg';
import fallback5 from '../../img/recap2026/siegerehrung.jpeg';
import fallback6 from '../../img/recap2026/freskensaal.jpeg';
import fallback7 from '../../img/recap2026/tag-1/eroeffnung/teilnehmende.jpeg';

type Props = {
  scrollTo: (selector: string) => void
};

// Any image dropped into src/img/landing-bg is used as a hero background,
// sorted by filename. If the folder is empty, the curated fallback set is
// used instead.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const bgContext = (require as any).context(
    '../../img/landing-bg', false, /\.(jpe?g|png|webp)$/,
);
const uploaded: string[] = bgContext
    .keys()
    .sort()
    .map((key: string) => bgContext(key) as string);

const fallback = [
  fallback1, fallback2, fallback3, fallback4, fallback5, fallback6, fallback7,
];

const slides = uploaded.length ? uploaded : fallback;
const SLIDE_MS = 5000;

// HackathonHero is the full-screen landing hero: a crossfading slideshow of
// hackathon photos, with the headline and a link to the recap.
export function HackathonHero({scrollTo}: Props) {
  const [active, setActive] = React.useState(0);

  React.useEffect(() => {
    if (slides.length < 2) return;
    const id = window.setInterval(
        () => setActive((i) => (i + 1) % slides.length),
        SLIDE_MS,
    );
    return () => window.clearInterval(id);
  }, []);

  const heartRot = (deg: string): React.CSSProperties =>
    ({['--heart-rot']: deg} as React.CSSProperties);

  return (
    <section className={'relative min-h-screen flex items-end overflow-hidden ' +
      'bg-blue-12'}>

      {/* ── Slideshow ── */}
      {slides.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={''}
          aria-hidden={true}
          className={'absolute inset-0 w-full h-full object-cover ' +
            'transition-opacity ease-in-out ' +
            (i === active ? 'opacity-100' : 'opacity-0')}
          style={{transitionDuration: '1200ms'}}
        />
      ))}

      {/* ── Dark gradient overlay for legibility ── */}
      <div
        className={'absolute inset-0'}
        style={{
          background:
            'linear-gradient(to top, rgba(0,37,77,0.94), ' +
            'rgba(0,37,77,0.55) 55%, rgba(0,37,77,0.30))',
        }}
      />

      {/* ── Content ── */}
      <div className={'relative z-10 w-full max-w-[1000px] mx-auto px-8 ' +
        'md:px-16 pt-40 pb-20 lg:pb-24'}>

        <p className={'text-blue-7 text-text-l md:text-head-s font-medium ' +
          'uppercase tracking-widest mb-4'}>
          Rückblick · August 2026
        </p>
        <h1 className={'text-white font-bold leading-[1.05] mb-6'}>
          <span className={'text-4xl sm:text-5xl md:text-7xl'}>Legal </span>
          <span className={'font-pen font-normal text-red-9 align-baseline ' +
            'text-6xl sm:text-7xl md:text-[6.5rem] leading-none'}>
            loves
          </span>{' '}
          <span className={'relative inline-block text-4xl sm:text-5xl ' +
            'md:text-7xl'}>
            Tech
            <img src={bigHeart} alt={''} aria-hidden={true}
              className={'hero-heart pointer-events-none select-none absolute ' +
                '-top-3 -right-3 md:-top-5 md:-right-5 w-6 md:w-9 opacity-95'}
              style={heartRot('10deg')} />
            <img src={mediumHeart} alt={''} aria-hidden={true}
              className={'hero-heart pointer-events-none select-none absolute ' +
                '-top-1 -right-7 md:-top-1 md:-right-11 w-4 md:w-6 opacity-85'}
              style={heartRot('-12deg')} />
            <img src={smallHeart} alt={''} aria-hidden={true}
              className={'hero-heart pointer-events-none select-none absolute ' +
                'top-2 -right-4 md:top-3 md:-right-6 w-2.5 md:w-4 opacity-75'}
              style={heartRot('6deg')} />
          </span>
          <br />
          <span className={'text-4xl sm:text-5xl md:text-7xl'}>
            Hackathon 2026
          </span>
        </h1>
        <p className={'text-blue-4 text-text-l md:text-head-s leading-relaxed ' +
          'max-w-[640px] mb-8'}>
          Zehn Tage · 51 Teilnehmende · 14 Teams · eine Frage: Wie machen wir
          Recht zugänglicher — für alle?
        </p>
        <Link
          to={'/recap/2026'}
          className={'inline-flex items-center gap-2 bg-white text-blue-12 ' +
            'font-bold px-8 py-3 rounded text-head-s shadow-lg ' +
            'hover:opacity-90 transition-opacity'}
        >
          Zum Recap 2026 →
        </Link>
      </div>

      {/* ── Slide indicators ── */}
      {slides.length > 1 && (
        <div className={'absolute z-10 bottom-6 right-6 md:right-16 flex gap-2'}>
          {slides.map((_, i) => (
            <button
              key={i}
              type={'button'}
              aria-label={`Bild ${i + 1} anzeigen`}
              onClick={() => setActive(i)}
              className={'h-1.5 rounded-full transition-all ' +
                (i === active ? 'w-6 bg-white' : 'w-2.5 bg-white/50')}
            />
          ))}
        </div>
      )}

      <Caret
        className={'caret-left'}
        onClick={() => scrollTo('#about-page')}
      />
    </section>
  );
}
