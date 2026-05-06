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

        <div className={'container mx-auto flex flex-col items-center ' +
            'text-center py-8 gap-8 md:flex-row md:items-stretch ' +
            'md:justify-between md:w-4/5'}>

          {/* contact photo + details */}
          <div className={'flex flex-row justify-center items-center gap-4'}>
            <div className={'flex-shrink-0'}>
              <div
                id={'contact-person'}
                className={'w-20 h-20 md:w-32 md:h-32 rounded-full'} />
            </div>
            <ContactDetails className={'text-left flex flex-col'}/>
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
          <div className={'flex flex-row items-center justify-center gap-4'}>
            <div className={'flex flex-col items-start'}>
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
              <img src={invertedBlackWhiteLogo} alt="" className="w-20 h-20 md:w-32 md:h-32"/>}
            {this.props.backgroundColor === 'red' &&
              <img src={blackWhiteLogo} alt="" className="w-20 h-20 md:w-32 md:h-32"/>}
          </div>

        </div>

      </div>

      <div className={classNames(
          'pt-4 pb-10 text-center text-text-s flex flex-col ' +
          'gap-4 justify-center font-semi-bold lg:flex-row lg:gap-14',
          this.tailwindTextColorClass)}>
        <a href={'/datenschutz'}>Datenschutzerklärung</a>
        <a href={'/impressum'}>Impressum</a>
        <span>&copy; Copyright <a href={'https://legalplusplus.net'} target={'_blank'} rel={'noopener noreferrer'} className={'font-bold hover:underline'}>pschOrr95</a> 2026. Alle Rechte vorbehalten.</span>
      </div>

    </div>;
  }
}
