import React from 'react';
import {Footer} from '../components/footer/Footer';
import '../components/event/EventTitle.css';
import heckmann from '../img/jury/Dirk Heckmann.jpg';
import leonardOrth from '../img/jury/Leonard Orth.jpg';
import kaiEbert from '../img/jury/Kai Ebert.jpeg';
import nathaliaSchomerus from '../img/jury/Nathalia Schomerus.jpeg';

type JuryMember = {
  name: string
  title: string
  text: string
  bulletPoints?: string[]
  linkedIn?: string
  img?: string
}

const juryMembers: JuryMember[] = [
  {
    name: 'Prof. Dr. Dirk Heckmann',
    title: 'Lehrstuhl für Recht und Sicherheit der Digitalisierung, TU ' +
      'München',
    text: 'Prof. Dr. Dirk Heckmann war seit 1996 Inhaber des Lehrstuhls ' +
      'für Öffentliches Recht, Sicherheitsrecht und Internetrecht an der ' +
      'Universität Passau, bevor er 2019 an die Technische Universität ' +
      'München als Inhaber des Lehrstuhls für Recht und Sicherheit der ' +
      'Digitalisierung berufen wurde. 2020 hat er dort das TUM Center ' +
      'for Digital Public Services gegründet, das Parlamente und ' +
      'Regierungen auf Bundes- und Landesebene sowie Unternehmen und ' +
      'öffentliche Institutionen zu Rechtsfragen der Digitalisierung und ' +
      'KI-Nutzung, Datenschutz und Datennutzung berät. 2007 wurde der ' +
      'Digitalrechtsexperte als Sachverständiger des Nationalen ' +
      'IT-Gipfels der Bundeskanzlerin und 2018 in die ' +
      'Datenethikkommission der Bundesregierung berufen. Er ist zudem ' +
      'Direktor am Bayerischen Forschungsinstitut für Digitale ' +
      'Transformation. Seit mehr als 22 Jahren wirkt er nebenamtlich als ' +
      'Verfassungsrichter am Bayerischen Verfassungsgerichtshof. 2025 ' +
      'wurde ihm das Bundesverdienstkreuz am Bande für seinen ' +
      'jahrzehntelangen Einsatz für eine gemeinwohlorientierte Digitale ' +
      'Transformation verliehen. In seinen mehr als 200 Publikationen ' +
      'befasst sich Heckmann mit Rechtsfragen im Schnittfeld von Recht ' +
      'und Digitalisierung, insbesondere mit Blick auf die ' +
      'rechtskonforme Nutzung von Daten zu staatlichen und ' +
      'unternehmerischen Zwecken.',
    img: heckmann,
  },
  {
    name: 'Leonard Orth',
    title: 'Founding Associate (Legal & Compliance AI) bei Bayshore AI',
    text: 'Als erster Mitarbeiter treibt Leonard Orth den Aufbau des ' +
      'Legal-Tech-Start-ups Bayshore AI voran. Es ermöglicht die ' +
      'autonome Ausführung komplexer Rechts- und Compliance-Arbeit durch ' +
      'KI-Agenten, basierend auf der Stanford-Forschung im Bereich ' +
      'Neurosymbolic AI. Bayshore ist Anfang 2025 aus dem Stealth-Modus ' +
      'gekommen und hat eine Seed-Finanzierung über 8 Mio. USD unter ' +
      'Führung von Earlybird Venture Capital (sowie Heliad, Lucid ' +
      'Capital und BOOOM) abgeschlossen. Sein Fokus liegt auf der ' +
      'Zusammenarbeit mit Legal- und Compliance-Abteilungen großer ' +
      'Konzerne, um dort juristische Subsumtionen mithilfe von KI zu ' +
      'automatisieren.',
    img: leonardOrth,
  },
  {
    name: 'Kai Ebert',
    title: 'Mitgründer und Beirat von MLTech',
    text: 'Kai Ebert ist Mitgründer und Beirat von MLTech und promoviert ' +
      'derzeit bei Prof. Dr. Philipp Hacker, LL.M. (Yale) an der ' +
      'Europa-Universität Viadrina. Kai studierte Rechtswissenschaften ' +
      'in München und Seoul. Während seines Studiums gründete er die ' +
      'Munich Legal Tech Student Association, um Legal Tech in die ' +
      'juristische Ausbildung zu integrieren und eine Münchener ' +
      'Keimzelle für Technologie und Unternehmergeist im juristischen ' +
      'Bereich zu erschaffen. Vor seiner Promotion bei Prof. Hacker ' +
      'arbeitete Kai in einer internationalen Wirtschaftskanzlei in ' +
      'München und als Rechtsreferendar im Bundeskanzleramt in Berlin.',
    img: kaiEbert,
  },
  {
    name: 'Nathalia Schomerus',
    title: 'Head of Data and Digital Services, RSM Ebner Stolz',
    text: 'Nathalia Schomerus verantwortet als Head of Data and Digital ' +
      'Services die interne Digitalisierung bei RSM Ebner Stolz. Zuletzt ' +
      'war sie die Legal Innovation Lead des KI-Unternehmens Legora. ' +
      'Zuvor baute sie als Leiterin Künstliche Intelligenz (Legal Tech) ' +
      'bei der größten Wirtschaftskanzleien das KI-Team auf und leitete ' +
      'es. Davor gründete sie ein Start-Up, für welches sie als "Forbes ' +
      '30 under 30 Europe" ausgezeichnet wurde. Zuvor war sie nach ' +
      'Abschluss ihres Studiums einige Jahre in England und Israel in ' +
      'der Wissenschaft tätig. Nathalia studierte u.a. Jura, Theologie ' +
      'und VWL und schloss ihr Masterstudium an der Universität Oxford ' +
      'als Clore Graduate Scholar ab.',
    img: nathaliaSchomerus,
  },
];

