import React from 'react';

export class EventInformationList extends React.Component {
  informationList: string[] = [

    'Der Legal Loves Tech Hackathon 2026 findet vom 17. bis 21. August 2026' +
    ' in Präsenz in München statt. Der abschließende Präsentationstag ist' +
    ' für den 27. August 2026 vorgesehen.',

    'Die Teilnahme ist kostenfrei. Vorkenntnisse im Bereich Legal Tech sind' +
    ' keine Voraussetzung – das gesamte erforderliche Wissen wird direkt im' +
    ' Rahmen der Hackathon-Woche vermittelt.',

    'Der Hackathon richtet sich an Studierende der TUM und der LMU.' +
    ' LMU-Studierende melden sich über das LSF an, TUM-Studierende über' +
    ' TUM SOT und TUM CIT. TUM-Studierende können die Teilnahme mit' +
    ' 3 ECTS-Credits als Bachelor-Modul anrechnen lassen. An der LMU wird' +
    ' der Hackathon als Grundlagenseminar und Wahlpflichtmodul im' +
    ' Zertifikatsstudiengang Rechtsinformatik angeboten.',

    'Das Format fördert ausdrücklich interdisziplinäre Teams aus' +
    ' Rechtswissenschaft, Informatik und Wirtschaftswissenschaften.',

    'Die Teameinteilung findet am ersten Tag des Hackathons statt.',

    'Am Ende der Woche präsentieren die Teams ihre Legal-Tech-Lösungen vor' +
    ' einer interdisziplinären Fachjury. Die drei besten Teams werden mit' +
    ' einem Preisgeld sowie einer Urkunde und einem Pokal ausgezeichnet.',

  ];

  render() {
    return <ul className={'list-disc text-text-m lg:text-text-l'}>
      {this.informationList.map((information, i) => {
        if (i+1 === this.informationList.length) {
          return <li key={i}>{information}</li>;
        }
        // eslint-disable-next-line react/jsx-key
        return <li key={i} className="pb-4">{information}</li>;
      })}
    </ul>;
  }
}
