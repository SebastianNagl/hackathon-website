import React from 'react';
import mlTechLogo from '../../img/partners/org_munich.png';

type Prize = {
  place: string
  amount: string
  color: string
}

const prizes: Prize[] = [
  {place: '1. Platz', amount: '1.500 €', color: '#D4AF37'},
  {place: '2. Platz', amount: '500 €', color: '#A7A7AD'},
  {place: '3. Platz', amount: '200 €', color: '#B08D57'},
];

export class PrizeMoney extends React.Component {
  render() {
    return (
      <div className={'bg-blue-3 py-16 px-6'}>
        <div className={'max-w-[900px] mx-auto flex flex-col items-center gap-8'}>

          <h2 className={'text-3xl md:text-4xl font-bold text-blue-12 text-center'}>
            Preisgeld
          </h2>

          <div className={'grid grid-cols-1 sm:grid-cols-3 gap-6 w-full'}>
            {prizes.map((prize, i) => (
              <div
                key={i}
                className={'bg-white rounded-lg shadow-md flex flex-col ' +
                  'items-center gap-2 py-8 px-4 border-t-8'}
                style={{borderTopColor: prize.color}}
              >
                <div className={'text-lg font-semibold text-blue-12'}>
                  {prize.place}
                </div>
                <div
                  className={'text-4xl font-bold'}
                  style={{color: prize.color}}
                >
                  {prize.amount}
                </div>
              </div>
            ))}
          </div>

          <div className={'flex items-center gap-3 text-blue-12 text-center'}>
            <span>Gesponsert von</span>
            <img
              src={mlTechLogo}
              alt="MLTech"
              className={'h-10 object-contain'}
            />
          </div>

        </div>
      </div>
    );
  }
}
