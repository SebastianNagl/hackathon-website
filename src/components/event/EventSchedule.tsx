import classNames from 'classnames';
import React from 'react';
import {Link} from 'react-router-dom';
import {AbschlussveranstaltungSchedule} from './AbschlussveranstaltungSchedule';
import {exportSchedulePdf} from './exportSchedulePdf';
import {
  FrameworkEvent, InfoNote, renderSession, Session, Tentative,
} from './scheduleShared';

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
        gridTitle: 'Eröffnung des Hackathons',
        gridEnd: '11:00',
      },
      {
        time: '10:35–10:45 Uhr',
        title: 'Grußwort',
        speaker: 'Ministerialdirektor Dr. Winfried Brechmann',
        institution: 'Bayerisches Staatsministerium der Justiz',
        hideInGrid: true,
      },
      {
        time: '10:45–11:00 Uhr',
        title: 'Begrüßung durch LMU und TUM',
        speaker: 'Dr. Tristan Radtke (TUM), Niklas Wais (TUM), ' +
          'Dr. Ann-Kristin Mayrhofer (LMU), Nikolaus Bauer (LMU)',
        hideInGrid: true,
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
        gridEnd: '17:30',
      },
    ],
  },
  {
    date: 'Dienstag, 18.08.2026',
    room: 'LMU, Ludwigstr. 28, Raum 122 RGB',
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
    room: 'LMU, Ludwigstr. 28, Raum 122 RGB',
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

const awardsCeremony: FrameworkEvent = {
  date: '05.10.2026',
  title: 'Siegerehrung / Preisverleihung',
  speaker: 'Georg Eisenreich',
  institution: 'Bayerischer Staatsminister der Justiz',
  room: 'Justizpalast, Prielmayerstraße 7, 80335 München-Maxvorstadt',
};

// timetable grid covers 10:00-17:30 in 15-minute slots
const GRID_START_MIN = 10 * 60;
const GRID_END_MIN = 17 * 60 + 30;
const SLOT_MIN = 15;
const TOTAL_SLOTS = (GRID_END_MIN - GRID_START_MIN) / SLOT_MIN;

const toMinutes = (t: string) => {
  const [h, m] = t.split(':').map(Number);
  return h * 60 + m;
};

const parseTimeRange = (time: string) => {
  const matches = time.match(/\d{1,2}:\d{2}/g) ?? [];
  return {
    start: matches[0] ? toMinutes(matches[0]) : GRID_START_MIN,
    end: matches[1] ? toMinutes(matches[1]) : GRID_END_MIN,
  };
};

// resolves the time range used for grid placement, honoring the
// gridEnd override used to merge several detailed entries into one block
const getGridTimeRange = (session: Session) => {
  const {start, end} = parseTimeRange(session.time);
  return session.gridEnd ? {start, end: toMinutes(session.gridEnd)} : {start, end};
};

// +2 accounts for the header row (grid line 1) and 1-indexed grid lines
const gridLine = (minutes: number) => {
  const clamped = Math.min(Math.max(minutes, GRID_START_MIN), GRID_END_MIN);
  return Math.round((clamped - GRID_START_MIN) / SLOT_MIN) + 2;
};

const gridHours = Array.from(
    {length: GRID_END_MIN / 60 - GRID_START_MIN / 60 + 1},
    (_, i) => GRID_START_MIN / 60 + i,
);

// forwards the ref to the inner, full-width grid (not the outer scroll
// wrapper) so html2canvas captures the complete timetable even on mobile,
// where the wrapper's visible width would otherwise clip the export
const WeekGrid = React.forwardRef<HTMLDivElement>((_props, ref) => (
  <div className={'overflow-x-auto'}>
    <div
      ref={ref}
      className={'grid min-w-[760px]'}
      style={{
        gridTemplateColumns: '52px repeat(5, minmax(0, 1fr))',
        gridTemplateRows: `auto repeat(${TOTAL_SLOTS}, 26px)`,
      }}
    >
      {days.map((day, dayIndex) => (
        <div
          key={day.date}
          style={{gridColumn: dayIndex + 2, gridRow: 1}}
          className={'px-1 pb-2 text-center border-b-2 border-blue-12'}
        >
          <div className={'text-text-s-m font-bold text-blue-12'}>
            {day.date.split(',')[0]}
          </div>
          <div className={'text-text-caption text-blue-11'}>
            {day.date.split(', ')[1]}
          </div>
          <div className={'text-text-caption text-blue-11 whitespace-normal break-words'}>
            {day.room ?? 'Raum offen'}
          </div>
          {day.roomTentative && (
            <div className={'text-text-caption text-orange-500 font-semibold'}>
              vorläufig
            </div>
          )}
        </div>
      ))}

      {gridHours.map((hour) => (
        <div
          key={hour}
          style={{gridColumn: 1, gridRow: gridLine(hour * 60)}}
          className={'text-text-caption text-blue-11 text-right pr-1 -translate-y-2'}
        >
          {hour}:00
        </div>
      ))}

      {days.map((day, dayIndex) =>
        day.sessions.filter((session) => !session.hideInGrid).map((session, i) => {
          const {start, end} = getGridTimeRange(session);
          const rowStart = gridLine(start);
          const rowEnd = gridLine(end);
          const rowSpan = rowEnd - rowStart;
          const title = session.gridTitle ?? session.title;
          const isMerged = Boolean(session.gridTitle);
          // very short slots (< 30 min) don't have room for wrapped
          // multi-line text, so keep them to a single truncated title line
          const isCompact = rowSpan <= 1;
          const tentative = session.titleTentative || session.timeTentative;
          return (
            <div
              key={`${day.date}-${i}`}
              style={{
                gridColumn: dayIndex + 2,
                gridRow: `${rowStart} / ${rowEnd}`,
              }}
              title={[
                session.time,
                title,
                tentative && 'vorläufig',
                session.note,
              ].filter(Boolean).join(' – ')}
              className={classNames(
                  'mx-0.5 my-px rounded px-1 py-0.5 overflow-hidden border',
                  isCompact && 'flex flex-col justify-center',
                  session.isBreak ?
                    'bg-blue-2 border-blue-5 text-blue-11 italic' :
                    'bg-blue-3 border-blue-11 text-blue-12',
                  tentative && '!border-amber-9',
              )}
            >
              <div className={classNames(
                  'text-text-overline font-semibold leading-tight',
                  isCompact ? 'truncate min-w-0 w-full' : 'whitespace-normal break-words',
              )}>
                {title}
              </div>
              {!isCompact && !isMerged && !session.isBreak &&
                (session.speaker || session.institution) && (
                <div className={'text-text-overline leading-tight opacity-80 ' +
                  'whitespace-normal break-words'}>
                  {[session.speaker, session.institution].filter(Boolean).join(' – ')}
                </div>
              )}
              {!isCompact && session.note && (
                <div className={'text-text-overline leading-tight not-italic ' +
                  'whitespace-normal break-words text-green-11 font-semibold'}>
                  {session.note}
                </div>
              )}
              {tentative && (
                <div className={'text-text-overline leading-tight font-semibold ' +
                  'text-orange-500'}>
                  vorläufig
                </div>
              )}
            </div>
          );
        }),
      )}
    </div>
  </div>
));
WeekGrid.displayName = 'WeekGrid';

type ViewMode = 'list' | 'grid';

export class EventSchedule extends React.Component<{}, {view: ViewMode}> {
  state: {view: ViewMode} = {view: 'list'};
  gridRef = React.createRef<HTMLDivElement>();

  handleExportPdf = () => {
    if (this.gridRef.current) {
      exportSchedulePdf({
        element: this.gridRef.current,
        title: 'Ablaufplan – Legal Loves Tech Hackathon 2026',
        filename: 'llt-hackathon-2026-stundenplan.pdf',
      }).catch((err) => console.error('PDF-Export fehlgeschlagen', err));
    }
  };

  render() {
    const {view} = this.state;
    const tabBase = 'px-4 py-2 rounded font-semibold text-text-s-m transition-colors';
    const tabActive = 'bg-blue-12 text-white';
    const tabInactive = 'bg-blue-3 text-blue-12 hover:bg-blue-4';
    return (
      <div className={'flex flex-col gap-10'}>
        <div className={'bg-amber-2 border border-amber-9 rounded px-6 py-5 ' +
          'text-text-m lg:text-text-l'}>
          <strong>Hinweis:</strong> Slots, die noch nicht final
          bestätigt sind, sind mit <Tentative/> gekennzeichnet.
        </div>

        <div className={'flex gap-2'}>
          <button
            type={'button'}
            onClick={() => this.setState({view: 'list'})}
            className={classNames(tabBase, view === 'list' ? tabActive : tabInactive)}
          >
            Liste
          </button>
          <button
            type={'button'}
            onClick={() => this.setState({view: 'grid'})}
            className={classNames(tabBase, view === 'grid' ? tabActive : tabInactive)}
          >
            Stundenplan
          </button>
          {view === 'grid' && (
            <button
              type={'button'}
              onClick={this.handleExportPdf}
              className={classNames(tabBase, 'bg-blue-1 text-blue-12 border ' +
                'border-blue-12 hover:bg-blue-3')}
            >
              Als PDF exportieren
            </button>
          )}
        </div>

        {view === 'grid' && <WeekGrid ref={this.gridRef}/>}

        {view === 'list' && days.map((day) => (
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

        <div id={'abschlussveranstaltung'}>
          <div className={'w-full h-1 bg-blue-12 rounded mb-4'} />
          <div className={'flex flex-wrap items-baseline justify-between gap-2 mb-3'}>
            <div className={'text-head-s lg:text-head-m font-bold text-blue-12'}>
              Abschlussveranstaltung
            </div>
            <Link
              to={'/abschlussveranstaltung#anmeldung'}
              className={'underline font-semibold text-blue-11 hover:text-blue-12'}
            >
              Als Besucher:in anmelden →
            </Link>
          </div>
          <AbschlussveranstaltungSchedule/>
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
