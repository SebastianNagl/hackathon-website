import React from 'react';

type Group = {
  heading: string;
  items: React.ReactNode[];
};

const groups: Group[] = [
  {
    heading: 'Überblick',
    items: [
      <>
        Der Legal Loves Tech Hackathon 2026 findet vom{' '}
        <strong>17. bis 21. August 2026</strong> in Präsenz in München statt.
        Der abschließende Präsentationstag ist für den{' '}
        <strong>27. August 2026</strong> vorgesehen.
      </>,

      <>
        Die Teilnahme ist <strong>kostenfrei</strong>. Vorkenntnisse im Bereich
        Legal Tech sind <strong>keine Voraussetzung</strong> – das gesamte
        erforderliche Wissen wird direkt im Rahmen der Hackathon-Woche vermittelt.
      </>,

      <>
        Das Format fördert ausdrücklich{' '}
        <strong>interdisziplinäre Teams</strong> aus Rechtswissenschaft,
        Informatik und Wirtschaftswissenschaften.
      </>,
    ],
  },
  {
    heading: 'Anmeldung und Anrechnung im Studium',
    items: [
      <>
        <strong>TUM-Studierende</strong> der School of Social Sciences and
        Technology (SOT) melden sich über <strong>TUM SOT (Modul SOT82137)</strong> an
        und können die Teilnahme mit <strong>3 ECTS-Credits</strong> als
        Bachelor-Modul anrechnen lassen. Studierende anderer Schools können sich
        ebenfalls in das SOT-Modul einschreiben, müssen es sich dann aber
        nachträglich von ihrer jeweiligen School anerkennen lassen. Das ist für
        zahlreiche Studiengänge in der Regel unproblematisch möglich.
      </>,

      <>
        <strong>LMU-Studierende der Juristischen Fakultät</strong> melden sich
        über das <strong>LSF</strong> an. An der LMU wird der Hackathon als
        <strong> Grundlagenseminar</strong> und Wahlpflichtmodul im{' '}
        <strong>Zertifikatsstudiengang Rechtsinformatik</strong> angeboten.
      </>,

      <>
        <strong>LMU-Studierende der Juristischen Fakultät</strong>, die nicht an einem{' '}
        <strong>Grundlagenseminar</strong> teilnehmen, sowie <strong>andere Studierende</strong>,
        die sich nicht über die Lehrmodule anmelden können, sind ebenfalls herzlich willkommen.
        Die Teilnahme erfolgt in diesem Fall <strong>ohne Anrechnung als Lehrveranstaltung</strong>.
        Zur Anmeldung geht es{' '}
        <a href={'/join'} className={'underline font-semibold'}>hier</a>.
      </>,

      <>
        Weitergehende Informationen zur Anmeldung findest du{' '}
        <a href={'/join'} className={'underline font-semibold'}>hier</a>.
      </>,
    ],
  },
  {
    heading: 'Ablauf',
    items: [
      <>Die Teameinteilung findet am <strong>ersten Tag</strong> des Hackathons statt.</>,

      <>
        Am Ende der Woche präsentieren die Teams ihre Legal-Tech-Lösungen vor
        einer <strong>interdisziplinären Fachjury</strong>. Die drei besten Teams
        werden mit einem <strong>Preisgeld sowie einer Urkunde und einem Pokal</strong> ausgezeichnet.
      </>,

      <>
        Die Gewinnerteams werden ihren Prototypen im{' '}
        <strong>Justizpalast</strong> vor dem{' '}
        <strong>Staatsminister der Justiz</strong> pitchen.
      </>,
    ],
  },
];

export class EventInformationList extends React.Component {
  render() {
    return (
      <div className={'flex flex-col gap-8'}>
        {groups.map((group) => (
          <div key={group.heading}>
            <div className={'w-full h-1 bg-blue-12 rounded mb-4'} />
            <div className={'py-2 mb-3 text-head-m lg:text-head-l font-bold'}>{group.heading}</div>
            <ul className={'list-disc text-text-m lg:text-text-l'}>
              {group.items.map((item, i) => (
                <li key={i} className={i + 1 < group.items.length ? 'pb-4' : ''}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
}
