import React from 'react';

export class ShortInfo extends React.Component {
  render() {
    return <div
      id={'shortInfo'}
      className={'font-semi-bold absolute right-6 left-6 700-h:top-[52%] ' +
            '700-h:mt-0 mt-[15%] lxs:relative lxs:right-0 lxs:top-0 ' +
            'lxs:left-0 top-1/2 md:mt-0 md:text-head-m md:font-regular ' +
            'md:ml-auto tabletL:w-9/12 lg:w-8/12 lg:text-head-m ' +
            '2xl:text-head-l'}>

      <div className={'mb-4 text-justify text-blue-12 text-text-l ' +
          'md:text-2xl lg:mt-10'}>
        <span className={'font-bold text-blue-11'}>17.08. – 21.08.2026</span>
        {' | München. Der Legal Tech Hackathon von und für ' +
          'Studierende. Offen und inklusiv. Non-Profit. In Präsenz. Und das ' +
          'Beste: Nur dein Interesse genügt – wir bringen dir alles bei!'}
      </div>

    </div>;
  }
}
