import React from 'react';
import {Link} from 'react-router-dom';

export class ShortInfo extends React.Component {
  render() {
    return <div
      id={'shortInfo'}
      className={'font-semi-bold relative 700-h:mt-2 mt-4 ' +
            'md:mt-0 md:text-head-m md:font-regular ' +
            'md:ml-auto tabletL:w-9/12 lg:w-8/12 lg:text-head-m ' +
            '2xl:text-head-l'}>

      <div className={'mb-4 text-justify text-blue-12 text-text-l ' +
          'md:text-2xl lg:mt-10'}>
        <span className={'font-bold text-blue-11'}>17.08. – 27.08.2026</span>
        {' | München. Der Legal Tech Hackathon von und für ' +
          'Studierende. Offen und inklusiv. Non-Profit. In Präsenz. Und das ' +
          'Beste: Nur dein Interesse genügt – wir bringen dir alles bei!'}
      </div>

      <div id={'shortInfoLink'} className={'flex flex-wrap gap-4 mt-2 mb-8'}>
        <Link
          to={'/recap/2026'}
          className={'inline-flex items-center gap-2 text-white px-8 py-3 ' +
            'rounded font-bold text-head-s hover:opacity-80 shadow-lg ' +
            'transition-opacity'}
          style={{backgroundColor: '#0545AF'}}
        >
          Recap 2026 ansehen →
        </Link>
      </div>

    </div>;
  }
}
