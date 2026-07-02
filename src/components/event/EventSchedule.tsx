import React from 'react';

type Session = {
  time: string;
  timeTentative?: boolean;
  title: string;
  titleTentative?: boolean;
  speaker?: string;
  institution?: string;
  note?: string;
  isBreak?: boolean;
};

const lunchBreak: Session = {
  time: '12–13 Uhr',
  title: 'Mittagspause',
  isBreak: true,
};

type Day = {
  date: string;
  room?: string;
  roomTentative?: boolean;
  sessions: Session[];
};

type FrameworkEvent = {
  date: string;
  dateTentative?: boolean;
  title: string;
  speaker?: string;
  institution?: string;
  time?: string;
  room?: string;
};

// Vorläufiger Ablaufplan (Stand: Juli 2026). Einzelne Angaben sind noch
// nicht final bestätigt und entsprechend markiert - siehe Hinweisbox.
const days: Day[] = [
  {
    date: 'Montag, 17.08.2026',
    room: 'TUM ThinkTank, Richard-Wagner-Straße 1',
    sessions: [
      {
        time: '10–12 Uhr (c.t.)',
        title: 'Hackathon Kick-off & Keynote',
        institution: 'Bayerisches Staatsministerium der Justiz (StMJ)',
      },
      lunchBreak,
      {
        time: '13–15 Uhr (c.t.)',
        timeTentative: true,
        title: 'Legal Tech Potenziale',
        speaker: 'Bernhard Waltl',
        institution: 'Liquid Legal Institute',
      },
      {
        time: '15–17 Uhr (c.t.)',
        title: 'Open Table: Wie baue ich ein Start-up auf? – Ideenentwicklung',
      },
    ],
  },
  {
    date: 'Dienstag, 18.08.2026',
    room: 'Ludwigstr. 28, Raum 122 RGB',
    sessions: [
      {
        time: '10–12 Uhr (c.t.)',
        title: 'Legal Design',
        speaker: 'Prof. Dr. Christian Djeffal',
        institution: 'TUM',
      },
      lunchBreak,
      {
        time: '13–14 Uhr (c.t.)',
        title: 'Rechtliche Rahmenbedingungen: Was darf Legal Tech? (I)',
        speaker: 'Nikolaus Bauer',
        institution: 'LMU',
      },
      {
        time: '14–16 Uhr (c.t.)',
        title: 'Rechtliche Rahmenbedingungen: Was darf Legal Tech? (II)',
        speaker: 'Dr. Tristan Radtke',
        institution: 'TUM',
      },
    ],
  },
  {
    date: 'Mittwoch, 19.08.2026',
    room: 'TUM ThinkTank, Richard-Wagner-Straße 1',
    sessions: [
      {
        time: '10–12 Uhr (c.t.)',
        title: 'Wirtschaft und Verwaltung',
        speaker: 'Franziska Ruppert',
        institution: 'IHK München und Oberbayern',
      },
      lunchBreak,
      {
        time: '13–15 Uhr (c.t.)',
        title: 'Verbraucherrecht',
        speaker: 'Simone Bueb',
        institution: 'Verbraucherzentrale Bayern',
      },
      {
        time: '15–17 Uhr (c.t.)',
        title: 'Workshop: Visuals und Prototyping',
        titleTentative: true,
      },
    ],
  },
  {
    date: 'Donnerstag, 20.08.2026',
    room: 'Ludwigstr. 28, Raum 122 RGB',
    sessions: [
      {
        time: '10–12 Uhr (c.t.)',
        timeTentative: true,
        title: 'Coding I',
        speaker: 'Sebastian Nagl',
      },
      lunchBreak,
      {
        time: '13–15 Uhr (c.t.)',
        title: 'Justiz',
        speaker: 'Maximilian Kruger',
        institution: 'Bayerisches Staatsministerium der Justiz (StMJ)',
      },
      {
        time: '15–17 Uhr (c.t.)',
        title: 'Open Table: Investor Talk',
        titleTentative: true,
      },
    ],
  },
  {
    date: 'Freitag, 21.08.2026',
    room: 'TUM ThinkTank, Richard-Wagner-Straße 1',
    sessions: [
      {
        time: '10–12 Uhr (c.t.)',
        timeTentative: true,
        title: 'Coding II',
        speaker: 'Sebastian Nagl',
      },
      lunchBreak,
      {
        time: '13–15 Uhr (c.t.)',
        title: 'Legal Reasoning and Artificial Intelligence',
        speaker: 'Niklas Wais',
        institution: 'TUM',
      },
      {
        time: '15–17 Uhr (c.t.)',
        title: 'Workshop: Pitch Training',
        titleTentative: true,
      },
    ],
  },
];

