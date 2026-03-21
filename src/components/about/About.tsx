import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import './About.css';
import {Caret} from '../Caret';
import umfassendImg from '../../img/umfassend.png';
import nonProfitImg from '../../img/nonProfit.png';
import betreuungImg from '../../img/betreuung.png';

import 'swiper/css';
import 'swiper/css/navigation';
import {AboutCard} from './AboutCard';
import {SwiperCard} from './SwiperCard';

type Props = {
    scrollTo: (selector: string) => void
}

type Card = {
  // title of the card
  title: string
  // general information displayed about the card
  descriptionTop: string
  descriptionBottom: string
  // the image which should be shown for the card
  img: string
}

// About is the entrypoint for the about page (path: /about)
export class About extends React.Component<Props, {}> {
  cards: Card[] = [
    {
      title: 'Umfassend',
      descriptionTop:
        'Ein Kooperationsprojekt zwischen ML Tech e.V., der ' +
        'Ludwig-Maximilians-Universität München (LMU) und der ' +
        'Technischen Universität München (TUM).',
      descriptionBottom: 'Der Legal Loves Tech Hackathon vereint und vernetzt ' +
        'Studierende unter&shy;schiedlicher Fach&shy;richtungen und bietet ' +
        'eine Plattform für inter&shy;disziplinäre Zusammenarbeit an der ' +
        'Schnitt&shy;stelle von Recht und Technologie.',
      img: umfassendImg,
    },
    {
      title: 'Non Profit',
      descriptionTop:
        'Eine Kooperation von Universitäten und gemeinnützigen Organisationen ' +
        'unter der <strong>Schirmherrschaft des Bayerischen Staatsministers ' +
        'der Justiz Georg Eisenreich, MdL</strong>.',
      descriptionBottom: 'Wir glauben, dass Legal Tech dabei helfen kann die ' +
        'Welt ein kleines Stückchen besser zu machen und möchten alle daran ' +
        'teilhaben lassen. Im Mittelpunkt stehen das gemeinsame Engagement ' +
        'und die Vermittlung von Wissen und Fähigkeiten rund um Legal Tech.',
      img: nonProfitImg,
    },
    {
      title: 'Interdisziplinär',
      descriptionTop: 'Vorträge, Workshops und Praxis&shy;einblicke von ' +
        'führenden Expert:innen aus <strong>Recht, Technologie ' +
        'und Wirtschaft</strong>.',
      descriptionBottom: 'Egal auf wie viel Vorwissen die Teams aufbauen – ' +
        'alle erforderlichen Kenntnisse werden direkt im Rahmen der ' +
        'Hackathon-Woche vermittelt. Vorkenntnisse im Bereich Legal Tech ' +
        'sind ausdrücklich keine Voraussetzung.',
      img: betreuungImg,
    },
  ];

  render() {
    return <div
      id="about-page"
      className="min-h-screen relative flex justify-center items-center bg-blue-3"
    >
      <div className={'absolute top-4 right-0 rounded-l z-10 bg-blue-12 ' +
          'text-blue-1 text-3xl px-16 py-4 ' +
          'md:top-2 md:px-12 md:py-6 xl:top-8 xl:px-20'}>
                About LLT
      </div>
      <div className={'w-full h-5/6 bg-blue-3 py-4 flex justify-center ' +
          'items-center md:px-4'}>
        <div className={'block w-full h-full py-4 md:hidden'}>
          <Swiper
            className="mySwiper"
            spaceBetween={10}
            slidesPerView={1.1}
            centeredSlides={true}>

            {this.cards.map((card, i) => {
              return <SwiperSlide key={i} className="block rounded">
                <SwiperCard
                  img={card.img}
                  title={card.title}
                  info={card.descriptionTop}
                  details={card.descriptionBottom}
                />
              </SwiperSlide>;
            })}

          </Swiper>

        </div>

        <div className={'hidden md:grid gap-4 grid-cols-3 h-full w-full py-4 ' +
            'xl:w-4/5 xl:mx-auto xl:h-4/5'}>

          {this.cards.map((card, i) => {
            return <AboutCard
              key={i}
              img={card.img}
              title={card.title}
              info={card.descriptionTop}
              details={card.descriptionBottom}
            />;
          })}

        </div>
      </div>

      <Caret
        id={'aboutCaret'}
        className={'caret-right hidden z-10 850-h:block'}
        onClick={() => this.props.scrollTo('#testimonials')} />

    </div>;
  }
}
