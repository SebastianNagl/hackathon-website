import classNames from 'classnames';
import React from 'react';
import invertedBlackWhiteLogo from '../../img/lltLogos/logo-bw-inverted.svg';
import blackWhiteLogo from '../../img/lltLogos/logo-bw.svg';
import bayernWappen from '../../img/bayern_wappen.png';
import {ContactDetails} from './ContactDetails';

import './Footer.css';

type Props = {
    backgroundColor: 'red' | 'blue'
}

export class Footer extends React.Component<Props, {}> {
  get tailwindBackgroundClass(): string {
    switch (this.props.backgroundColor) {
      case 'blue':
        return 'bg-blue-12';
      case 'red':
        return 'bg-red-3';
      default:
        return 'bg-blue-12';
    }
  }

  get tailwindTextColorClass(): string {
    switch (this.props.backgroundColor) {
      case 'red':
        return 'text-blue-12';
      case 'blue':
        return 'text-blue-1';
      default:
        return 'text-blue-1';
    }
  }

  render() {
    return <div
      className={classNames(
          'w-full mt-16',
          this.tailwindBackgroundClass,
          this.tailwindTextColorClass)
      }>

      <div className={'flex flex-col xl:flex-row xl:flex-wrap ' +
          'xl:justify-center xl:items-center xl:py-16'}>

        <div className={'container mx-auto flex flex-row items-stretch ' +
            'text-center justify-center py-8 gap-12 md:justify-between ' +
            'md:w-4/5'}>

          {/* contact photo + details */}
          <div className={'flex flex-row justify-center items-start gap-4'}>
            <div className={'flex justify-center items-center'}>
              <div
                id={'contact-person'}
                className={'w-32 h-32 rounded-full'} />
            </div>
            <ContactDetails
              className={'hidden w-4/5 text-left lg:flex lg:flex-col'}/>
          </div>

          {/* sitemap */}
          <div className={'hidden lg:block text-left'}>
            <div className={'text-text-l font-medium mb-2'}>Sitemap</div>
            <ul className={'grid grid-cols-2 gap-x-6 gap-y-1 text-text-m font-semi-bold'}>
              <li><a href={'/'}>Home</a></li>
              <li><a href={'/event'}>Event</a></li>
              <li><a href={'/team'}>Team</a></li>
              <li><a href={'/jury'}>Jury</a></li>
              <li><a href={'/result'}>Recap LLT &apos;23</a></li>
              <li><a href={'/join'}>Mitmachen</a></li>
            </ul>
          </div>

          {/* schirmherrschaft + coat of arms + llt logo */}
          <div className={'flex flex-row items-end gap-4 self-stretch'}>
            <div className={'flex flex-col items-start mb-4'}>
              <div className={'text-text-s opacity-60 mb-1'}>
                unter der Schirmherrschaft
              </div>
              <div className={'flex flex-row items-center gap-3'}>
                <img
                  src={bayernWappen}
                  alt={'Wappen des Freistaates Bayern'}
                  className={'h-12 w-auto object-contain'}
                />
                <div className={'font-medium leading-tight text-left'}
                  style={{fontSize: '10px'}}>
                  Bayerisches Staatsministerium<br/>der Justiz
                </div>
              </div>
            </div>
            {this.props.backgroundColor === 'blue' &&
              <img src={invertedBlackWhiteLogo} alt="" className="w-32 h-32 ml-1"/>}
            {this.props.backgroundColor === 'red' &&
              <img src={blackWhiteLogo} alt="" className="w-32 h-32 ml-1"/>}
          </div>

        </div>

        <ContactDetails
          className={'w-4/5 text-left mx-auto flex-grow lg:hidden'}/>

      </div>

      <div className={'pb-10 text-center text-text-s flex flex-col ' +
          'gap-4 justify-center font-semi-bold lg:basis-full lg:flex-row ' +
          'lg:gap-14'}>
        <a href={'/datenschutz'}>Datenschutzerklärung</a>
        <a href={'/impressum'}>Impressum</a>
      </div>

    </div>;
  }
}
