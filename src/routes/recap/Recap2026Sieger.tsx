import React from 'react';
import {RecapSubpageLayout} from './RecapSubpageLayout';
import {RecapFigure} from './RecapFigure';
import siegerehrungImg from '../../img/recap2026/siegerehrung.jpeg';
import rechtEasyImg from '../../img/recap2026/team-rechteasy.jpg';
import illegalTechImg from '../../img/recap2026/team-illegal-tech.jpg';
import legaLegendsImg from '../../img/recap2026/team-legalegends.jpg';

type Podium = {
  medal: string
  team: string
  members: string
  prize: string
  challenge: string
  quote: string
  text: string
  img: string
  caption: string
};

const podium: Podium[] = [
  {
    medal: '🥇',
    team: 'RechtEasy',
    members: 'Manuel Bankhammer & Annelie Kladny',
    prize: '1.500 €',
    challenge: 'Challenge StMJ III',
    quote: '„Wer erbt? Familien- und Erbstruktur visualisieren"',
    text: 'Wie lassen sich komplexe Familienverhältnisse und die gesetzliche ' +
      'Erbfolge für juristische Laien verständlich darstellen? RechtEasy hat ' +
      'auf diese Frage eine überzeugende Antwort gefunden: eine Lösung, die ' +
      'ein komplexes Rechtsgebiet so aufbereitet, dass Menschen ohne ' +
      'juristische Ausbildung ihre Situation verstehen und einordnen können.',
    img: rechtEasyImg,
    caption: 'Team RechtEasy',
  },
  {
    medal: '🥈',
    team: 'Illegal Tech',
    members: 'Karthik Alapati, Sebastian Kaiser, Donghyun Kim & Paul ' +
      'Vossebürger',
    prize: '500 €',
    challenge: 'Challenge VZ III',
    quote: '„Webseiten- und Design-Monitor"',
    text: 'Dark Patterns — manipulative Gestaltungselemente auf digitalen ' +
      'Plattformen — kosten Verbraucherinnen und Verbraucher täglich Geld und ' +
      'Rechte. Illegal Tech hat einen Monitor entwickelt, der solche Muster ' +
      'automatisiert erkennt und damit ein Werkzeug liefert, das ' +
      'Verbraucherschutz im digitalen Raum konkret und skalierbar macht.',
    img: illegalTechImg,
    caption: 'Team Illegal Tech',
  },
  {
    medal: '🥉',
    team: 'LegaLegends',
    members: 'Chander Bhanu, Yichen Fu, Konstantin Heise & Min-Hyouk Seo',
    prize: '200 €',
    challenge: 'Challenge StMJ IV',
    quote: '„Was unterschreibe ich? Erkläre mir meinen Vertrag"',
    text: 'Vertragsklauseln so aufbereiten, dass Bürgerinnen und Bürger ihre ' +
      'Rechte und Pflichten wirklich verstehen — das ist eine der drängendsten ' +
      'Fragen des Legal Tech. LegaLegends hat dafür eine Lösung entwickelt, ' +
      'die sprachliche Barrieren abbaut und das Kleingedruckte lesbar macht.',
    img: legaLegendsImg,
    caption: 'Team LegaLegends',
  },
];

type AwardWinner = {
  team: string
  members: string
  challenge: string
  score: string
};

type Award = {
  icon: string
  title: string
  text: string
  winners: AwardWinner[]
};

const rechtEasyMembers = 'Manuel Bankhammer, Annelie Kladny';

