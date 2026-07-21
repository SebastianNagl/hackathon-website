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
  time: '12:00–13:00 Uhr',
  title: 'Mittagspause',
  isBreak: true,
};

type Day = {
  date: string;
  room?: string;
  roomTentative?: boolean;
  note?: string;
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
  note?: string;
  sessions?: Session[];
};

// Vorläufiger Ablaufplan (Stand: Juli 2026). Einzelne Angaben sind noch
// nicht final bestätigt und entsprechend markiert - siehe Hinweisbox.
const days: Day[] = [
  {
    date: 'Montag, 17.08.2026',
    room: 'TUM ThinkTank, Richard-Wagner-Straße 1',
    sessions: [
      {
        time: '10:15–10:35 Uhr',
        title: 'Eröffnung des Hackathons durch MLTech e. V.',
        speaker: 'Luca Ballmann, Felicitas Bingger, Enci Huang',
      },
      {
        time: '10:35–10:45 Uhr',
        title: 'Grußwort',
        speaker: 'Ministerialdirektor Dr. Winfried Brechmann',
        institution: 'Bayerisches Staatsministerium der Justiz',
      },
      {
        time: '10:45–11:00 Uhr',
        title: 'Begrüßung durch LMU und TUM',
        speaker: 'Dr. Tristan Radtke (TUM), Niklas Wais (TUM), ' +
          'Dr. Ann-Kristin Mayrhofer (LMU), Nikolaus Bauer (LMU)',
      },
      {
        time: '11:00–11:45 Uhr',
        title: 'Einweisung der Teilnehmenden',
      },
      {
        time: '12:00–14:00 Uhr',
        title: 'Mittagessen und Teambildung',
        note: 'Mittagessen wird bereitgestellt.',
        isBreak: true,
      },
      {
        time: '14:00–15:00 Uhr',
        title: 'Legal-Tech-Potenziale',
        speaker: 'Bernhard Waltl',
        institution: 'Liquid Legal Institute',
      },
      {
        time: '15:00–17:00 Uhr',
        title: 'Open Table: Wie baue ich ein Start-up auf?',
        speaker: 'Moritz Krüselmann – Moderator (Legal Tech Colab), ' +
          'Henrik Volkmann (Libra), Tim Kniepkamp (Suitcase)',
      },
      {
        time: '17:00 Uhr – open end',
        title: 'Zeit für Austausch und Networking',
      },
    ],
  },
  {
    date: 'Dienstag, 18.08.2026',
    room: 'Ludwigstr. 28, Raum 122 RGB',
    sessions: [
      {
        time: '10:15–11:45 Uhr',
        title: 'Legal Design',
        speaker: 'Prof. Dr. Christian Djeffal',
        institution: 'TUM',
      },
      lunchBreak,
      {
        time: '13:15–14:00 Uhr',
        title: 'Rechtliche Rahmenbedingungen: Was darf Legal Tech? (I)',
        speaker: 'Nikolaus Bauer',
        institution: 'LMU',
      },
      {
        time: '14:15–15:45 Uhr',
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
        time: '10:15–11:45 Uhr',
        title: 'Coding I',
        speaker: 'Sebastian Nagl',
      },
      lunchBreak,
      {
        time: '13:15–14:45 Uhr',
        title: 'Verbraucherrecht',
        speaker: 'Simone Bueb',
        institution: 'Verbraucherzentrale Bayern',
      },
      {
        time: '15:15–16:45 Uhr',
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
        time: '10:15–11:45 Uhr',
        title: 'Coding II',
        speaker: 'Sebastian Nagl',
      },
      lunchBreak,
      {
        time: '13:15–14:45 Uhr',
        title: 'Justiz',
        speaker: 'Maximilian Kruger',
        institution: 'Bayerisches Staatsministerium der Justiz (StMJ)',
      },
      {
        time: '15:15–16:00 Uhr',
        title: 'Open Table: Investor Talk',
        speaker: 'Dr. Oliver Schoppe',
        institution: 'UVC Partners',
      },
    ],
  },
  {
    date: 'Freitag, 21.08.2026',
    room: 'TUM ThinkTank, Richard-Wagner-Straße 1',
    sessions: [
      {
        time: '10:15–11:45 Uhr',
        title: 'Legal Reasoning and Artificial Intelligence',
        speaker: 'Niklas Wais',
        institution: 'TUM',
      },
      lunchBreak,
      {
        time: '13:15–14:45 Uhr',
        title: 'Workshop: Pitch Training',
        speaker: 'Lisa Schebitz',
        institution: 'UnternehmerTUM',
      },
    ],
  },
];

const frameworkEvents: FrameworkEvent[] = [
  {
    date: '27.08.2026',
    title: 'Pitches',
    room: 'Freskensaal, LMU (Ludwigstraße 28, Raum 115)',
    sessions: [
      {
        time: '10:15–10:35 Uhr',
        title: 'Eröffnung der Abschlussveranstaltung',
        speaker: 'Luca Ballmann, Felicitas Bingger, Enci Huang',
      },
      {
        time: '10:35–10:45 Uhr',
        title: 'Grußwort',
        speaker: 'Ministerialdirektor Dr. Winfried Brechmann',
        institution: 'Bayerisches Staatsministerium der Justiz',
      },
      {
        time: '10:45–11:00 Uhr',
        title: 'Vorstellung der Jury',
        speaker: 'Dr. Ann-Kristin Mayrhofer',
        institution: 'LMU',
      },
      {
        time: '11:00–12:00 Uhr',
        title: 'Pitches',
      },
      {
        time: '12:00–13:30 Uhr',
        title: 'Mittagessen',
        note: 'Mittagessen wird bereitgestellt.',
        isBreak: true,
      },
      {
        time: '13:30–15:00 Uhr',
        title: 'Pitches',
      },
      {
        time: '15:00–15:30 Uhr',
        title: 'Kaffeepause',
        isBreak: true,
      },
      {
        time: '15:30–17:00 Uhr',
        title: 'Pitches',
      },
      {
        time: '17:00–17:30 Uhr',
        title: 'Beratungen der Jury',
      },
      {
        time: '17:30–18:00 Uhr',
        title: 'Siegerehrung',
      },
      {
        time: '18:00 Uhr – open end',
        title: 'Ausklingen der Veranstaltung',
        note: 'Snacks und Getränke werden bereitgestellt.',
      },
    ],
  },
];

