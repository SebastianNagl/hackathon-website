import React from 'react';

export type Session = {
  time: string;
  timeTentative?: boolean;
  title: string;
  titleTentative?: boolean;
  speaker?: string;
  institution?: string;
  note?: string;
  isBreak?: boolean;
  // Stundenplan-only overrides: shows a merged summary block instead of the
  // detailed entry (which still appears as-is in the Listen-Ansicht)
  gridTitle?: string;
  gridEnd?: string;
  hideInGrid?: boolean;
};

export type FrameworkEvent = {
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

// single source of truth for the Abschlussveranstaltung (Pitches day) agenda,
// shared between the Event page's Ablaufplan section and the dedicated
// Abschlussveranstaltung page so both stay in sync
export const abschlussveranstaltungEvent: FrameworkEvent = {
  date: '27.08.2026',
  title: 'Pitches',
  room: 'Freskensaal (LMU, Ludwigstraße 28, Raum 115)',
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
};

// inline-flex (not inline-block + align-middle) renders reliably in the
// html2canvas PDF export, which otherwise shifts baseline-aligned badges
export const Tentative = ({label = 'vorläufig'}: {label?: string}) => (
  <span className={'inline-flex items-center text-text-caption font-semibold ' +
    'text-amber-11 bg-amber-3 border border-amber-9 rounded px-2 py-0.5 ml-2 whitespace-nowrap'}>
    {label}
  </span>
);

export const InfoNote = ({children}: {children: React.ReactNode}) => (
  <span className={'inline-flex items-center not-italic text-text-caption font-semibold ' +
    'text-green-11 bg-green-3 border border-green-9 rounded px-2 py-0.5 whitespace-nowrap'}>
    {children}
  </span>
);

export const renderSession = (session: Session, i: number) => (
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
