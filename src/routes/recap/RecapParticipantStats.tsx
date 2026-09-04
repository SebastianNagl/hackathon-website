import React from 'react';

type Field = {label: string; count: number};

// study fields represented among the 51 participants
const fields: Field[] = [
  {label: 'Rechtswissenschaften', count: 27},
  {label: 'Informatik & Wirtschaftsinformatik', count: 16},
  {label: 'Wirtschaftswissenschaften', count: 5},
  {label: 'Naturwissenschaften', count: 1},
  {label: 'Ingenieurwissenschaften', count: 1},
  {label: 'Gesellschaftswissenschaften', count: 1},
];

// individual degree programmes in detail
const programmes: Field[] = [
  {label: 'Rechtswissenschaft', count: 27},
  {label: 'Informatik B.Sc.', count: 5},
  {label: 'Wirtschaftsinformatik B.Sc.', count: 5},
  {label: 'Robotics, Cognition, Intelligence', count: 2},
  {label: 'AI for Business', count: 1},
  {label: 'Web and Data Science', count: 1},
  {label: 'MBA', count: 1},
  {label: 'BWL', count: 1},
  {label: 'Informatik', count: 1},
  {label: 'VWL', count: 1},
  {label: 'Information Systems M.Sc.', count: 1},
  {label: 'Data Engineering & Analytics', count: 1},
  {label: 'Management and Technology', count: 1},
  {label: 'Physik', count: 1},
  {label: 'Maschinenwesen M.Sc.', count: 1},
  {label: 'Politikwissenschaft', count: 1},
];

const maxCount = Math.max(...fields.map((f) => f.count));

// RecapParticipantStats – breakdown of the 51 participants by study field,
// with a detailed list of degree programmes.
export function RecapParticipantStats() {
  return (
    <div className={'bg-blue-1 border border-blue-4 rounded p-5 lg:p-6 my-4'}>

      <div className={'flex items-baseline gap-4 mb-6'}>
        <span className={'text-6xl font-bold text-blue-12 leading-none'}>
          51
        </span>
        <span className={'text-text-l font-bold text-blue-11 leading-tight'}>
          Teilnehmende
          <span className={'block text-text-s font-medium opacity-70'}>
            aus 16 Studiengängen · 3 Hochschulen
          </span>
        </span>
      </div>

      <div className={'flex flex-col gap-3'}>
        {fields.map((f) => {
          const pct = (f.count / maxCount) * 100;
          const wide = pct > 22;
          return (
            <div key={f.label}
              className={'flex flex-col sm:flex-row sm:items-center gap-1 ' +
                'sm:gap-4'}>
              <div className={'sm:flex-[0_0_220px] text-text-s font-semi-bold ' +
                'text-blue-12 sm:text-right'}>
                {f.label}
              </div>
              <div className={'flex-1 flex items-center gap-2'}>
                <div className={'flex-1 h-8 bg-blue-3 rounded overflow-hidden'}>
                  <div
                    className={'h-full bg-blue-12 rounded flex items-center ' +
                      'px-3'}
                    style={{width: `${Math.max(pct, 4)}%`}}
                  >
                    {wide && (
                      <span className={'text-text-s font-bold text-blue-1'}>
                        {f.count}
                      </span>
                    )}
                  </div>
                </div>
                {!wide && (
                  <span className={'text-text-s font-bold text-blue-12'}>
                    {f.count}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className={'mt-6'}>
        <div className={'text-text-s font-semi-bold uppercase tracking-wide ' +
          'opacity-60 mb-2'}>
          Studiengänge im Detail
        </div>
        <div className={'flex flex-wrap gap-2'}>
          {programmes.map((p) => (
            <span key={p.label}
              className={'bg-blue-3 border border-blue-5 rounded-full ' +
                'px-3 py-1 text-text-s text-blue-12'}>
              {p.label} <strong>{p.count}</strong>
            </span>
          ))}
        </div>
      </div>

    </div>
  );
}
