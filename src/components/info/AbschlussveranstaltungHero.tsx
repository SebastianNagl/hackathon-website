import React from 'react';
import {Link} from 'react-router-dom';

export class AbschlussveranstaltungHero extends React.Component {
  render() {
    return (
      <div className={'bg-red-3 py-20 px-6'}>
        <div className={'max-w-[800px] mx-auto flex flex-col gap-6'}>

          <h2 className={'text-3xl md:text-4xl font-bold leading-tight text-blue-12'}>
            Erleben Sie die Abschlussveranstaltung live
          </h2>

          <p className={'text-lg md:text-xl leading-relaxed text-blue-12'}>
            Nach einer intensiven Hackathon-Woche unter dem Motto{' '}
            <strong>„Zugang zum Recht"</strong> präsentieren die
            interdisziplinären Teams des Legal Loves Tech Hackathon 2026 ihre
            entwickelten Legal-Tech-Lösungen vor einer hochkarätig besetzten
            Fachjury aus Politik, Wissenschaft, Wirtschaft und
            Zivilgesellschaft.
          </p>

          <p className={'text-lg md:text-xl leading-relaxed text-blue-12'}>
            Wir laden Sie herzlich ein, die Ergebnisse einer Woche voller
            Kreativität, technischer Innovation und juristischer Tiefe live
            mitzuerleben und gemeinsam mit uns die Preisträgerinnen und
            Preisträger zu feiern.
          </p>

          <Link
            to={'/abschlussveranstaltung'}
            className={'inline-block w-fit text-white px-6 py-2 rounded ' +
              'font-bold text-text-m hover:opacity-80 transition-opacity'}
            style={{backgroundColor: '#0545AF'}}
          >
            Als Besucher:in anmelden
          </Link>

        </div>
      </div>
    );
  }
}
