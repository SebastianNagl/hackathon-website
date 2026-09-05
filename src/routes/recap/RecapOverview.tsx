import React from 'react';
import {Link} from 'react-router-dom';
import {Footer} from '../../components/footer/Footer';
import eventIcon from '../../img/icons/event_repeat.svg';

type RecapEdition = {
  year: string
  to: string
  dateRange: string
  description: string
};

const editions: RecapEdition[] = [
  {
    year: '2026',
    to: '/recap/2026',
    dateRange: '17. – 27.08.2026 · München · 51 Teilnehmende · 14 Teams',
    description:
      'Zehn Tage, 51 Teilnehmende, 14 Teams, eine Frage: Wie machen wir ' +
      'Recht zugänglicher — für alle?',
  },
  {
    year: '2023',
    to: '/recap/2023',
    dateRange: '02.01. – 08.01.2023 · Remote · 150 Studierende',
    description:
      'Der zweite LLT Hackathon: eine Woche voller Legal Tech mit ' +
      'Workshops, Vorträgen und über 25 Teams im großen Finale.',
  },
];

// RecapOverview is the parent page for all recap editions. It links to the
// individual per-year recap landing pages (2023, 2026, ...).
export function RecapOverview() {
  return (
    <div className={'overflow-x-hidden min-h-screen flex flex-col'}>

      {/* ── HERO ── */}
      <div className={'bg-blue-12 text-blue-1 relative flex items-end ' +
        'min-h-[45vh] pt-36 tabletL:pt-44 xl:pt-48 pb-12 px-8 md:px-16 ' +
        'overflow-hidden'}>

        <span className={'absolute right-0 bottom-0 text-[18vw] font-bold ' +
          'text-blue-1 opacity-5 leading-none select-none pointer-events-none'}>
          Recap
        </span>

        <div className={'relative z-10 max-w-[900px]'}>
          <p className={'text-blue-7 text-text-l md:text-head-s ' +
            'font-medium uppercase tracking-widest mb-4'}>
            Legal Loves Tech Hackathon
          </p>
          <h1 className={'text-5xl md:text-7xl font-bold leading-tight mb-6'}>
            Recap
          </h1>
          <p className={'text-blue-5 text-text-l md:text-head-s ' +
            'leading-relaxed max-w-[600px]'}>
            Rückblicke auf die bisherigen Ausgaben des LLT Hackathons.
          </p>
        </div>

      </div>

      {/* ── EDITIONS ── */}
      <div className={'relative bg-blue-3 grow py-16'}>

        <div className={'absolute top-6 right-0 rounded-l z-10 bg-blue-12 ' +
          'text-blue-1 text-3xl px-16 py-4 md:px-12 md:py-5 xl:px-20'}>
          Die Ausgaben
        </div>

        <div className={'w-full flex justify-center items-center md:px-4 ' +
          'mt-16'}>
          <div className={'grid gap-4 grid-cols-1 md:grid-cols-2 ' +
            'w-full xl:w-4/5 xl:mx-auto px-4 md:px-0'}>

            {editions.map((edition) => (
              <Link key={edition.year} to={edition.to}
                className={'no-underline'}>
                <div className={'bg-blue-4 rounded h-full p-8 flex flex-col ' +
                  'gap-4 hover:bg-blue-5 transition-colors'}>
                  <img src={eventIcon} alt="" className={'w-16 h-16'} />
                  <h2 className={'text-head-m font-semi-bold text-blue-12'}>
                    LLT Hackathon {edition.year}
                  </h2>
                  <p className={'text-text-m text-blue-12 opacity-70 ' +
                    'font-medium'}>
                    {edition.dateRange}
                  </p>
                  <p className={'text-text-l text-blue-12 opacity-80'}>
                    {edition.description}
                  </p>
                </div>
              </Link>
            ))}

          </div>
        </div>
      </div>

      <Footer backgroundColor={'blue'} />

    </div>
  );
}