const awards: Award[] = [
  {
    icon: '💡',
    title: 'Bestes Problemverständnis',
    text: 'Hat das rechtliche und gesellschaftliche Problem hinter der ' +
      'Challenge besonders präzise erfasst, analysiert und zur Grundlage ' +
      'einer überzeugenden Lösung gemacht.',
    winners: [
      {
        team: 'Illegal Tech',
        members: 'Karthik Alapati, Sebastian Kaiser, Donghyun Kim, Paul ' +
          'Vossebürger',
        challenge: 'VZ III — Webseiten- und Design-Monitor',
        score: '9,5 / 10',
      },
      {
        team: 'MUC Legal',
        members: 'Alessandro Bonanno, Korbinian Geisenhofer, Laura Kirsch',
        challenge: 'VZ II — KI-gestützter Unterlassungs- und ' +
          'Umsetzungsmonitor',
        score: '9,5 / 10',
      },
    ],
  },
  {
    icon: '✨',
    title: 'Innovation & Kreativität',
    text: 'Hat mit einem besonders originellen Lösungsansatz echten Mehrwert ' +
      'gegenüber bestehenden Lösungen geschaffen und ist dabei über bekannte ' +
      'Ansätze hinausgegangen.',
    winners: [
      {
        team: 'PubLex',
        members: 'Joël Marth, Vanessa Schmidt, Nikita Zykov',
        challenge: 'VZ I — Fall-Prüfer',
        score: '8,8 / 10',
      },
    ],
  },
  {
    icon: '🏆',
    title: 'Beste technische Umsetzung',
    text: 'Hat durch die herausragende technische Qualität und Reife seiner ' +
      'Lösung überzeugt.',
    winners: [
      {
        team: 'RechtEasy',
        members: rechtEasyMembers,
        challenge: 'StMJ III — Wer erbt?',
        score: '8,8 / 10',
      },
    ],
  },
  {
    icon: '⚖️',
    title: 'Beste rechtliche Qualität',
    text: 'Hat seine Lösung auf einer rechtlich korrekten Grundlage ' +
      'entwickelt, relevante rechtliche Anforderungen berücksichtigt und ein ' +
      'klares Bewusstsein für rechtliche Grenzen gezeigt.',
    winners: [
      {
        team: 'RechtEasy',
        members: rechtEasyMembers,
        challenge: 'StMJ III — Wer erbt?',
        score: '9,3 / 10',
      },
    ],
  },
  {
    icon: '🎤',
    title: 'Beste Präsentation & Pitch',
    text: 'Hat sein Konzept und seinen Nutzen klar und überzeugend vermittelt ' +
      'und durch Struktur, Verständlichkeit und Überzeugungskraft die Jury ' +
      'besonders beeindruckt.',
    winners: [
      {
        team: 'Lex Rex',
        members: 'Paulina Baumann, Sungho Park, Franz Scheller',
        challenge: 'StMJ I — Was ist passiert?',
        score: '9,0 / 10',
      },
    ],
  },
  {
    icon: '🎯',
    title: 'Beste Praxistauglichkeit & Impact',
    text: 'Hat eine Lösung mit unmittelbarem praktischem Nutzen und echtem ' +
      'Wirkungspotenzial für den Zugang zum Recht entwickelt.',
    winners: [
      {
        team: 'RechtEasy',
        members: rechtEasyMembers,
        challenge: 'StMJ III — Wer erbt?',
        score: '9,0 / 10',
      },
    ],
  },
];

const elevenLabsTeams: {team: string; members: string}[] = [
  {team: 'RechtEasy', members: 'Manuel Bankhammer, Annelie Kladny'},
  {
    team: 'Arkisola',
    members: 'Ari Leibowitz, Laurin Allmansberger, Sophia Schäfer, ' +
      'Kiander Pomper',
  },
];

