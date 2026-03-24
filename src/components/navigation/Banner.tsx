import React from 'react';
import './Banner.css';

export function Banner() {
  const text = 'Jetzt anmelden – LMU-Studierende über das ' +
    'LSF-Vorlesungsverzeichnis, TUM-Studierende über TUM SOT (Modul SOT82137) ' +
    'oder TUM CIT (Modulcode folgt) auf TUM-online.';

  return (
    <div className={'w-full bg-blue-11 text-white text-sm py-2 ' +
      'overflow-hidden whitespace-nowrap'}>
      <div className={'banner-ticker'}>
        <span>{text}&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</span>
        <span>{text}&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</span>
      </div>
    </div>
  );
}
