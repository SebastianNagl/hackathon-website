import React from 'react';

export class PrizeSticker extends React.Component {
  render() {
    return (
      <div className={'absolute z-20 top-2 right-2 -rotate-12 select-none ' +
          'sm:top-4 sm:right-4 md:top-8 md:right-8 lg:top-12 lg:right-12'}>
        <div className={'flex flex-col items-center justify-center ' +
            'text-center rounded-full border-4 border-white bg-blue-12 shadow-lg ' +
            'w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-44 lg:h-44'}
        >
          <div className={'text-red-9 font-bold leading-none ' +
              'text-lg sm:text-2xl md:text-3xl'}>
            2.200 €
          </div>
          <div className={'text-blue-1 font-semibold leading-tight ' +
              'text-[9px] sm:text-xs md:text-sm px-2'}>
            Gesamtpreisgeld
          </div>
          <div className={'text-blue-1 opacity-70 leading-tight ' +
              'text-[7px] sm:text-[10px] md:text-xs px-2 mt-1'}>
            gesponsert von MLTech
          </div>
        </div>
      </div>
    );
  }
}
