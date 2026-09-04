import React from 'react';
import {RecapSubpageLayout} from './RecapSubpageLayout';
import {RecapFigure} from './RecapFigure';
import {RecapCarousel, CarouselItem} from './RecapCarousel';
import {RecapParticipantStats} from './RecapParticipantStats';
import freskensaalImg from '../../img/recap2026/freskensaal.jpeg';
import placeholderImg from '../../img/recap2026/programmwoche-kickoff.svg';

// Every photo under src/img/recap2026 (recursive). Slots resolve their own
// images by path prefix, so new uploads are picked up automatically.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mediaContext = (require as any).context(
    '../../img/recap2026', true, /\.(jpe?g|png)$/,
);
const mediaKeys: string[] = mediaContext.keys();

// images() returns every photo whose key starts with one of the given
// prefixes (a folder path like "./tag-1/eroeffnung/" or a file stem like
// "./tag-2/legal-design"), sorted by filename.
const images = (...prefixes: string[]): string[] =>
  mediaKeys
      .filter((k) => prefixes.some((p) => k.startsWith(p)))
      .sort()
      .map((k) => mediaContext(k) as string);

// byKey resolves a single photo by its context key (or filename suffix).
const byKey = (key: string): string | undefined => {
  const hit = mediaKeys.find((k) => k === key || k.endsWith('/' + key));
  return hit ? (mediaContext(hit) as string) : undefined;
};

const pitchesItems: CarouselItem[] =
  images('./abschluss/pitches/').map((src) => ({src}));

type Slide = {file: string; caption: string};

type Slot = {
  title: string
  speaker: string
  text: React.ReactNode
  // photo path prefix(es) under src/img/recap2026 (folder or file stem)
  imgPrefix: string | string[]
  imgCaption: string
  // explicit, ordered slides with individual captions (overrides imgPrefix)
  slides?: Slide[]
};

type Day = {
  id: string
  weekday: string
  date: string
  num: number
  theme: string
  slots: Slot[]
};

const stats: {num: string; label: string}[] = [
  {num: '51', label: 'Teilnehmende'},
  {num: '14', label: 'Teams'},
  {num: '5', label: 'Tage Programm'},
  {num: '8', label: 'Challenges'},
  {num: '2', label: 'Universitäten'},
];

