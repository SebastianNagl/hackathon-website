import React from 'react';
import {Footer} from '../components/footer/Footer';
import {HackathonHero} from '../components/hero/HackathonHero';
import {LandingLeitthema} from '../components/landing/LandingLeitthema';
import {LandingAbout} from '../components/landing/LandingAbout';
import {LandingRecapTeaser} from '../components/landing/LandingRecapTeaser';
import {LandingStimmen} from '../components/landing/LandingStimmen';
import {LandingPartners} from '../components/landing/LandingPartners';

// Home is the entrypoint for the first page (path: /)
export class Home extends React.Component {
  scrollTo(selector: string): undefined {
    const nextElement = document.querySelector(selector) as HTMLElement;
    if (!nextElement) {
      return;
    }
    window.scroll({
      behavior: 'smooth', left: 0, top: nextElement.offsetTop,
    });
  }

  render() {
    return <div className={`App overflow-x-hidden`}>
      <HackathonHero scrollTo={this.scrollTo} />
      <LandingLeitthema />
      <LandingAbout />
      <LandingRecapTeaser />
      <LandingStimmen />
      <LandingPartners />
      <Footer backgroundColor={'blue'} />
    </div>;
  }
}
