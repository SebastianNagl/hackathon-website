import React from 'react';
import {LandingSection} from './LandingSection';
import aoShearmanLogo from '../../img/partners/AOShearman.png';
import bayshoreLogo from '../../img/partners/Bayshore_Logotype_Dark.png';
import elevenlabsLogo from '../../img/partners/elevenlabs.png';
import geminiLogo from '../../img/partners/GoogleGemini.png';
import libraLogo from '../../img/partners/Libra.jpg';
import liquidLegalLogo from '../../img/partners/liquid_legal.png';
import lmuLogo from '../../img/partners/lmu.png';
import lovableLogo from '../../img/partners/Lovable.png';
import ltc from '../../img/partners/ltc.png';
import mlTechLogo from '../../img/partners/org_munich.png';
import riLmuLogo from '../../img/partners/ri_lmu.png';
import stmj from '../../img/partners/stmj.png';
import suitcaseLogo from '../../img/partners/suitcase.png';
import tumLogo from '../../img/partners/TUM_good.svg';
import unternehmerTUM from '../../img/partners/unternehmertum.png';
import uvcLogo from '../../img/partners/UVC.png';
import verbraucherzentraleLogo from '../../img/partners/VerbraucherzentraleBayern.png';
import cdpsLogo from '../../img/partners/cdps.png';
import disruptLogo from '../../img/partners/disrupt_law_logo.jpg';
import eLegalLogo from '../../img/partners/elegal.png';
import legalTechDeLogo from '../../img/partners/legal_tech_init_de.svg';
import openLegalTechLogo from '../../img/partners/open_legal_tech.png';
import orgFrankfurtLogo from '../../img/partners/org_fra.png';
import orgAachen from '../../img/partners/org_aachen.svg';
import orgCologneLogo from '../../img/partners/org_cologne.png';
import orgFreiburg from '../../img/partners/org_freiburg_white.png';
import orgGiessenLogo from '../../img/partners/org_giessen.png';
import orgMannheim from '../../img/partners/org_mannheim_white.png';
import orgMarburgLogo from '../../img/partners/org_marburg.png';
import recodeLogo from '../../img/partners/org_recode_text.png';
import orgTrierLogo from '../../img/partners/org_trier_logo_text_white.png';
import bucerius from '../../img/partners/bucerius.png';
import womenInAI from '../../img/partners/women_in_ai.png';
import built from '../../img/partners/built.png';
import uniLeipzig from '../../img/partners/uniLeipzig.png';
import ds4g from '../../img/partners/ds4g-logo.svg';
import ltv from '../../img/mediapartners/legal_tech_verzeichnis.png';
import beck from '../../img/mediapartners/beck.png';

type Logo = {img: string; name: string; link?: string; light?: boolean};

const poweredBy: Logo[] = [
  {img: lmuLogo, name: 'LMU München', link: 'https://www.lmu.de/de/index.html'},
  {img: tumLogo, name: 'TU München', link: 'https://www.tum.de/'},
  {img: mlTechLogo, name: 'MLTech e. V.', link: 'https://www.ml-tech.org/'},
];

const partners2026: Logo[] = [
  {img: aoShearmanLogo, name: 'A&O Shearman',
    link: 'https://www.aoshearman.com/'},
  {img: stmj, name: 'Bayerisches Staatsministerium der Justiz',
    link: 'https://www.justiz.bayern.de/ministerium/'},
  {img: bayshoreLogo, name: 'Bayshore'},
  {img: ltc, name: 'Legal Tech Colab', link: 'https://legaltechcolab.com/'},
  {img: libraLogo, name: 'Libra'},
  {img: liquidLegalLogo, name: 'Liquid Legal Institute',
    link: 'https://liquid-legal-institute.com/'},
  {img: riLmuLogo, name: 'LMU RIZ',
    link: 'https://www.jura.uni-muenchen.de/fakultaet/riz_neu/index.html'},
  {img: suitcaseLogo, name: 'Suitcase'},
  {img: unternehmerTUM, name: 'UnternehmerTUM',
    link: 'https://www.unternehmertum.de/'},
  {img: uvcLogo, name: 'UVC Partners', link: 'https://www.uvcpartners.com/'},
  {img: verbraucherzentraleLogo, name: 'Verbraucherzentrale Bayern',
    link: 'https://www.verbraucherzentrale-bayern.de/'},
];

