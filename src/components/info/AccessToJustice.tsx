import React from 'react';

export class AccessToJustice extends React.Component {
  render() {
    return (
      <div className={'bg-blue-12 text-blue-1 py-20 px-6'}>
        <div className={'max-w-[800px] mx-auto flex flex-col gap-6'}>

          <h2 className={'text-3xl md:text-4xl font-bold leading-tight'}>
            Zugang zum Recht. Für alle.
          </h2>

          <p className={'text-lg md:text-xl leading-relaxed opacity-90'}>
            Der Legal Loves Tech Hackathon 2026 steht unter dem Leitthema
            {' '}<strong>„Access to Justice"</strong>: Wie kann der Einsatz
            von Künstlicher Intelligenz und digitalen Werkzeugen dazu beitragen,
            rechtliche Prozesse verständlicher, zugänglicher und gerechter
            zu gestalten?
          </p>

          <p className={'text-lg md:text-xl font-semibold'}>
            Gemeinsam entwickeln wir Prototypen, die Barrieren im
            Rechtssystem abbauen.
          </p>

        </div>
      </div>
    );
  }
}
