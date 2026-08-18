import React from 'react';
import {Link} from 'react-router-dom';
import './Banner.css';

export function Banner() {
  const text = 'Jetzt als Besucher:in für die Abschlussveranstaltung anmelden.';

  return (
    <div className={'w-full bg-blue-11 text-white text-sm py-2 ' +
      'overflow-hidden whitespace-nowrap'}>
      <Link to={'/abschlussveranstaltung'} className={'banner-ticker'}>
        <span>{text}&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</span>
        <span>{text}&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</span>
      </Link>
    </div>
  );
}
