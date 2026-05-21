import React from 'react';
import './Partners.css';
import cdpsLogo from '../../img/partners/cdps.png';
import disruptLogo from '../../img/partners/disrupt_law_logo.jpg';
import eLegalLogo from '../../img/partners/elegal.png';
import legalTechDeLogo from '../../img/partners/legal_tech_init_de.svg';
import liquidLegalLogo from '../../img/partners/liquid_legal.png';
import lmuLogo from '../../img/partners/lmu.png';
import openLegalTechLogo from '../../img/partners/open_legal_tech.png';
import orgFrankfurtLogo from '../../img/partners/org_fra.png';
import orgAachen from '../../img/partners/org_aachen.svg';
import orgCologneLogo from '../../img/partners/org_cologne.png';
import orgFreiburg from '../../img/partners/org_freiburg_white.png';
import orgGiessenLogo from '../../img/partners/org_giessen.png';
import orgMannheim from '../../img/partners/org_mannheim_white.png';
import orgMarburgLogo from '../../img/partners/org_marburg.png';
import mlTechLogo from '../../img/partners/org_munich.png';
import recodeLogo from '../../img/partners/org_recode_text.png';
import orgTrierLogo from '../../img/partners/org_trier_logo_text_white.png';
import tumLogo from '../../img/partners/TUM_good.svg';
import riLMU from '../../img/partners/ri_lmu.png';
import bucerius from '../../img/partners/bucerius.png';
import ltc from '../../img/partners/ltc.png';
import unternehmerTUM from '../../img/partners/unternehmertum.png';
import womenInAI from '../../img/partners/women_in_ai.png';
import built from '../../img/partners/built.png';
import stmj from '../../img/partners/stmj.png';
import uniLeipzig from '../../img/partners/uniLeipzig.png';
import ds4g from '../../img/partners/ds4g-logo.svg';
import ltv from '../../img/mediapartners/legal_tech_verzeichnis.png';
import beck from '../../img/mediapartners/beck.png';

interface Partner {
  img: string;
  name: string;
  link: string;
  dark?: boolean;
}

const partners: Partner[] = [
  {img: stmj, name: 'Bayerisches Staatsministerium der Justiz', link: 'https://www.justiz.bayern.de/ministerium/'},
  {img: ltc, name: 'Legal Tech Colab', link: 'https://www.legal-tech-colab.de/'},
  {img: openLegalTechLogo, name: 'Open Legal Tech e. V.', link: 'https://open-legal-tech.org/'},
  {img: unternehmerTUM, name: 'UnternehmerTUM GmbH', link: 'https://www.unternehmertum.de/'},
  {img: recodeLogo, name: 'recode.law e.V.', link: 'https://recode.law/'},
  {img: liquidLegalLogo, name: 'Liquid Legal Institute e.V.', link: 'https://www.liquid-legal-institute.com/'},
  {img: lmuLogo, name: 'Ludwig-Maximilians-Universität München', link: 'https://www.lmu.de/de/index.html'},
  {img: orgTrierLogo, name: 'Legal Tech Trier e.V.', link: 'https://www.legaltechtrier.de/', dark: true},
  {img: orgCologneLogo, name: 'Legal Tech Lab Cologne e.V.', link: 'https://legaltechcologne.de/'},
  {img: mlTechLogo, name: 'Munich Legal Tech Student Association e.V.', link: 'https://www.ml-tech.org/'},
  {img: eLegalLogo, name: 'eLEGAL e.V.', link: 'https://www.elegal.technology/'},
  {img: tumLogo, name: 'Technische Universität München', link: 'https://www.tum.de/'},
  {img: orgFreiburg, name: 'fruit - Freiburg Recht und IT', link: 'https://freiburg-recht-und-it.de/', dark: true},
  {img: riLMU, name: 'LMU RIZ', link: 'https://www.jura.uni-muenchen.de/fakultaet/riz_neu/index.html'},
  {img: disruptLogo, name: 'disrUPt law Heidelberg e.V.', link: 'https://disrupt-law.org/'},
  {img: bucerius, name: 'Bucerius Law School', link: 'https://www.law-school.de/'},
  {img: orgAachen, name: 'Legal Tech Aachen', link: 'https://www.linkedin.com/company/legal-tech-aachen/'},
  {img: orgGiessenLogo, name: 'JUST Legal Tech e.V.', link: 'https://www.just-legaltech.de/'},
  {img: legalTechDeLogo, name: 'Legal Tech Verband Deutschland e.V.', link: 'https://www.legaltechverband.de/'},
  {img: orgFrankfurtLogo, name: 'Legal Tech Lab Frankfurt am Main e.V.', link: 'https://legaltechlab.de/'},
  {img: orgMarburgLogo, name: 'Legal Tech Lab Marburg', link: 'https://www.legal-tech-marburg.de/'},
  {img: cdpsLogo, name: 'TUM Center for Digital Public Services', link: 'https://www.tum-cdps.de/'},
  {img: orgMannheim, name: 'ltc Mannheim e.V.', link: 'https://www.ltc-mannheim.de/', dark: true},
  {img: womenInAI, name: 'Women in AI and Robotics Germany e.V.', link: 'https://www.womeninairobotics.de/'},
  {img: ds4g, name: 'DigitalService GmbH des Bundes', link: 'https://digitalservice.bund.de/'},
  {img: uniLeipzig, name: 'Universität Leipzig', link: 'https://www.uni-leipzig.de/'},
  {img: built, name: 'Bayreuther Initiative für Legal Tech', link: 'https://www.built-bt.de/'},
  {img: ltv, name: 'Legal Tech Verzeichnis', link: 'https://legal-tech-verzeichnis.de/'},
  {img: beck, name: 'VERLAG C.H.BECK oHG', link: 'https://www.beck.de/'},
];

export class Partners extends React.Component {
  render() {
    const items = [...partners, ...partners];

    return <div id="partners-page" className={'relative mb-24 bg-blue-7 py-8'}>
      <div className={'absolute top-8 left-0 rounded-r z-10 bg-blue-12 ' +
        'text-blue-1 text-3xl px-20 py-6'}>
        Previous Partners
      </div>

      <div className={'pt-28 pb-4 overflow-hidden'}>
        <div className={'partners-track'}>
          {items.map((partner, index) => (
            <a
              key={index}
              href={partner.link}
              target="_blank"
              rel="noreferrer"
              title={partner.name}
              className={'flex-shrink-0 mx-4 w-40 h-20 flex items-center ' +
                'justify-center p-2 hover:scale-105 transition-transform'}>
              <img
                src={partner.img}
                alt={partner.name}
                className={'max-h-full max-w-full object-contain ' +
                  (partner.dark ? 'brightness-0 invert' : '')}
              />
            </a>
          ))}
        </div>
      </div>
    </div>;
  }
}
