import React from 'react';
import {RecapSubpageLayout} from './RecapSubpageLayout';
import vzLogo from '../../img/partners/VerbraucherzentraleBayern.png';
import stmjLogo from '../../img/partners/stmj.png';

type Challenge = {
  label: string
  title: string
  desc: string
  winner?: {rank: string; team: string}
};

type PartnerBlock = {
  partner: string
  by: string
  logo: string
  challenges: Challenge[]
};

const blocks: PartnerBlock[] = [
  {
    partner: 'Verbraucherzentrale Bayern e.V.',
    by: 'Challenges von Tatjana Halm, Simone Bueb & Sonja Neumann',
    logo: vzLogo,
    challenges: [
      {
        label: 'VZ I',
        title: 'Fall-Prüfer — automatisierte Bewertung konkreter ' +
          'Verbraucherfälle',
        desc: 'Ein Tool, das anhand eines konkreten Verbraucherfalls ' +
          '(z. B. Preiserhöhungsschreiben + AGB) rechtliche Prüfpunkte ' +
          'durchläuft.',
      },
      {
        label: 'VZ II',
        title: 'KI-gestützter Unterlassungs- und Umsetzungsmonitor',
        desc: 'Aus festgestellten Verstößen wird automatisch ' +
          'Unterlassungstext abgeleitet; anschließend überwacht das System ' +
          'Webseiten, AGB und Vertragsbedingungen kontinuierlich auf ' +
          'Einhaltung der Unterlassungserklärung.',
      },
      {
        label: 'VZ III',
        title: 'Webseiten- und Design-Monitor',
        desc: 'Wie lassen sich Dark Patterns und manipulative ' +
          'Gestaltungselemente auf digitalen Plattformen automatisiert ' +
          'erkennen und für Verbraucher:innen sichtbar machen?',
        winner: {rank: '2. Platz', team: 'Illegal Tech'},
      },
      {
        label: 'VZ IV',
        title: 'KI-gestützte Mustererkennung in Verbraucherbeschwerden',
        desc: 'Eingehende Verbraucherbeschwerden werden klassifiziert, ' +
          'thematisch gebündelt und auf wiederkehrende Muster sowie neue ' +
          'Problemfelder analysiert — als Grundlage für gezielte ' +
          'Verbraucherwarnungen und Durchsetzungsmaßnahmen.',
      },
    ],
  },
  {
    partner: 'Bayerisches Staatsministerium der Justiz',
    by: 'Challenges von Maximilian Kruger',
    logo: stmjLogo,
    challenges: [
      {
        label: 'StMJ I',
        title: 'Was ist passiert? Unstrukturierte Alltagsschilderung in ' +
          'strukturierten Sachverhalt verwandeln',
        desc: 'Ein Tool, das aus formlosen Alltagsbeschreibungen ' +
          '(„Die Ware kam nicht an", „der Vermieter reagiert nicht") einen ' +
          'strukturierten juristischen Sachverhalt erstellt — mit Parteien, ' +
          'Zeitabläufen, relevanten Dokumenten und Hinweisen auf fehlende ' +
          'Informationen. Anwendungsbereiche: Verbraucherverträge, ' +
          'Mietverhältnisse, Reisefälle, Werkverträge.',
      },
      {
        label: 'StMJ II',
        title: 'Was nun? Digitaler Nachlassassistent',
        desc: 'Ein interaktiver Leitfaden für Hinterbliebene, der durch die ' +
          'wichtigsten Erbschaftsschritte führt: Erbschein, Erbausschlagung ' +
          '(§ 1944 BGB), Nachlassgericht (§ 343 FamFG), letztwillige ' +
          'Verfügungen. Konzipiert für ältere und weniger digitalaffine ' +
          'Nutzer:innen in emotional belastenden Situationen.',
      },
      {
        label: 'StMJ III',
        title: 'Wer erbt? Familien- und Erbstruktur visualisieren',
        desc: 'Wie lassen sich komplexe Familienverhältnisse und die ' +
          'gesetzliche Erbfolge so darstellen, dass juristische Laien ihre ' +
          'eigene Situation verstehen und einordnen können?',
        winner: {rank: '1. Platz', team: 'RechtEasy'},
      },
      {
        label: 'StMJ IV',
        title: 'Was unterschreibe ich? Erkläre mir meinen Vertrag',
        desc: 'Wie können Vertragsklauseln so aufbereitet werden, dass ' +
          'Bürger:innen ihre Rechte und Pflichten wirklich verstehen — ohne ' +
          'juristische Vorkenntnisse?',
        winner: {rank: '3. Platz', team: 'LegaLegends'},
      },
    ],
  },
];

// Recap2026Challenges – "Die Challenges" subpage: the eight tasks set by the
// two practice partners.
export function Recap2026Challenges() {
  return (
    <RecapSubpageLayout title={'Die Challenges'} backTo={'/recap/2026'}>

      <h2 className={'text-head-s lg:text-head-m font-bold mt-2'}>
        Acht Aufgaben. Zwei Praxispartner. Ein Thema.<br />
        Zugang zum Recht
      </h2>
      <p className={'text-justify'}>
        Die Challenges kamen von Institutionen, die täglich mit den Barrieren
        zu tun haben, von denen dieser Hackathon handelt. Das Bayerische
        Staatsministerium der Justiz und die Verbraucherzentrale Bayern e.V.
        haben je vier Aufgabenstellungen entwickelt — und damit den Teams echte
        Problemstellungen aus der Praxis in die Hand gegeben.
      </p>

      <div className={'grid grid-cols-1 lg:grid-cols-2 gap-8 mt-2'}>
        {blocks.map((block) => (
          <div key={block.partner}>
            <img
              src={block.logo}
              alt={block.partner}
              className={'h-12 w-auto object-contain mb-3'}
            />
            <h3 className={'text-text-l font-bold text-blue-12'}>
              {block.partner}
            </h3>
            <p className={'text-text-s opacity-70 mb-4'}>{block.by}</p>

            <div className={'flex flex-col gap-3'}>
              {block.challenges.map((ch) => (
                <div key={ch.label}
                  className={'bg-blue-3 border border-blue-4 rounded p-4'}>
                  <div className={'text-text-s font-bold uppercase ' +
                    'tracking-wide opacity-70 mb-1'}>
                    {ch.label}
                  </div>
                  <div className={'text-text-m font-semi-bold text-blue-12 ' +
                    'mb-1'}>
                    {ch.title}
                  </div>
                  <p className={'text-text-s opacity-80'}>{ch.desc}</p>
                  {ch.winner && (
                    <span className={'inline-block mt-2 text-text-s ' +
                      'font-semi-bold bg-blue-4 text-blue-12 rounded-full ' +
                      'px-3 py-1'}>
                      {ch.winner.rank} · {ch.winner.team}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

    </RecapSubpageLayout>
  );
}
