import React from 'react';
import {LandingSection} from './LandingSection';

type Card = {num: string; title: string; text: string};

const cards: Card[] = [
  {
    num: '01',
    title: 'Interdisziplinär',
    text: 'Der Legal Loves Tech Hackathon bringt Studierende aus Recht, ' +
      'Informatik und Wirtschaft zusammen und schafft eine Plattform für die ' +
      'Zusammenarbeit an der Schnittstelle von Recht und Technologie.',
  },
  {
    num: '02',
    title: 'Gemeinnützig',
    text: 'Wir sind überzeugt: Legal Tech kann die Welt ein Stück besser ' +
      'machen — und alle sollen daran teilhaben können. Im Mittelpunkt stehen ' +
      'gemeinsames Engagement und die Vermittlung von Wissen und Fähigkeiten ' +
      'rund um Legal Tech.',
  },
  {
    num: '03',
    title: 'Offen für alle',
    text: 'Vorträge, Workshops und Praxiseinblicke von führenden Expert:innen ' +
      'aus Recht, Technologie und Wirtschaft. Alle erforderlichen Kenntnisse ' +
      'werden direkt in der Hackathon-Woche vermittelt — Vorkenntnisse im ' +
      'Bereich Legal Tech sind ausdrücklich keine Voraussetzung.',
  },
];

// LandingAbout – what the LLT Hackathon is, as three principles.
export function LandingAbout() {
  return (
    <LandingSection id={'about-page'} eyebrow={'Der Hackathon'}>
      <h2 className={'text-3xl md:text-5xl font-bold leading-tight mb-12'}>
        Von und für Studierende.
      </h2>

      <div className={'grid gap-5 md:grid-cols-3'}>
        {cards.map((c) => (
          <div key={c.num}
            className={'bg-white/[0.04] border border-white/10 rounded-lg ' +
              'p-6 flex flex-col gap-3'}>
            <div className={'text-red-9 font-bold text-2xl leading-none'}>
              {c.num}
            </div>
            <div className={'text-text-l font-semi-bold text-white'}>
              {c.title}
            </div>
            <p className={'text-text-m text-blue-4 leading-relaxed'}>
              {c.text}
            </p>
          </div>
        ))}
      </div>
    </LandingSection>
  );
}