export class Jury2026 extends React.Component {
  render() {
    return (<div className="overflow-x-hidden min-h-screen flex flex-col">

      <div className={'flex flex-col grow pt-8 mt-28 tabletL:mt-32 xl:mt-36 ' +
        'bg-red-3 pb-16'}>

        <div className={'page-subheader text-head-m font-medium text-blue-1 ' +
          'bg-blue-12 rounded-r py-6 pl-6 pr-14 w-fit relative mb-16'}>
          Jury
        </div>

        <div className={'flex flex-col gap-10 px-6 lg:w-4/5 lg:mx-auto'}>
          {juryMembers.map((member, i) => (
            <div key={i}
              className={'flex flex-col sm:flex-row gap-6 sm:gap-8 ' +
                'bg-blue-3 border border-blue-12 rounded p-6 lg:p-8'}>

              <div className={'flex-shrink-0 flex justify-center sm:block'}>
                {member.img ?
                  <img
                    src={member.img}
                    alt={member.name}
                    className={'w-40 h-40 lg:w-48 lg:h-48 rounded-full ' +
                      'object-cover'}/> :
                  <div className={'w-40 h-40 lg:w-48 lg:h-48 rounded-full ' +
                    'bg-blue-12 opacity-20 flex items-center justify-center ' +
                    'text-head-m font-bold text-blue-1'}>
                    {member.name.split(' ').map((part) => part[0]).join('')}
                  </div>}
              </div>

              <div className={'flex flex-col text-blue-12'}>
                <div className={'text-head-sm lg:text-head-m font-bold'}>
                  {member.name}
                </div>
                <div className={'opacity-80 font-semi-bold mb-3'}>
                  {member.title}
                </div>
                {member.text &&
                  <div className={'text-text-m opacity-90'}>
                    {member.text}
                  </div>}
                {member.bulletPoints &&
                  <ul className={'list-disc pl-5 mt-3 text-text-m ' +
                    'opacity-90 flex flex-col gap-1'}>
                    {member.bulletPoints.map((point, pi) => (
                      <li key={pi}>{point}</li>
                    ))}
                  </ul>}
                {member.linkedIn &&
                  <a
                    href={member.linkedIn}
                    target="_blank"
                    rel="noreferrer"
                    className={'mt-3 text-sm font-semi-bold underline ' +
                      'opacity-80 hover:opacity-100 w-fit'}>
                    LinkedIn-Profil
                  </a>}
              </div>

            </div>
          ))}
        </div>

      </div>

      <Footer backgroundColor={'blue'}/>

    </div>);
  }
}
