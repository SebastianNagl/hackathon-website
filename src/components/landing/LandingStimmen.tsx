import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {LandingSection} from './LandingSection';
import bernhardWaltl from '../../img/people/bernhard_waltl.jpg';
import dirkHartung from '../../img/people/dirk_hartung.jpg';
import fraukeRostalski from '../../img/people/frauke_rostalski.png';
import christinaMariaLeeb from '../../img/people/christina_maria_leeb.png';
import annePaschke from '../../img/people/anne_paschke.png';
import heckmann from '../../img/people/heckmann.jpg';
import christianSchlicht from '../../img/people/christian_schlicht.png';
import biancaNeumaier from '../../img/people/bianca_neumaier.png';
import kirstenRulf from '../../img/people/kirsten_rulf.png';
import matthiasGrabmair from '../../img/people/m_grabmair.jpg';
import nicoleFormicaSchiller from '../../img/people/nicole_formica_schiller.png';

type Quote = {name: string; text: string; img: string};

const quotes: Quote[] = [
  {
    name: 'Kirsten Rulf',
    img: kirstenRulf,
    text: 'Im Bereich LegalTech liegt für die Justiz die Chance, ' +
      'brachliegende Potenziale zu heben und effizienter zu werden. Wer diese ' +
      'Entwicklung verpasst, hat einen Wettbewerbsnachteil.',
  },
  {
    name: 'Dr. Bernhard Waltl',
    img: bernhardWaltl,
    text: 'Der Rechtsmarkt der Zukunft braucht Kollaboration und Hands-on ' +
      'Erfahrungen. Der LLT Hackathon bringt beides in einer hervorragenden ' +
      'Initiative zusammen.',
  },
  {
    name: 'Prof. Dr. Frauke Rostalski',
    img: fraukeRostalski,
    text: 'Der Hackathon bietet allen Beteiligten eine optimale Gelegenheit ' +
      'des interdisziplinären Arbeitens. IT und Recht finden zusammen — eine ' +
      'Vermählung, die in der Praxis immer höhere Bedeutung erlangt und daher ' +
      'auch in der Ausbildung nicht fehlen darf.',
  },
  {
    name: 'Dirk Hartung',
    img: dirkHartung,
    text: 'Ein großer Wettbewerb, bei dem es auf gute Ideen und deren ' +
      'technische Umsetzung ankommt, ist genau das anspruchsvolle ' +
      'Ausbildungsformat, das wir im Legal Tech Bereich brauchen.',
  },
  {
    name: 'Dr. Christina-Maria Leeb',
    img: christinaMariaLeeb,
    text: 'Bei einem Hackathon steht von vornherein fest: Ausnahmslos alle ' +
      'Teilnehmenden sind Gewinner. Gewinner wertvoller Erfahrungen und ' +
      'Kontakte. Teilnahmeempfehlung von Herzen!',
  },
  {
    name: 'Prof. Dr. Dirk Heckmann',
    img: heckmann,
    text: 'Der LegalLovesTech Hackathon bietet die ideale Plattform für ' +
      'angehende Jurist*innen, Informatiker*innen und Interessierte, um ' +
      'gemeinsam innovative Einsatzmöglichkeiten von IT in der ' +
      'Rechtsanwendung zu entdecken und die Zukunft der rechtsanwendenden ' +
      'Berufe mitzugestalten.',
  },
  {
    name: 'Prof. Dr. Anne Paschke',
    img: annePaschke,
    text: 'Täglich erzeugt die Justiz tausende von Datensätzen, die unsere ' +
      'Rechtsordnung widerspiegeln. Der LegalLovesTech Hackathon ermöglicht ' +
      'es, über die Nutzung dieser Daten und den Zugang zum Recht in einem ' +
      'interdisziplinären Team neu zu denken.',
  },
  {
    name: 'Dr. Christian Schlicht',
    img: christianSchlicht,
    text: 'Der Legal Loves Tech Hackathon ist eine großartige ' +
      'Bottom-up-Initiative, von der ich mir wertvolle Impulse auch für die ' +
      'Justiz verspreche!',
  },
  {
    name: 'Bianca Neumaier',
    img: biancaNeumaier,
    text: 'Dieser Hackathon lohnt sich auch für alle Personen, die in ' +
      'Unternehmensrechtsabteilungen Legal Tech und Legal Operations aufbauen ' +
      'wollen. Eine super Inspiration und Lernerfahrung!',
  },
  {
    name: 'Prof. Dr. Matthias Grabmair',
    img: matthiasGrabmair,
    text: 'Der LLT Hackathon ist eine großartige Gelegenheit, an der ' +
      'Schnittstelle zwischen Recht und Informatik praktische Erfahrungen zu ' +
      'sammeln. Die interdisziplinäre, kreative Projektarbeit ist wertvoll ' +
      'für Teilnehmende und die ganze Community.',
  },
  {
    name: 'Nicole Formica-Schiller',
    img: nicoleFormicaSchiller,
    text: 'Fortschritt lebt von interdisziplinärem Austausch! Der ' +
      'LegalLovesTech Hackathon bietet hierfür eine einmalige Gelegenheit. ' +
      'Um bereits heute gemeinsam das Morgen zu gestalten.',
  },
];

// LandingStimmen – what experts say about the LLT, as a slim quote carousel.
export function LandingStimmen() {
  return (
    <LandingSection id={'testimonials'} eyebrow={'Stimmen'}>
      <h2 className={'text-3xl md:text-5xl font-bold leading-tight mb-12'}>
        Was Expert:innen über den LLT sagen.
      </h2>

      <Swiper
        modules={[Navigation, Pagination]}
        navigation={true}
        pagination={{clickable: true}}
        spaceBetween={24}
        slidesPerView={1}
        loop={true}
        className={'landing-stimmen'}
      >
        {quotes.map((q, i) => (
          <SwiperSlide key={i}>
            <figure className={'max-w-[760px] mx-auto text-center px-8 pb-12'}>
              <div className={'text-red-9 text-6xl font-bold leading-none ' +
                'mb-2 select-none'}>
                &ldquo;
              </div>
              <blockquote className={'text-text-l md:text-head-s italic ' +
                'text-white leading-relaxed'}>
                {q.text}
              </blockquote>
              <figcaption className={'flex flex-col items-center gap-3 mt-8'}>
                <img src={q.img} alt={q.name}
                  className={'w-20 h-20 md:w-24 md:h-24 rounded-full ' +
                    'object-cover border-2 border-white/20'} />
                <span className={'text-text-m font-semi-bold text-blue-4'}>
                  {q.name}
                </span>
              </figcaption>
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
    </LandingSection>
  );
}
