import React from 'react';
import {LandingSection} from './LandingSection';

const stats: {num: string; label: string}[] = [
  {num: '51', label: 'Teilnehmende'},
  {num: '14', label: 'Teams'},
  {num: '8', label: 'Challenges'},
  {num: '10', label: 'Tage'},
];

// LandingLeitthema – the "Access to Justice" theme statement plus a key-figure
// strip.
export function LandingLeitthema() {
  return (
    <LandingSection eyebrow={'Leitthema 2026'}>
      <h2 className={'text-3xl md:text-5xl font-bold leading-tight mb-6'}>
        Zugang zum Recht.<br />
        <span className={'text-red-9'}>Für alle.</span>
      </h2>

      <div className={'max-w-[680px] flex flex-col gap-5 text-text-l ' +
        'md:text-head-s leading-relaxed text-blue-4'}>
        <p>
          Der Legal Loves Tech Hackathon 2026 stand unter dem Leitthema{' '}
          <strong className={'text-white'}>„Access to Justice"</strong>: Wie
          kann der Einsatz von Künstlicher Intelligenz und digitalen Werkzeugen
          dazu beitragen, rechtliche Prozesse verständlicher, zugänglicher und
          gerechter zu gestalten?
        </p>
        <p className={'text-white font-semi-bold'}>
          Gemeinsam haben wir Prototypen entwickelt, die Barrieren im
          Rechtssystem abbauen.
        </p>
      </div>

      <div className={'grid grid-cols-2 sm:grid-cols-4 gap-px mt-12 ' +
        'bg-white/10 border border-white/10 rounded overflow-hidden'}>
        {stats.map((s) => (
          <div key={s.label} className={'bg-blue-12 p-6 text-center'}>
            <div className={'text-4xl md:text-5xl font-bold text-white ' +
              'leading-none'}>
              {s.num}
            </div>
            <div className={'text-text-s uppercase tracking-wide text-blue-7 ' +
              'mt-2'}>
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </LandingSection>
  );
}
