import React from 'react';
import {AbschlussveranstaltungSchedule} from '../components/event/AbschlussveranstaltungSchedule';
import '../components/event/EventTitle.css';
import {Footer} from '../components/footer/Footer';
import {LumaCheckoutButton} from '../components/LumaCheckoutButton';

// entrypoint for the Abschlussveranstaltung page (path: /abschlussveranstaltung)
// the Ablaufplan section reuses AbschlussveranstaltungSchedule, the same
// component shown on the Event page, so both always stay in sync
export class Abschlussveranstaltung extends React.Component {
  componentDidMount() {
    if (window.location.hash) {
      const target = document.querySelector(window.location.hash);
      target?.scrollIntoView({behavior: 'smooth'});
    }
  }

  render() {
    return <div className={'overflow-x-hidden min-h-screen flex flex-col'}>

      <div className={'flex flex-col grow pt-8 mb-6 lg:mb-0 mt-28 ' +
          'tabletL:mt-32 xl:mt-36 relative'}>

        <div className={'page-subheader text-head-m font-medium text-blue-1 bg-blue-12 ' +
          'rounded-r py-6 pl-6 pr-14 w-fit relative'}>
          Abschlussveranstaltung
        </div>

        <div className={'py-6 pl-8 pr-10 md:mt-10 tabletL:px-12 lg:w-4/5 lg:mx-auto'}>

          <p className={'text-text-m lg:text-text-l text-blue-12 mb-6'}>
            Nach einer intensiven Hackathon-Woche unter dem Motto{' '}
            <strong>„Zugang zum Recht"</strong> präsentieren die
            interdisziplinären Teams des Legal Loves Tech Hackathon 2026 ihre
            entwickelten Legal-Tech-Lösungen vor einer hochkarätig besetzten
            Fachjury aus Politik, Wissenschaft, Wirtschaft und
            Zivilgesellschaft.
          </p>

          <p className={'text-text-m lg:text-text-l text-blue-12 mb-8'}>
            Wir laden Sie herzlich ein, die Ergebnisse einer Woche voller
            Kreativität, technischer Innovation und juristischer Tiefe live
            mitzuerleben und gemeinsam mit uns die Preisträgerinnen und
            Preisträger zu feiern.
          </p>

          <div id={'anmeldung'} className={'py-8 text-head-m lg:text-head-l font-bold'}>
            Anmeldung für Besucher:innen
          </div>

          <div className={'mb-8'}>
            <LumaCheckoutButton
              eventId={'evt-RekRe60XbuK4HN4'}
              className={'inline-block text-white px-6 py-2 rounded font-bold ' +
                'text-text-m hover:opacity-80 transition-opacity'}
              style={{backgroundColor: '#0545AF'}}
            >
              Als Besucher:in anmelden
            </LumaCheckoutButton>
          </div>

          <div className={'w-full h-1 bg-blue-12 rounded mb-4'} />

          <div className={'py-4 mb-4 text-head-m lg:text-head-l font-bold'}>
            Ablaufplan
          </div>

          <AbschlussveranstaltungSchedule/>

        </div>

      </div>

      <Footer backgroundColor={'red'}/>

    </div>;
  }
}
