import React from 'react';
import {Footer} from '../components/footer/Footer';
import '../components/event/EventTitle.css';

export class Jury2026 extends React.Component {
  render() {
    return (<div className="overflow-x-hidden min-h-screen flex flex-col">

      <div className={'flex flex-col grow pt-8 mt-28 tabletL:mt-32 xl:mt-36 ' +
        'bg-red-3'}>

        <div className={'page-subheader text-head-m font-medium text-blue-1 ' +
          'bg-blue-12 rounded-r py-6 pl-6 pr-14 w-fit relative'}>
          Jury
        </div>

        <div className={'flex justify-center mt-16 mb-16'}>
          <div className={'bg-blue-3 border border-blue-12 rounded px-10 py-8 ' +
            'text-text-m lg:text-text-l text-blue-12 text-center max-w-xl mx-4'}>
            Die Jury des Legal Loves Tech Hackathon 2026 wird bald
            bekannt gegeben.
          </div>
        </div>

      </div>

      <Footer backgroundColor={'blue'}/>

    </div>);
  }
}
