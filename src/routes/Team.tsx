import React from 'react';
import {Footer} from '../components/footer/Footer';
import '../components/event/EventTitle.css';
import {TeamCard} from '../components/team/TeamCard';
import mltechLogo from '../img/partners/org_munich.png';
import lmuLogo from '../img/partners/lmu.png';
import tumLogo from '../img/partners/TUM_good.svg';
import lltLogo from '../img/lltLogos/logo-colored.svg';

type TeamMember = {
    name: string
    shortDesc: string
    email?: string
    linkedIn?: string
    backgroundClass: string
}

type TeamGroup = {
    label: string
    logo: string
    members: TeamMember[]
}

export class Team extends React.Component {
  private teamGroups: TeamGroup[] = [
    {
      label: 'Team MLTech',
      logo: mltechLogo,
      members: [
        {
          name: 'Felicitas Bingger',
          shortDesc: 'Vorstandsvorsitzende',
          email: 'felicitas.bingger@ml-tech.org',
          linkedIn: 'https://www.linkedin.com/in/felicitas-bingger-897b3b332/',
          backgroundClass: 'felicitas-pic',
        },
        {
          name: 'Luca Ballmann',
          shortDesc: 'Vorstandsvorsitzender',
          email: 'luca.ballmann@ml-tech.org',
          linkedIn: 'https://www.linkedin.com/in/luca-j-ballmann-50807023b/',
          backgroundClass: 'luca-pic',
        },
        {
          name: 'Enci Huang',
          shortDesc: 'Koordinator Hackathon',
          email: 'enci.huang@ml-tech.org',
          linkedIn: 'https://www.linkedin.com/in/enci-huang-%E9%BB%83%E6%81%A9%E8%B3%9C-14009b229/',
          backgroundClass: 'enci-pic',
        },
      ],
    },
    {
      label: 'Team LMU',
      logo: lmuLogo,
      members: [
        {
          name: 'Dr. Ann-Kristin Mayrhofer',
          shortDesc: 'Akademische Rätin a. Z. · LMU, Lehrstuhl für ' +
            'Bürgerliches Recht, Zivilverfahrensrecht, Europäisches ' +
            'Privat- und Verfahrensrecht',
          email: 'annkristin.mayrhofer@jura.uni-muenchen.de',
          linkedIn: 'https://www.linkedin.com/in/ann-kristin-mayrhofer-983235239/',
          backgroundClass: 'annkristin-pic',
        },
        {
          name: 'Nikolaus Bauer',
          shortDesc: 'Wiss. Mit. · LMU / Rechtsinformatikzentrum',
          email: 'nikolaus.bauer@jura.uni-muenchen.de',
          linkedIn: 'https://www.linkedin.com/in/nikolaus-bauer-415567311/',
          backgroundClass: 'nikolaus-pic',
        },
      ],
    },
    {
      label: 'Team TUM',
      logo: tumLogo,
      members: [
        {
          name: 'Dr. Tristan Radtke',
          shortDesc: 'Akademischer Rat a. Z. · TUM, Lehrstuhl für Law and ' +
            'Regulation of the Digital Transformation (SOT)',
          email: 'tristan.radtke@tum.de',
          linkedIn: 'https://www.linkedin.com/in/tristan-radtke/',
          backgroundClass: 'tristan-pic',
        },
        {
          name: 'Niklas Wais',
          shortDesc: 'Wiss. Mit. · Lehrstuhl für Legal Tech (CIT)',
          email: 'niklas.wais@tum.de',
          linkedIn: 'https://www.linkedin.com/in/niklas-wais/',
          backgroundClass: 'niklas-pic',
        },
      ],
    },
    {
      label: 'Gründer',
      logo: lltLogo,
      members: [
        {
          name: 'Sebastian Nagl',
          shortDesc: 'Gründer',
          linkedIn: 'https://www.linkedin.com/in/sebastian-nagl-94b276162/',
          backgroundClass: 'basti-pic',
        },
      ],
    },
  ];

  render() {
    return (<div className="overflow-x-hidden min-h-screen flex flex-col">
      <div className={'flex flex-col grow pt-8 mt-28 tabletL:mt-32 xl:mt-36 ' +
        'bg-red-3 pb-16'}>

        <div className={'page-subheader text-head-m font-medium text-blue-1 ' +
          'bg-blue-12 rounded-r py-6 pl-6 pr-14 w-fit relative mb-8'}>
          Team
        </div>

        {this.teamGroups.map((group, gi) => (
          <div key={gi} className={'mb-16 px-6 lg:w-4/5 lg:mx-auto'}>

            {/* Gruppen-Header mit Logo */}
            <div className={'flex items-center gap-4 mb-8'}>
              <img
                src={group.logo}
                alt={group.label}
                className={'h-10 w-auto object-contain'}
              />
              <h2 className={'text-head-m font-bold text-blue-12'}>
                {group.label}
              </h2>
            </div>

            {/* Karten-Grid */}
            <div className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' +
              ' gap-8'}>
              {group.members.map((member, mi) => (
                <TeamCard
                  key={mi}
                  name={member.name}
                  shortDesc={member.shortDesc}
                  email={member.email}
                  linkedIn={member.linkedIn}
                  backgroundClass={member.backgroundClass}
                />
              ))}
            </div>

            {/* Trennlinie zwischen Gruppen */}
            {gi < this.teamGroups.length - 1 && (
              <div className={'w-full h-px bg-blue-12 opacity-20 mt-16'} />
            )}

          </div>
        ))}

      </div>

      <Footer backgroundColor={'blue'}/>
    </div>);
  }
}