// Recap2026Sieger – "Die Sieger" subpage: podium, special categories and the
// ElevenLabs award of the 2026 hackathon.
export function Recap2026Sieger() {
  return (
    <RecapSubpageLayout title={'Die Sieger'} backTo={'/recap/2026'}>

      <h2 className={'text-head-s lg:text-head-m font-bold mt-2'}>
        Ausgezeichnete Lösungen für den Zugang zum Recht
      </h2>
      <p className={'text-justify'}>
        Nach langer Jury-Beratung standen die Gewinner des Legal Loves Tech
        Hackathon 2026 fest. Alle drei Siegerteams sind von Staatsminister Georg
        Eisenreich persönlich eingeladen, ihre Lösungen im Justizpalast zu
        pitchen.
      </p>

      <RecapFigure src={siegerehrungImg}
        caption={'Siegerehrung / alle drei Siegerteams'} centered />

      <div className={'flex flex-col gap-6'}>
        {podium.map((p) => (
          <div key={p.team}>
            <div className={'bg-blue-3 border border-blue-12 rounded ' +
              'p-5 lg:p-6'}>
              <div className={'flex items-center gap-4 flex-wrap mb-3'}>
                <span className={'text-head-m'}>{p.medal}</span>
                <div className={'flex-1'}>
                  <div className={'text-text-l font-bold text-blue-12'}>
                    {p.team}
                  </div>
                  <div className={'text-text-s opacity-70'}>{p.members}</div>
                </div>
                <span className={'text-text-l font-bold text-blue-12'}>
                  {p.prize}
                </span>
              </div>
              <div className={'text-text-s font-semi-bold uppercase ' +
                'tracking-wide opacity-70 mb-2'}>
                {p.challenge}
              </div>
              <p className={'text-text-m opacity-90 text-justify'}>
                <strong>{p.quote}</strong><br />
                {p.text}
              </p>
            </div>
            <RecapFigure src={p.img} caption={p.caption} centered />
          </div>
        ))}
      </div>

      {/* ── Einzelkategorien ── */}
      <h2 className={'text-head-s lg:text-head-m font-bold mt-8'}>
        Einzelkategorien
      </h2>
      <div className={'grid grid-cols-1 sm:grid-cols-2 gap-4'}>
        {awards.map((a) => (
          <div key={a.title}
            className={'bg-blue-3 border border-blue-4 rounded p-5'}>
            <div className={'text-head-m mb-2'}>{a.icon}</div>
            <h4 className={'text-text-m font-semi-bold text-blue-12 mb-2'}>
              {a.title}
            </h4>
            <div className={'flex flex-col gap-3'}>
              {a.winners.map((w) => (
                <div key={w.team}>
                  <div className={'flex items-baseline gap-2 flex-wrap'}>
                    <span className={'text-text-m font-bold text-blue-12'}>
                      {w.team}
                    </span>
                    <span className={'text-text-s font-semi-bold ' +
                      'text-blue-11'}>
                      {w.score}
                    </span>
                  </div>
                  <div className={'text-text-s opacity-70'}>{w.members}</div>
                  <div className={'text-text-s font-semi-bold uppercase ' +
                    'tracking-wide opacity-60 mt-1'}>
                    {w.challenge}
                  </div>
                </div>
              ))}
            </div>
            <p className={'text-text-s opacity-80 mt-3'}>{a.text}</p>
          </div>
        ))}
      </div>

      {/* ── ElevenLabs-Preis ── */}
      <h2 className={'text-head-s lg:text-head-m font-bold mt-8'}>
        ElevenLabs-Preis
      </h2>
      <div className={'bg-blue-3 border border-blue-4 rounded p-5 lg:p-6 ' +
        'max-w-[540px]'}>
        <div className={'text-head-m mb-2'}>🎙️</div>
        <h4 className={'text-text-l font-semi-bold text-blue-12 mb-2'}>
          ElevenLabs Special Award
        </h4>
        <div className={'flex flex-col gap-2 mb-3'}>
          {elevenLabsTeams.map((t) => (
            <div key={t.team}>
              <div className={'text-text-m font-bold text-blue-12'}>
                {t.team}
              </div>
              <div className={'text-text-s opacity-70'}>{t.members}</div>
            </div>
          ))}
        </div>
        <p className={'text-text-s opacity-80'}>
          Ausgezeichnet für die kreativste bzw. wirkungsvollste Nutzung von
          Voice-AI-Technologie im Kontext von Access to Justice.
        </p>
      </div>

    </RecapSubpageLayout>
  );
}
