import React from 'react';
import {Link} from 'react-router-dom';
import './Banner.css';

export function Banner() {
  const text = 'Jetzt anmelden – LMU-Studierende über das ' +
    'LSF-Vorlesungsverzeichnis, TUM-Studierende über TUM SOT (Modul SOT82137) auf TUM-online. ' +
    'Teilnahme ohne Lehrveranstaltungsanrechnung? Jetzt für die Warteliste anmelden.';

  return (
    <div className={'w-full bg-blue-11 text-white text-sm py-2 ' +
      'overflow-hidden whitespace-nowrap'}>
      <Link to={'/join'} className={'banner-ticker'}>
        <span>{text}&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</span>
        <span>{text}&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</span>
      </Link>
    </div>
  );
}