const awardsCeremony: FrameworkEvent = {
  date: '05.10.2026',
  title: 'Siegerehrung / Preisverleihung',
  speaker: 'Georg Eisenreich',
  institution: 'Bayerischer Staatsminister der Justiz',
  room: 'Justizpalast, Prielmayerstraße 7, 80335 München-Maxvorstadt',
};

const Tentative = ({label = 'vorläufig'}: {label?: string}) => (
  <span className={'inline-block align-middle text-text-caption font-semibold ' +
    'text-amber-11 bg-amber-3 border border-amber-9 rounded px-2 py-0.5 ml-2 whitespace-nowrap'}>
    {label}
  </span>
);

const InfoNote = ({children}: {children: React.ReactNode}) => (
  <span className={'inline-block align-middle not-italic text-text-caption font-semibold ' +
    'text-green-11 bg-green-3 border border-green-9 rounded px-2 py-0.5 whitespace-nowrap'}>
    {children}
  </span>
);

const renderSession = (session: Session, i: number) => (
  session.isBreak ? (
    <div key={i} className={'flex flex-col md:flex-row md:items-baseline ' +
      'gap-1 md:gap-6 py-2 border-b border-blue-5 last:border-b-0 ' +
      'text-text-s-m text-blue-11 italic'}>
      <div className={'md:w-44 shrink-0'}>{session.time}</div>
      <div>
        <div>{session.title}</div>
        {session.note && (
          <div className={'mt-1'}><InfoNote>{session.note}</InfoNote></div>
        )}
      </div>
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
          <div className={'mt-1'}><InfoNote>{session.note}</InfoNote></div>
        )}
      </div>
    </div>
  )
);

export class EventSchedule extends React.Component {
  render() {
    return (
      <div className={'flex flex-col gap-10'}>
        <div className={'bg-amber-2 border border-amber-9 rounded px-6 py-5 ' +
          'text-text-m lg:text-text-l'}>
          <strong>Hinweis:</strong> Slots, die noch nicht final
          bestätigt sind, sind mit <Tentative/> gekennzeichnet.
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
            {day.note && (
              <div className={'mb-3'}><InfoNote>{day.note}</InfoNote></div>
            )}
            <div className={'flex flex-col'}>
              {day.sessions.map(renderSession)}
            </div>
          </div>
        ))}

        <div>
          <div className={'w-full h-1 bg-blue-12 rounded mb-4'} />
          <div className={'text-head-s lg:text-head-m font-bold text-blue-12 mb-3'}>
            Abschlussveranstaltung
          </div>
          {frameworkEvents.map((event, i) => (
            event.sessions ? (
              <div key={i} className={i > 0 ? 'mt-8' : ''}>
                <div className={'flex flex-wrap items-baseline justify-between gap-2 mb-3'}>
                  <div className={'text-text-m lg:text-text-l font-semibold text-blue-12'}>
                    {event.title} – {event.date}
                    {event.dateTentative && <Tentative label={'Termin vorläufig'}/>}
                  </div>
                  {event.room && (
                    <div className={'text-text-s-m lg:text-text-m text-blue-11'}>
                      Raum: {event.room}
                    </div>
                  )}
                </div>
                {event.note && (
                  <div className={'mb-3'}><InfoNote>{event.note}</InfoNote></div>
                )}
                <div className={'flex flex-col'}>
                  {event.sessions.map(renderSession)}
                </div>
              </div>
            ) : (
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
                  {event.note && (
                    <div className={'mt-1'}><InfoNote>{event.note}</InfoNote></div>
                  )}
                </div>
              </div>
            )
          ))}
        </div>

        <div>
          <div className={'w-full h-1 bg-blue-12 rounded mb-4'} />
          <div className={'text-head-s lg:text-head-m font-bold text-blue-12 mb-3'}>
            Preisverleihung
          </div>
          <div className={'flex flex-col md:flex-row md:items-baseline gap-1 md:gap-6'}>
            <div className={'md:w-44 shrink-0 font-semibold text-blue-12 ' +
              'text-text-m lg:text-text-l'}>
              {awardsCeremony.date}
              {awardsCeremony.dateTentative && <Tentative label={'Termin vorläufig'}/>}
            </div>
            <div className={'text-text-m lg:text-text-l'}>
              <div className={'font-semibold'}>{awardsCeremony.title}</div>
              {(awardsCeremony.speaker || awardsCeremony.institution) && (
                <div className={'text-text-s-m text-blue-11'}>
                  {[awardsCeremony.speaker, awardsCeremony.institution].filter(Boolean).join(' – ')}
                </div>
              )}
              <div className={'text-text-s text-blue-11'}>
                Uhrzeit: {awardsCeremony.time ?? 'wird noch bekanntgegeben'}
                {awardsCeremony.room && ` · Raum: ${awardsCeremony.room}`}
              </div>
              {awardsCeremony.note && (
                <div className={'mt-1'}><InfoNote>{awardsCeremony.note}</InfoNote></div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