const days: Day[] = [
  {
    id: 'tag-1',
    weekday: 'Montag',
    date: '18.08.2026',
    num: 1,
    theme: 'Kick-Off — Von der Idee zur Gründung',
    slots: [
      {
        title: 'Eröffnung & Grußworte',
        speaker: '',
        text: (
          <>
            Der erste Tag ließ keine Zeit zum Warmlaufen. Nach dem offiziellen
            Auftakt durch MLTech, die Universitäten LMU und TUM sowie dem
            Grußwort des Schirmherrn Bayerisches Staatsministerium der Justiz,
            vertreten durch Amtschef <strong>Dr. Winfried Brechmann</strong>,
            startete das Programm.
          </>
        ),
        imgPrefix: './tag-1/eroeffnung/',
        imgCaption: 'Eröffnung & Grußworte',
        slides: [
          {
            file: 'registrierung.jpeg',
            caption: '09:30–10:15 Uhr · Registrierung der Teilnehmenden',
          },
          {
            file: 'grusswort-mltech.jpeg',
            caption: '10:15–10:35 Uhr · Eröffnung des Hackathons durch ' +
              'MLTech e. V. — Luca Ballmann, Felicitas Bingger, Enci Huang',
          },
          {
            file: 'grusswort-brechmann.jpeg',
            caption: '10:35–10:45 Uhr · Grußwort — Ministerialdirektor ' +
              'Dr. Winfried Brechmann, Bayerisches Staatsministerium der ' +
              'Justiz',
          },
          {
            file: 'grusswort-lmu-tum.jpeg',
            caption: '10:45–11:00 Uhr · Begrüßung durch LMU und TUM — ' +
              'Dr. Tristan Radtke (TUM), Niklas Wais (TUM), Dr. Ann-Kristin ' +
              'Mayrhofer (LMU), Nikolaus Bauer (LMU)',
          },
          {
            file: 'einweisung.jpeg',
            caption: '11:00–11:45 Uhr · Einweisung der Teilnehmenden',
          },
          {
            file: 'ao-shearman.jpeg',
            caption: '12:00–14:00 Uhr · Mittagessen und Teambildung — ' +
              'Mittagessen gesponsert von A&O Shearman',
          },
          {
            file: 'team.jpeg',
            caption: 'Das Organisationsteam des LLT Hackathon 2026',
          },
          {
            file: 'teilnehmende.jpeg',
            caption: 'Die Teilnehmenden des LLT Hackathon 2026',
          },
        ],
      },
      {
        title: 'Legal-Tech-Potenziale',
        speaker: 'Bernhard Waltl (Liquid Legal Institute e. V.)',
        text: (
          <>
            <strong>Bernhard Waltl</strong> gab einen breiten Überblick über die
            Marktpotenziale von Legal Tech — von wirtschaftlichen Zahlen bis zu
            konkreten Anwendungsfällen, die schon heute den juristischen Alltag
            verändern.
          </>
        ),
        imgPrefix: './tag-1/legal-tech-potenziale',
        imgCaption: 'Vortrag Legal-Tech-Potenziale',
      },
      {
        title: 'Open Table: Wie baue ich ein Start-up auf?',
        speaker: 'Moritz Krüsselmann (Legal Tech Colab, Moderation) · ' +
          'Henrik Volkmann (Libra) · Tim Kniepkamp (Suitcase)',
        text: (
          <>
            Den Nachmittag bestimmte eine offene Diskussionsrunde mit{' '}
            <strong>Henrik Volkmann</strong> (Libra by Wolters Kluwer) und{' '}
            <strong>Tim Kniepkamp</strong> (Suitcase), die ehrliche Einblicke in
            die Start-up-Welt gaben — von der ersten Idee über Rückschläge bis
            zur tatsächlichen Gründung. Moderiert von{' '}
            <strong>Moritz Krüsselmann</strong> (Legal Tech Colab) wurde daraus
            ein Nachmittag, der vielen Teilnehmenden regelrecht Mut gemacht hat,
            selbst groß zu denken.
          </>
        ),
        imgPrefix: './tag-1/startup-open-table',
        imgCaption: 'Open Table zum Start-up-Aufbau',
      },
    ],
  },
  {
    id: 'tag-2',
    weekday: 'Dienstag',
    date: '19.08.2026',
    num: 2,
    theme: 'Innovation Sprint & Rechtliche Rahmenbedingungen',
    slots: [
      {
        title: 'Legal Design / Innovation Sprint',
        speaker: 'Prof. Dr. Christian Djeffal (TUM)',
        text: (
          <>
            In einem dreistündigen Innovation Sprint mit{' '}
            <strong>Prof. Dr. Christian Djeffal</strong> gingen die Gruppen von
            null zur ersten tragfähigen Prototypidee — ein Format, das
            Konzentration, Kreativität und Mut zum Scheitern verlangte, aus dem
            am Ende aber erstaunlich reife erste Konzepte entstanden.
          </>
        ),
        imgPrefix: './tag-2/legal-design',
        imgCaption: 'Innovation Sprint',
      },
      {
        title: 'Rechtliche Rahmenbedingungen: Was darf Legal Tech? (I & II)',
        speaker: 'Nikolaus Bauer (LMU) · Dr. Tristan Radtke (TUM)',
        text: (
          <>
            Der juristische Deep Dive: <strong>Nikolaus Bauer</strong> (LMU) und{' '}
            <strong>Dr. Tristan Radtke</strong> (TUM) leuchteten die rechtlichen
            Rahmenbedingungen für Legal Tech aus — von den Grenzen des
            Rechtsdienstleistungsgesetzes über den AI Act, Urheberrecht und
            Datenschutz bis hin zu Fragen der KI- und Produkthaftung. So klar
            aufbereitet, dass am Ende auch Teilnehmende ohne juristischen
            Hintergrund mitreden konnten.
          </>
        ),
        imgPrefix: './tag-2/rechtliche-rahmenbedingungen',
        imgCaption: 'Rechtliche Rahmenbedingungen',
      },
    ],
  },
  {
    id: 'tag-3',
    weekday: 'Mittwoch',
    date: '20.08.2026',
    num: 3,
    theme: 'Coding trifft Verbraucherrecht',
    slots: [
      {
        title: 'Coding I',
        speaker: 'Sebastian Nagl',
        text: (
          <>
            <strong>Sebastian Nagl</strong> eröffnete den Tag mit einer
            praxisnahen Einführung in KI-gestützte Entwicklungstools: Auch ohne
            jede Vorkenntnis konnten die Teams ihre ersten eigenen technischen
            Schritte gehen — und man konnte förmlich zusehen, wie aus
            anfänglicher Unsicherheit echte Begeisterung wurde.
          </>
        ),
        imgPrefix: './tag-3/coding',
        imgCaption: 'Coding I',
      },
      {
        title: 'Challenges: Verbraucherrecht',
        speaker: 'Simone Bueb & Sonja Neumann (Verbraucherzentrale Bayern e. V.)',
        text: (
          <>
            <strong>Simone Bueb</strong> und <strong>Sonja Neumann</strong> von
            der Verbraucherzentrale Bayern e.V. führten die Teilnehmenden in ihre
            Challenges ein. Die Session entwickelte sich zu einem lebhaften
            Austausch: Fragen über Fragen, echtes Interesse an der praktischen
            Arbeit der Verbraucherzentrale und eine spürbare Motivation, mit den
            eigenen Prototypen tatsächlich etwas bewirken zu wollen.
          </>
        ),
        imgPrefix: './tag-3/challenges-verbraucherrecht',
        imgCaption: 'Challenge-Einführung der Verbraucherzentrale Bayern',
      },
    ],
  },
  {
    id: 'tag-4',
    weekday: 'Donnerstag',
    date: '21.08.2026',
    num: 4,
    theme: 'Vibe Coding, Justiz & Venture Capital',
    slots: [
      {
        title: 'Coding II',
        speaker: 'Sebastian Nagl',
        text: (
          <>
            Den Auftakt machte erneut <strong>Sebastian Nagl</strong> mit dem
            zweiten Coding-Block — diesmal wurde gemeinsam eine App
            „vibe-gecodet". Das Format zeigte eindrucksvoll, wie weit
            KI-gestützte Tools in kürzester Zeit tragen können, und gab den Teams
            konkretes technisches Rüstzeug.
          </>
        ),
        imgPrefix: './tag-4/coding-2',
        imgCaption: 'Coding II — Vibe Coding',
      },
      {
        title: 'Challenges: Justiz',
        speaker: 'Maximilian Kruger (Bayerisches Staatsministerium der Justiz)',
        text: (
          <>
            <strong>Maximilian Kruger</strong>, Referent für Legal Tech beim
            Bayerischen Staatsministerium der Justiz, stellte die bestehenden
            Legal-Tech-Projekte der bayerischen Justiz vor und führte in die
            Justiz-Challenges ein — Aufgabenstellungen, die deutlich machten,
            welche Potenziale Legal Tech beim Zugang zum Recht für Bürgerinnen
            und Bürger bietet.
          </>
        ),
        imgPrefix: './tag-4/challenges-justiz',
        imgCaption: 'Challenge-Einführung des Staatsministeriums der Justiz',
      },
      {
        title: 'Open Table: Investor Talk',
        speaker: 'Dr. Oliver Schoppe (UVC Partners)',
        text: (
          <>
            <strong>Dr. Oliver Schoppe</strong>, Partner bei UVC Partners, gab
            einen Einblick in die Welt des Venture Capital: Was macht ein
            Start-up investierbar? Worauf achten Investor:innen wirklich? Der
            offene Austausch ließ viel Raum für Fragen — und die Teams nutzten
            ihn.
          </>
        ),
        imgPrefix: './tag-4/investor-talk',
        imgCaption: 'Investor Talk',
      },
    ],
  },
  {
    id: 'tag-5',
    weekday: 'Freitag',
    date: '22.08.2026',
    num: 5,
    theme: 'Legal Reasoning & Pitch-Training',
    slots: [
      {
        title: 'Legal Reasoning and Artificial Intelligence',
        speaker: 'Niklas Wais (TUM)',
        text: (
          <>
            <strong>Niklas Wais</strong> (TUM) sprach über Legal Reasoning und
            Artificial Intelligence — im Mittelpunkt die Frage, wie man einer KI
            juristische Methodenlehre beibringt, und was das für die Praxis
            bedeutet.
          </>
        ),
        imgPrefix: './tag-5/legal-reasoning',
        imgCaption: 'Vortrag Legal Reasoning and AI',
      },
      {
        title: 'Workshop: Pitch Training',
        speaker: 'Lisa Schebitz (UnternehmerTUM)',
        text: (
          <>
            Das Pitch-Training mit <strong>Lisa Schebitz</strong> von
            UnternehmerTUM: Team für Team trat vor und trug den eigenen Elevator
            Pitch vor, um sofort gezieltes, persönliches Feedback zu erhalten —
            live, direkt und auf den Punkt. Nach einer intensiven Woche war eines
            klar: Diese Teams waren bereit für die Pitches.
          </>
        ),
        imgPrefix: './tag-5/pitch-training',
        imgCaption: 'Pitch-Training',
      },
    ],
  },
];

