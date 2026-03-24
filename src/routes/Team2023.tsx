import React from 'react';
import {Footer} from '../components/footer/Footer';
import {TeamCard} from '../components/team/TeamCard';

type TeamMember = {
    name: string
    email?: string
    linkedIn?: string
    shortDesc: string
    backgroundClass: string
}

export class Team2023 extends React.Component {
  private teamMembers: TeamMember[] = [
    {
      name: 'Sebastian Nagl',
      shortDesc: 'Initiator & Junge für Alles',
      linkedIn: 'https://www.linkedin.com/in/sebastian-nagl-94b276162/',
      backgroundClass: 'basti-pic',
    },
    {
      name: 'Sarah Rachut',
      shortDesc: 'Strategy & Memes',
      linkedIn: 'https://www.linkedin.com/in/sarah-rachut/',
      backgroundClass: 'sarah-pic',
    },
    {
      name: 'Muskaan Multani',
      shortDesc: 'Eventkoordination',
      linkedIn: 'https://www.linkedin.com/in/muskaan-multani-987873184/',
      backgroundClass: 'muskaan-pic',
    },
    {
      name: 'Ann-Sophie Blaser',
      shortDesc: 'Teilnehmer:innen & Initiativen',
      linkedIn: 'https://www.linkedin.com/in/ann-sophie-blaser-a9706b222/',
      backgroundClass: 'ann-sophie-pic',
    },
    {
      name: 'Fabian Wiedemann',
      shortDesc: 'Hochschulkontakte',
      linkedIn: 'https://www.linkedin.com/in/fabian-wiedemann/',
      backgroundClass: 'fabian-pic',
    },
    {
      name: 'Charlie Tiehm',
      shortDesc: 'Developer',
      backgroundClass: 'charlie-pic',
    },
  ];

  render() {
    return (<div className="overflow-x-hidden">
      <div className={'min-h-screen flex bg-red-3 w-full justify-center ' +
          'items-center mb-10'}>
        <div className={'container p-10 grid grid-cols-1 sm:grid-cols-2 ' +
            'lg:grid-cols-3 gap-8 min-h-full flex ' +
            'justify-center items-center mt-24 tabletL:mt-28 lg:mt-32 xl:mt-36'}
        >
          {this.teamMembers.map((member, index) =>
            <TeamCard
              key={index}
              backgroundClass={member.backgroundClass}
              email={member.email}
              name={member.name}
              shortDesc={member.shortDesc}
              linkedIn={member.linkedIn} />,
          )}
        </div>
      </div>

      <Footer backgroundColor={'blue'}/>

    </div>);
  }
}