const technologyPartners: Logo[] = [
  {img: elevenlabsLogo, name: 'ElevenLabs', link: 'https://elevenlabs.io/'},
  {img: geminiLogo, name: 'Google Gemini', link: 'https://gemini.google.com/'},
  {img: lovableLogo, name: 'Lovable', link: 'https://lovable.dev/'},
];

const network: Logo[] = [
  {img: openLegalTechLogo, name: 'Open Legal Tech e. V.'},
  {img: recodeLogo, name: 'recode.law e.V.'},
  {img: orgTrierLogo, name: 'Legal Tech Trier e.V.', light: true},
  {img: orgCologneLogo, name: 'Legal Tech Lab Cologne e.V.'},
  {img: eLegalLogo, name: 'eLEGAL e.V.'},
  {img: orgFreiburg, name: 'fruit – Freiburg Recht und IT', light: true},
  {img: disruptLogo, name: 'disrUPt law Heidelberg e.V.'},
  {img: bucerius, name: 'Bucerius Law School'},
  {img: orgAachen, name: 'Legal Tech Aachen'},
  {img: orgGiessenLogo, name: 'JUST Legal Tech e.V.'},
  {img: legalTechDeLogo, name: 'Legal Tech Verband Deutschland e.V.'},
  {img: orgFrankfurtLogo, name: 'Legal Tech Lab Frankfurt am Main e.V.'},
  {img: orgMarburgLogo, name: 'Legal Tech Lab Marburg'},
  {img: cdpsLogo, name: 'TUM Center for Digital Public Services'},
  {img: orgMannheim, name: 'ltc Mannheim e.V.', light: true},
  {img: womenInAI, name: 'Women in AI and Robotics Germany e.V.'},
  {img: ds4g, name: 'DigitalService GmbH des Bundes'},
  {img: uniLeipzig, name: 'Universität Leipzig'},
  {img: built, name: 'Bayreuther Initiative für Legal Tech'},
  {img: ltv, name: 'Legal Tech Verzeichnis'},
  {img: beck, name: 'VERLAG C.H.BECK oHG'},
];

const chip = (l: Logo, key: number, opts: {wide?: boolean; small?: boolean} = {}) => {
  const inner = (
    <img src={l.img} alt={l.name}
      className={(opts.small ? 'max-h-10' : 'max-h-14') + ' max-w-full ' +
        'object-contain'} />
  );
  // white-version logos need a dark tile to stay visible
  const bg = l.light ?
    'bg-blue-12 border border-white/20' : 'bg-white';
  return (
    <div key={key} title={l.name}
      className={bg + ' rounded flex items-center justify-center p-4 ' +
        (opts.small ? 'h-20 w-36' : 'h-24 ') +
        (opts.wide ? 'w-full sm:w-44' : '')}>
      {l.link ? (
        <a href={l.link} target={'_blank'} rel={'noreferrer'}
          className={'flex items-center justify-center w-full h-full'}>
          {inner}
        </a>
      ) : inner}
    </div>
  );
};

const groupHeading = (text: string) => (
  <h3 className={'text-text-s font-semi-bold uppercase tracking-[0.16em] ' +
    'text-blue-7 mb-5'}>
    {text}
  </h3>
);

// LandingPartners – the 2026 partners, technology partners and the wider
// legal-tech network.
export function LandingPartners() {
  return (
    <LandingSection id={'partners-page'} eyebrow={'Partner & Förderer'}>
      <h2 className={'text-3xl md:text-5xl font-bold leading-tight mb-12'}>
        Getragen von einem starken Netzwerk.
      </h2>

      <div className={'mb-12'}>
        {groupHeading('Powered by')}
        <div className={'flex flex-wrap gap-4'}>
          {poweredBy.map((l, i) => chip(l, i, {wide: true}))}
        </div>
      </div>

      <div className={'mb-12'}>
        {groupHeading('Partner 2026')}
        <div className={'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'}>
          {partners2026.map((l, i) => chip(l, i))}
        </div>
      </div>

      <div className={'mb-12'}>
        {groupHeading('Technologie-Partner')}
        <div className={'flex flex-wrap gap-4'}>
          {technologyPartners.map((l, i) => chip(l, i, {wide: true}))}
        </div>
      </div>

      <div>
        {groupHeading('Frühere Partner')}
        <div className={'flex flex-wrap gap-3'}>
          {network.map((l, i) => chip(l, i, {small: true}))}
        </div>
      </div>
    </LandingSection>
  );
}