type TimelineEntry = {
  title: string
  text: React.ReactNode
  imgPrefix: string
  imgCaption: string
};

const timeline: TimelineEntry[] = [
  {
    title: 'Eröffnung durch MLTech & Grußwort des Schirmherrn',
    text: (
      <>
        Den Auftakt machten <strong>Felicitas Bingger</strong>,{' '}
        <strong>Enci Huang</strong> und <strong>Luca J. Ballmann</strong> für
        das Organisationsteam von MLTech. <strong>Dr. Winfried Brechmann</strong>,
        Amtschef des Bayerischen Staatsministeriums der Justiz, rundete die
        Eröffnung mit einem Grußwort ab — und unterstrich damit einmal mehr den
        Stellenwert, den Schirmherr Staatsminister Georg Eisenreich diesem
        Hackathon beimisst.
      </>
    ),
    imgPrefix: './abschluss/eroeffnung-',
    imgCaption: 'Eröffnung durch MLTech & Grußwort des Schirmherrn',
  },
  {
    title: 'Keynote: Vom Prototyp in den Vorstandsraum',
    text: (
      <>
        <strong>Leonard Orth</strong> von Bayshore AI sprach darüber, wie man
        aus einem Produkt echten Mehrwert schafft — vom ersten Prototyp bis in
        den Vorstandsraum. Ein Vortrag, der die Teilnehmenden unmittelbar vor
        ihren Pitches noch einmal an das erinnerte, was zählt: nicht nur bauen,
        sondern überzeugen.
      </>
    ),
    imgPrefix: './abschluss/keynote',
    imgCaption: 'Keynote von Leonard Orth (Bayshore AI)',
  },
  {
    title: 'Vorstellung der Jury',
    text: (
      <>
        <strong>Dr. Ann-Kristin Mayrhofer</strong> (LMU) stellte die vier
        Jurymitglieder vor, die die Aufgabe hatten, 14 ausgereifte
        Präsentationen nach inhaltlicher Tiefe, technischer Umsetzung und
        Potenzial zu bewerten.
      </>
    ),
    imgPrefix: './abschluss/jury-vorstellung',
    imgCaption: 'Vorstellung der Jury durch Dr. Ann-Kristin Mayrhofer',
  },
  {
    title: 'Pitches in drei Blöcken',
    text: (
      <>
        14 Teams. Drei Blöcke. Was die Gruppen präsentierten, war weit mehr als
        erste Prototypen: durchdachte Konzepte, funktionierende Demos,
        überzeugende Pitches. Von der vagen Idee am ersten Montag bis zur
        überzeugenden Präsentation — in zehn Tagen.
      </>
    ),
    imgPrefix: '',
    imgCaption: 'Ein Team beim Pitch vor der Jury',
  },
  {
    title: 'Jury-Beratung — und eine lange Pause',
    text: (
      <>
        Die Jury zog sich zur Beratung zurück — für eine ganze Weile. Denn die
        Entscheidung fiel alles andere als leicht. Das Niveau war
        außergewöhnlich hoch. Dass die vier Juror:innen so lange brauchten, war
        kein Fehler im Ablauf, sondern das beste Kompliment an alle Teams.
      </>
    ),
    imgPrefix: './abschluss/jury-beratung',
    imgCaption: 'Die Jury bei der Beratung',
  },
  {
    title: 'Verkündung der Sieger',
    text: (
      <>
        <strong>Nathalia Schomerus</strong> verkündete stellvertretend für die
        Jury das lange erwartete Ergebnis. Die Freude im Raum war spürbar — und
        das zu Recht.
      </>
    ),
    imgPrefix: './abschluss/sieger',
    imgCaption: 'Verkündung der Sieger durch Nathalia Schomerus',
  },
];

