import React from 'react';
import {Footer} from '../components/footer/Footer';
import '../components/event/EventTitle.css';
import lmuLogo from '../img/partners/lmu.png';
import tumLogo from '../img/partners/TUM_good.svg';
import graduationCapIcon from '../img/icons/graduation-cap.png';

export class Join extends React.Component {
  render() {
    return (
      <div className={'overflow-x-hidden min-h-screen flex flex-col'}>

        <div className={'flex flex-col grow pt-8 mt-28 tabletL:mt-32 xl:mt-36 bg-red-3'}>

          <div className={'page-subheader text-head-m font-medium text-blue-1 ' +
            'bg-blue-12 rounded-r py-6 pl-6 pr-14 w-fit relative'}>
            Mitmachen
          </div>

          <div className={'py-8 px-8 lg:w-4/5 lg:mx-auto'}>

            <p className={'text-text-m lg:text-text-l text-blue-12 mb-6'}>
              Die Anmeldung zum Legal Loves Tech Hackathon 2026 erfolgt direkt
              über deine Universität:
            </p>

            <div className={'flex flex-col sm:flex-row gap-6 mb-8'}>

              <div className={'bg-blue-3 border border-blue-12 rounded px-8 py-6 ' +
                'flex-1 flex flex-col items-center gap-4'}>
                <img
                  src={lmuLogo}
                  alt={'LMU München'}
                  className={'h-12 object-contain'}
                />
                <p className={'text-text-m lg:text-text-l text-blue-12 text-center'}>
                  LMU-Studierende melden sich über das{' '}
                  <strong>LSF</strong> an.
                </p>
              </div>

              <div className={'bg-blue-3 border border-blue-12 rounded px-8 py-6 ' +
                'flex-1 flex flex-col items-center gap-4'}>
                <img
                  src={tumLogo}
                  alt={'TU München'}
                  className={'h-12 object-contain'}
                />
                <p className={'text-text-m lg:text-text-l text-blue-12 text-center'}>
                  TUM-Studierende melden sich über{' '}
                  <strong>TUM SOT</strong> (Modul{' '}
                  <a
                    href={'https://campus.tum.de/tumonline/WBMODHB.wbShowMHBReadOnly?pKnotenNr=4715303&pOrgNr=52498'}
                    className={'underline font-semibold'}
                    target={'_blank'}
                    rel={'noreferrer'}
                  >
                    SOT82137
                  </a>
                  ) an.<br/><br/>
                  <a
                    href={'https://campus.tum.de/tumonline/ee/ui/ca2/app/desktop/#/slc.tm.cp/student/registrationProcedures/76490?$ctx=&courseId=950889530'}
                    className={'underline font-semibold'}
                    target={'_blank'}
                    rel={'noreferrer'}
                  >
                    Hier geht es zur Anmeldung
                  </a>
                  .
                </p>
              </div>

            </div>

            <div className={'bg-blue-3 border border-blue-12 rounded px-8 py-6 ' +
              'flex flex-row items-center gap-6 mb-8'}>
              <img
                src={graduationCapIcon}
                alt={'Externe Studierende'}
                className={'h-12 w-auto object-contain flex-shrink-0'}
              />
              <p className={'text-text-m lg:text-text-l text-blue-12'}>
                <strong>Externe Studierende:</strong>{' '}
                Verbleibende Plätze werden nach Ablauf der universitären
                Anmeldephase vergeben – weitere Infos folgen.
              </p>
            </div>

            <p className={'text-text-m lg:text-text-l text-blue-12'}>
              Bei Fragen wende dich an{' '}
              <a
                href={'mailto:hackathon@ml-tech.org'}
                className={'underline font-semibold'}
              >
                hackathon@ml-tech.org
              </a>
              .
            </p>

          </div>

        </div>

        <Footer backgroundColor={'blue'}/>

      </div>
    );
  }
}
