import React, {useEffect} from 'react';
import {Footer} from '../components/footer/Footer';
import '../components/event/EventTitle.css';
import lmuLogo from '../img/partners/lmu.png';
import tumLogo from '../img/partners/TUM_good.svg';
import graduationCapIcon from '../img/icons/graduation-cap.svg';
import paragraphIcon from '../img/icons/paragraph.svg';


function TypeformLive({id}: {id: string}) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//embed.typeform.com/next/embed.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, [id]);
  return <div data-tf-live={id} />;
}

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
                <div className={'flex flex-row items-center gap-3'}>
                  <img
                    src={lmuLogo}
                    alt={'LMU München'}
                    className={'h-12 object-contain'}
                  />
                  <img
                    src={paragraphIcon}
                    alt={'Juristische Fakultät'}
                    className={'h-8 w-auto object-contain opacity-60'}
                  />
                </div>
                <p className={'text-text-m lg:text-text-l text-blue-12 text-center'}>
                  LMU-Studierende der Juristischen Fakultät melden sich über das{' '}
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
                  ,{' '}
                  <a
                    href={'https://campus.tum.de/tumonline/ee/ui/ca2/app/desktop/#/slc.tm.cp/student/registrationProcedures/76490?$ctx=&courseId=950889530'}
                    className={'underline font-semibold'}
                    target={'_blank'}
                    rel={'noreferrer'}
                  >
                    zur Anmeldung
                  </a>
                  ) oder <strong>TUM CIT</strong> (Modulcode folgt) an.
                </p>
              </div>

            </div>

            <div className={'bg-blue-3 border border-blue-12 rounded px-8 py-6 mb-8'}>
              <div className={'flex flex-row items-center gap-6 mb-6'}>
                <img
                  src={graduationCapIcon}
                  alt={'Teilnahme ohne Lehrveranstaltungsanrechnung'}
                  className={'h-12 w-auto object-contain flex-shrink-0'}
                />
                <p className={'text-text-m lg:text-text-l text-blue-12'}>
                  <strong>Teilnahme ohne Lehrveranstaltungsanrechnung:</strong>{' '}
                  Du kannst auch ohne Anrechnung als Lehrveranstaltung am Hackathon teilnehmen –
                  melde dich über das Formular an, wenn du zu einer der folgenden Gruppen gehörst:
                </p>
              </div>
              <ul className={'list-disc text-text-m lg:text-text-l text-blue-12 mb-6 ml-6'}>
                <li className={'mb-2'}>
                  <strong>LMU-Studierende der Juristischen Fakultät</strong>, die nicht an einem Grundlagenseminar teilnehmen
                </li>
                <li>
                  <strong>Andere Studierende</strong>, die sich nicht über LSF oder TUM SOT anmelden können
                </li>
              </ul>
              <TypeformLive id={'01KRP05QZT90FJPDK0GBV25447'} />
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