const TABS_ANCHOR = 'programmwoche';
const ABSCHLUSS_TAB = 'abschluss';

// Recap2026Event – "Das Event" subpage: the programme week and the closing
// ceremony, shown as a single row of tabs.
export function Recap2026Event() {
  // currently selected tab: a day id ('tag-1'…) or 'abschluss'
  const [activeTab, setActiveTab] = React.useState(days[0].id);

  // honour a hash in the URL on first load (deep link to a tab)
  React.useEffect(() => {
    const id = window.location.hash.replace('#', '');
    const valid = [...days.map((d) => d.id), ABSCHLUSS_TAB];
    if (!valid.includes(id)) return;
    setActiveTab(id);
    window.requestAnimationFrame(() => {
      document.getElementById(TABS_ANCHOR)?.scrollIntoView({block: 'start'});
    });
  }, []);

  // renderMedia shows a carousel when a slot has several photos, a single
  // figure when it has one, and a placeholder when none are uploaded yet.
  const renderMedia = (
      prefix: string | string[],
      caption: string,
      speaker?: string,
      slides?: Slide[],
  ) => {
    const base = typeof prefix === 'string' ? prefix : '';
    let items: CarouselItem[];
    if (slides && slides.length) {
      items = [];
      slides.forEach((s) => {
        const src = byKey(base + s.file);
        if (src) items.push({src, caption: s.caption});
      });
    } else {
      const list = prefix && prefix.length ?
        images(...(Array.isArray(prefix) ? prefix : [prefix])) : [];
      items = list.map((src) => ({src}));
    }
    return (
      <div>
        {items.length > 1 ? (
          <RecapCarousel items={items} caption={caption} />
        ) : (
          <RecapFigure
            src={items[0]?.src ?? placeholderImg}
            caption={items[0]?.caption ?? caption}
            size={'large'}
            centered
          />
        )}
        {speaker && (
          <div className={'text-text-s text-blue-11 opacity-70 text-center ' +
            '-mt-2 mb-2'}>
            {speaker}
          </div>
        )}
      </div>
    );
  };

  return (
    <RecapSubpageLayout title={'Das Event'} backTo={'/recap/2026'}>

      {/* ── Programmwoche ── */}
      <h2 className={'text-head-s lg:text-head-m font-bold mt-2'}>
        Die Programmwoche — Fünf Tage. Fünf Perspektiven.
      </h2>
      <p className={'text-justify'}>
        Vom 18. bis 22. August 2026 fand in München ein Programm statt, das die
        Teilnehmenden nicht nur inspirieren, sondern tatsächlich befähigen
        sollte, funktionierende Legal-Tech-Lösungen zu entwickeln: mit den
        Werkzeugen, dem rechtlichen Fundament und dem Mindset, das es braucht,
        um Legal Tech für Menschen zu bauen, die sonst keinen Zugang zum Recht
        haben.
      </p>

      <RecapParticipantStats />

      <div className={'grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 ' +
        'my-4'}>
        {stats.map((s) => (
          <div key={s.label}
            className={'bg-blue-3 rounded p-4 text-center'}>
            <div className={'text-head-m font-bold text-blue-12'}>{s.num}</div>
            <div className={'text-text-s opacity-70 uppercase tracking-wide'}>
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* Tabs – one row, tab switching */}
      <div id={TABS_ANCHOR}
        className={'scroll-mt-24 flex gap-2 overflow-x-auto pb-1 mt-4'}
        role={'tablist'}>
        {days.map((day) => {
          const active = activeTab === day.id;
          return (
            <button
              key={day.id}
              type={'button'}
              role={'tab'}
              aria-selected={active}
              onClick={() => setActiveTab(day.id)}
              className={'shrink-0 rounded px-4 py-2 text-text-s ' +
                'font-semi-bold transition-colors border ' +
                (active ?
                  'bg-blue-12 text-blue-1 border-blue-12' :
                  'bg-blue-3 text-blue-12 border-blue-4 hover:bg-blue-4')}
            >
              Tag {day.num}
              <span className={'hidden sm:inline'}> · {day.weekday}</span>
            </button>
          );
        })}
        <button
          type={'button'}
          role={'tab'}
          aria-selected={activeTab === ABSCHLUSS_TAB}
          onClick={() => setActiveTab(ABSCHLUSS_TAB)}
          className={'shrink-0 rounded px-4 py-2 text-text-s ' +
            'font-semi-bold transition-colors border ' +
            (activeTab === ABSCHLUSS_TAB ?
              'bg-blue-12 text-blue-1 border-blue-12' :
              'bg-blue-3 text-blue-12 border-blue-4 hover:bg-blue-4')}
        >
          Abschlussveranstaltung
        </button>
      </div>

      {days.filter((day) => day.id === activeTab).map((day) => (
        <div key={day.id} className={'mt-4'}>
          <div className={'flex items-baseline gap-3 flex-wrap ' +
            'border-b border-blue-4 pb-2 mb-4'}>
            <span className={'text-head-s font-bold text-blue-12'}>
              Tag {day.num}
            </span>
            <span className={'text-text-m opacity-70'}>
              {day.weekday}, {day.date}
            </span>
          </div>
          <p className={'text-text-l font-semi-bold text-blue-12 mb-4'}>
            {day.theme}
          </p>

          <div className={'flex flex-col gap-6'}>
            {day.slots.map((slot, si) => (
              <div key={si}
                className={'bg-blue-3 border border-blue-4 rounded ' +
                  'p-4 lg:p-6'}>
                <div className={'text-text-m font-semi-bold text-blue-12 ' +
                  'mb-2'}>
                  {slot.title}
                </div>
                <p className={'text-text-m opacity-90 text-justify'}>
                  {slot.text}
                </p>
                {renderMedia(slot.imgPrefix, slot.imgCaption, slot.speaker, slot.slides)}
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* ── Abschlussveranstaltung tab panel ── */}
      {activeTab === ABSCHLUSS_TAB && (
        <div className={'mt-4'}>
          <div className={'flex items-baseline gap-3 flex-wrap ' +
            'border-b border-blue-4 pb-2 mb-4'}>
            <span className={'text-head-s font-bold text-blue-12'}>
              Abschlussveranstaltung
            </span>
            <span className={'text-text-m opacity-70'}>
              Mittwoch, 27.08.2026 · Freskensaal der LMU
            </span>
          </div>
          <p className={'text-justify'}>
            Am 27. August 2026 lud die Ludwig-Maximilians-Universität München
            zur Abschlussveranstaltung des Legal Loves Tech Hackathon 2026 in
            den prunkvollen Freskensaal. Was die 14 Teams in zehn Tagen auf die
            Beine gestellt hatten, sollte an diesem Nachmittag einer Fachjury
            präsentiert werden — und die Latte lag hoch.
          </p>

          <RecapFigure src={freskensaalImg}
            caption={'Freskensaal der LMU, Abschlussveranstaltung'} centered />

          <div className={'bg-blue-3 border-l-4 border-blue-12 rounded-r p-4 ' +
            'text-text-m'}>
            <strong>27. August 2026 · Freskensaal,
            Ludwig-Maximilians-Universität München</strong><br />
            14 Teams · 3 Pitch-Blöcke · eine Jury · und eine Entscheidung, die
            lange auf sich warten ließ.
          </div>

          <div className={'flex flex-col gap-8 mt-4'}>
            {timeline.map((entry, i) => (
              <div key={i} className={'border-l-2 border-blue-4 pl-4'}>
                <strong className={'block text-blue-12 mb-1'}>
                  {entry.title}
                </strong>
                <p className={'text-text-m opacity-90 text-justify'}>
                  {entry.text}
                </p>
                {entry.imgPrefix &&
                  renderMedia(entry.imgPrefix, entry.imgCaption)}
                {entry.title === 'Pitches in drei Blöcken' && (
                  <RecapCarousel
                    items={pitchesItems}
                    caption={'Impressionen von den Pitches'}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      )}

    </RecapSubpageLayout>
  );
}
