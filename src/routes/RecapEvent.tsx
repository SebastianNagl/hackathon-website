import React from 'react';
import {Link} from 'react-router-dom';
import {Footer} from '../components/footer/Footer';
import timetable from '../img/timetable.png';

export class RecapEvent extends React.Component {
  render() {
    return <div className={'overflow-x-hidden min-h-screen flex flex-col'}>

      <div className={'flex flex-col grow pt-8 grow mb-6 lg:mb-0 mt-20 ' +
          'tabletL:mt-24 xl:mt-28 relative'}>

        <Link to={'/result'}
          className={'absolute top-24 left-6 tabletL:left-10 text-blue-12' +
            ' opacity-70 hover:opacity-100 transition-opacity text-sm font-medium'}>
          ← Zurück zum Recap
        </Link>

        <div className={'items-center flex h-full absolute -right-4 mt-auto'}>
          <div className={'h-4/6 bg-red-3 w-12 bg-blue-12 rounded'}></div>
        </div>

        <div className={'py-6 pl-8 pr-10 md:mt-10 tabletL:px-12 ' +
            'lg:w-4/5 lg:mx-auto'}>

          <div className={'py-8 mt-4 text-head-m lg:text-head-l font-bold' +
            ' relative'}>
            Ablaufplan
          </div>

          <a href={timetable} target='_blank' rel="noreferrer">
            <img src={timetable} alt="Ablaufplan LLT 2023"/>
          </a>

        </div>

      </div>

      <Footer backgroundColor={'red'}/>

    </div>;
  }
}
