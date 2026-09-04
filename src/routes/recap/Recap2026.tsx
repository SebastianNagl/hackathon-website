import React from 'react';
import {Link} from 'react-router-dom';
import {Footer} from '../../components/footer/Footer';
import eventIcon from '../../img/icons/event_repeat.svg';
import teamIcon from '../../img/icons/diversity_3.svg';
import juryIcon from '../../img/icons/editor_choice.svg';
import winnerIcon from '../../img/icons/star.svg';
import challengeIcon from '../../img/icons/flash.svg';
import rechtEasyImg from '../../img/recap2026/team-rechteasy.jpg';

type RecapCard = {
  to: string
  icon: string
  title: string
  description: string
};

const cards: RecapCard[] = [
  {
    to: '/recap/2026/event',
    icon: eventIcon,
    title: 'Das Event',
    description: 'Die Programmwoche vom 18.–22. August und der Abschlusstag ' +
      'im Freskensaal der LMU.',
  },
  {
    to: '/recap/2026/team',
    icon: teamIcon,
    title: 'Das Team',
    description: 'Das Organisationsteam von MLTech, LMU und TUM hinter dem ' +
      'LLT 2026.',
  },
  {
    to: '/recap/2026/challenges',
    icon: challengeIcon,
    title: 'Die Challenges',
    description: 'Acht Aufgabenstellungen vom Bayerischen Staatsministerium ' +
      'der Justiz und der Verbraucherzentrale Bayern e.V.',
  },
  {
    to: '/recap/2026/jury',
    icon: juryIcon,
    title: 'Die Jury',
    description: 'Die vier Expert:innen, die 14 Präsentationen bewertet ' +
      'haben.',
  },
  {
    to: '/recap/2026/sieger',
    icon: winnerIcon,
    title: 'Die Sieger',
    description: 'RechtEasy, Illegal Tech und LegaLegends — sowie die ' +
      'Einzelkategorien und der ElevenLabs-Preis.',
  },
];

// Recap2026 is the landing page for the 2026 edition of the recap. It links
// to the subpages: event, team, challenges, jury and winners.
const Recap2026: React.FC = () => {
  return (
    <div className={'overflow-x-hidden min-h-screen flex flex-col'}>

      {/* ── HERO ── */}
      <div className={'bg-blue-12 text-blue-1 relative flex items-end ' +
        'min-h-[60vh] pt-36 tabletL:pt-44 xl:pt-48 pb-12 px-8 md:px-16 ' +
        'overflow-hidden'}>

        <span className={'absolute right-0 bottom-0 text-[20vw] font-bold ' +
          'text-blue-1 opacity-5 leading-none select-none pointer-events-none'}>
          2026
        </span>

        <div className={'relative z-10 max-w-[900px]'}>
          <p className={'text-blue-7 text-text-l md:text-head-s ' +
            'font-medium uppercase tracking-widest mb-4'}>
            Rückblick · August 2026
          </p>
          <h1 className={'text-5xl md:text-7xl font-bold leading-tight mb-6'}>
            Recap 2026
          </h1>
          <p className={'text-blue-5 text-text-l md:text-head-s ' +
            'leading-relaxed max-w-[600px]'}>
            Zehn Tage, 51 Teilnehmende, 14 Teams, eine Frage: Wie machen wir
            Recht zugänglicher — für alle?
          </p>
        </div>

      </div>

      {/* ── DER RÜCKBLICK ── */}
      <div className={'relative bg-blue-3 flex flex-col justify-center py-12'}>

        <div className={'absolute top-6 right-0 rounded-l z-10 bg-blue-12 ' +
          'text-blue-1 text-3xl px-16 py-4 md:px-12 md:py-5 xl:px-20'}>
          Der Rückblick
        </div>

        <div className={'w-full flex justify-center items-center md:px-4 ' +
          'mt-16'}>
          <div className={'grid gap-4 grid-cols-1 sm:grid-cols-2 ' +
            'lg:grid-cols-3 xl:grid-cols-5 w-full xl:w-4/5 xl:mx-auto ' +
            'px-4 md:px-0'}>

            {cards.map((card) => (
              <Link key={card.to} to={card.to} className={'no-underline'}>
                <div className={'bg-blue-4 rounded h-full p-8 flex flex-col ' +
                  'gap-4 hover:bg-blue-5 transition-colors'}>
                  <img src={card.icon} alt="" className={'w-16 h-16'} />
                  <h2 className={'text-head-m font-semi-bold text-blue-12'}>
                    {card.title}
                  </h2>
                  <p className={'text-text-l text-blue-12 opacity-80'}>
                    {card.description}
                  </p>
                </div>
              </Link>
            ))}

          </div>
        </div>
      </div>

      {/* ── BERICHT ── */}
      <div className={'bg-blue-1 grow'}>

        <div className={'flex pt-6'}>
          <div className={'bg-blue-12 text-blue-1 text-3xl px-20 py-6 ' +
            'rounded-r mb-10'}>
            Der Bericht
          </div>
        </div>

        <div className={'max-w-[800px] mx-auto px-6 pb-20 text-text-m ' +
          'md:text-text-l text-blue-12 leading-relaxed flex flex-col gap-5'}>

          <img
            src={rechtEasyImg}
            alt="Siegerteam RechtEasy des LLT Hackathon 2026"
            className={'w-full rounded mb-2 border border-blue-4'}
          />

          <p className={'text-justify'}>
            Vom 18. bis 22. August 2026 fand in München die Programmwoche des
            Legal Loves Tech Hackathon 2026 statt — fünf Tage mit Vorträgen,
            Workshops, einem Innovation Sprint, zwei Coding-Blöcken und einem
            Pitch-Training. Getragen wurde der Hackathon von MLTech gemeinsam
            mit der LMU und der TUM, unter der Schirmherrschaft des Bayerischen
            Staatsministeriums der Justiz.
          </p>

          <p className={'text-justify'}>
            51 Teilnehmende arbeiteten in 14 Teams an acht Challenges, die vom
            Bayerischen Staatsministerium der Justiz und der Verbraucherzentrale
            Bayern e.V. gestellt wurden — echte Problemstellungen rund um den
            Zugang zum Recht.
          </p>

          <p className={'text-justify'}>
            Am 27. August 2026 präsentierten die Teams ihre Lösungen im
            Freskensaal der LMU einer vierköpfigen Fachjury. Nach langer
            Beratung standen die Sieger fest: <strong>RechtEasy</strong> (1.
            Platz), <strong>Illegal Tech</strong> (2. Platz) und{' '}
            <strong>LegaLegends</strong> (3. Platz). Alle drei Teams sind von
            Staatsminister Georg Eisenreich eingeladen, ihre Lösungen im
            Justizpalast zu pitchen.
          </p>

          <p className={'text-justify'}>
            Details zu allen Programmpunkten, den Challenges, der Jury und den
            ausgezeichneten Teams finden sich auf den einzelnen Unterseiten.
          </p>

        </div>
      </div>

      <Footer backgroundColor={'blue'} />

    </div>
  );
};

export default Recap2026;
