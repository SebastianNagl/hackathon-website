import React from 'react';
import {Link} from 'react-router-dom';
import {LandingSection} from './LandingSection';
import photo1 from '../../img/recap2026/abschluss/pitches/DSC06061.jpg';
import photo2 from '../../img/recap2026/siegerehrung.jpeg';
import photo3 from '../../img/recap2026/tag-1/eroeffnung/team.jpeg';

const photos = [photo1, photo2, photo3];

// LandingRecapTeaser – points visitors to the full recap of the 2026 edition.
export function LandingRecapTeaser() {
  return (
    <LandingSection eyebrow={'Rückblick'}>
      <div className={'grid gap-8 lg:grid-cols-2 lg:items-center'}>

        <div>
          <h2 className={'text-3xl md:text-5xl font-bold leading-tight mb-5'}>
            Zehn Tage.<br />14 Teams.<br />
            <span className={'text-red-9'}>Eine Frage.</span>
          </h2>
          <p className={'text-text-l md:text-head-s text-blue-4 leading-relaxed ' +
            'mb-8 max-w-[520px]'}>
            Programmwoche, Challenges vom Staatsministerium der Justiz und der
            Verbraucherzentrale Bayern, Abschluss im Freskensaal der LMU —
            der ganze Hackathon 2026 im Detail.
          </p>
          <div className={'flex flex-wrap items-center gap-x-6 gap-y-3'}>
            <Link
              to={'/recap/2026'}
              className={'inline-flex items-center gap-2 bg-white ' +
                'text-blue-12 font-bold px-8 py-3 rounded text-head-s ' +
                'shadow-lg hover:opacity-90 transition-opacity'}
            >
              Zum Recap 2026 →
            </Link>
            <Link
              to={'/recap/2023'}
              className={'inline-flex items-center gap-1 text-blue-4 ' +
                'font-semi-bold underline underline-offset-4 ' +
                'hover:text-white transition-colors'}
            >
              Auch der Recap 2023 →
            </Link>
          </div>
        </div>

        <div className={'grid grid-cols-2 gap-3'}>
          <img src={photos[0]} alt={''}
            className={'col-span-2 w-full h-48 md:h-56 object-cover rounded ' +
              'border border-white/10'} />
          <img src={photos[1]} alt={''}
            className={'w-full h-36 md:h-44 object-cover rounded ' +
              'border border-white/10'} />
          <img src={photos[2]} alt={''}
            className={'w-full h-36 md:h-44 object-cover rounded ' +
              'border border-white/10'} />
        </div>

      </div>
    </LandingSection>
  );
}
