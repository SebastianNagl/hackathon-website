import React from 'react';
import {exportSchedulePdf} from './exportSchedulePdf';
import {
  abschlussveranstaltungEvent, InfoNote, renderSession, Tentative,
} from './scheduleShared';

// shared between the Event page's Ablaufplan and the dedicated
// Abschlussveranstaltung page, so both always show the same agenda
export class AbschlussveranstaltungSchedule extends React.Component {
  ref = React.createRef<HTMLDivElement>();

  handleExportPdf = () => {
    if (this.ref.current) {
      exportSchedulePdf({
        element: this.ref.current,
        title: 'Ablaufplan – Abschlussveranstaltung (27.08.2026)',
        filename: 'llt-hackathon-2026-abschlussveranstaltung.pdf',
        orientation: 'portrait',
      }).catch((err) => console.error('PDF-Export fehlgeschlagen', err));
    }
  };

  render() {
    const event = abschlussveranstaltungEvent;
    return (
      <div ref={this.ref}>
        <div className={'flex flex-wrap items-baseline justify-between gap-2 mb-3'}>
          <div className={'text-text-m lg:text-text-l font-semibold text-blue-12'}>
            {event.title} – {event.date}
            {event.dateTentative && <Tentative label={'Termin vorläufig'}/>}
          </div>
          <div className={'flex items-baseline gap-4'}>
            {event.room && (
              <div className={'text-text-s-m lg:text-text-m text-blue-11'}>
                Raum: {event.room}
              </div>
            )}
            <button
              type={'button'}
              onClick={this.handleExportPdf}
              className={'px-4 py-2 rounded font-semibold text-text-s-m ' +
                'transition-colors bg-blue-1 text-blue-12 border border-blue-12 ' +
                'hover:bg-blue-3'}
            >
              Als PDF exportieren
            </button>
          </div>
        </div>
        {event.note && (
          <div className={'mb-3'}><InfoNote>{event.note}</InfoNote></div>
        )}
        <div className={'flex flex-col'}>
          {(event.sessions ?? []).map(renderSession)}
        </div>
      </div>
    );
  }
}