const frameworkEvents: FrameworkEvent[] = [
  {
    date: '27.08.2026',
    title: 'Pitches',
    room: 'Freskensaal, LMU (Ludwigstraße 28, Raum 115)',
  },
  {
    date: '05.10.2026',
    title: 'Siegerehrung / Preisverleihung',
    speaker: 'Georg Eisenreich',
    institution: 'Bayerischer Staatsminister der Justiz',
    room: 'Justizpalast, Prielmayerstraße 7, 80335 München-Maxvorstadt',
  },
];

const Tentative = ({label = 'vorläufig'}: {label?: string}) => (
  <span className={'inline-block align-middle text-text-caption font-semibold ' +
    'text-amber-11 bg-amber-3 border border-amber-9 rounded px-2 py-0.5 ml-2 whitespace-nowrap'}>
    {label}
  </span>
);

export class EventSchedule extends React.Component {
  render() {
    return (
      <div className={'flex flex-col gap-10'}>
        <div className={'bg-amber-2 border border-amber-9 rounded px-6 py-5 ' +
          'text-text-m lg:text-text-l'}>
          <strong>Hinweis:</strong> Der folgende Ablaufplan ist{' '}
          <strong>vorläufig</strong>. Themen, Referent:innen, Räume und
          Uhrzeiten können sich noch ändern. Punkte, die noch nicht final
          bestätigt sind, sind mit <Tentative/> gekennzeichnet. Alle
          Uhrzeiten verstehen sich als akademische Viertelstunden
          (c.t. = cum tempore) – Beginn jeweils 15 Minuten nach der
          genannten Zeit.
        </div>

        {days.map((day) => (
          <div key={day.date}>
            <div className={'flex flex-wrap items-baseline justify-between gap-2 mb-3'}>
              <div className={'text-head-s lg:text-head-m font-bold text-blue-12'}>
                {day.date}
              </div>
              <div className={'text-text-s-m lg:text-text-m text-blue-11'}>
                Raum: {day.room ?? 'wird noch bekanntgegeben'}
                {day.roomTentative && <Tentative/>}
              </div>
            </div>
            <div className={'flex flex-col'}>
              {day.sessions.map((session, i) => (
                session.isBreak ? (
                  <div key={i} className={'flex flex-col md:flex-row md:items-baseline ' +
                    'gap-1 md:gap-6 py-2 border-b border-blue-5 last:border-b-0 ' +
                    'text-text-s-m text-blue-11 italic'}>
                    <div className={'md:w-44 shrink-0'}>{session.time}</div>
                    <div>{session.title}</div>
                  </div>
                ) : (
                  <div key={i} className={'flex flex-col md:flex-row md:items-baseline ' +
                    'gap-1 md:gap-6 py-3 border-b border-blue-5 last:border-b-0'}>
                    <div className={'md:w-44 shrink-0 font-semibold text-blue-12 ' +
                      'text-text-m lg:text-text-l'}>
                      {session.time}
                      {session.timeTentative && <Tentative/>}
                    </div>
                    <div className={'text-text-m lg:text-text-l'}>
                      <div className={'font-semibold'}>
                        {session.title}
                        {session.titleTentative && <Tentative/>}
                      </div>
                      {(session.speaker || session.institution) && (
                        <div className={'text-text-s-m text-blue-11'}>
                          {[session.speaker, session.institution].filter(Boolean).join(' – ')}
                        </div>
                      )}
                      {session.note && (
                        <div className={'text-text-s text-amber-11 mt-1'}>{session.note}</div>
                      )}
                    </div>
                  </div>
                )
              ))}
            </div>
          </div>
        ))}

        <div>
          <div className={'w-full h-1 bg-blue-12 rounded mb-4'} />
          <div className={'text-head-s lg:text-head-m font-bold text-blue-12 mb-3'}>
            Abschlussveranstaltung
          </div>
          <div className={'flex flex-col'}>
            {frameworkEvents.map((event, i) => (
              <div key={i} className={'flex flex-col md:flex-row md:items-baseline ' +
                'gap-1 md:gap-6 py-3 border-b border-blue-5 last:border-b-0'}>
                <div className={'md:w-44 shrink-0 font-semibold text-blue-12 ' +
                  'text-text-m lg:text-text-l'}>
                  {event.date}
                  {event.dateTentative && <Tentative label={'Termin vorläufig'}/>}
                </div>
                <div className={'text-text-m lg:text-text-l'}>
                  <div className={'font-semibold'}>{event.title}</div>
                  {(event.speaker || event.institution) && (
                    <div className={'text-text-s-m text-blue-11'}>
                      {[event.speaker, event.institution].filter(Boolean).join(' – ')}
                    </div>
                  )}
                  <div className={'text-text-s text-blue-11'}>
                    Uhrzeit: {event.time ?? 'wird noch bekanntgegeben'}
                    {event.room && ` · Raum: ${event.room}`}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
