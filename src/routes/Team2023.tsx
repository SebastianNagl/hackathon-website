import React from 'react';
import {Link} from 'react-router-dom';
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
    return <div className={'overflow-x-hidden min-h-screen flex flex-col'}>

      <div className={'flex flex-col grow pt-8 grow mb-6 lg:mb-0 mt-20 ' +
          'tabletL:mt-24 xl:mt-28 relative'}>

        <Link to={'/result'}
          className={'absolute top-24 left-6 tabletL:left-10 text-blue-12' +
            ' opacity-70 hover:opacity-100 transition-opacity text-sm font-medium'}>
          ← Zurück zum Recap
        </Link>

        <div className={'py-6 pl-8 pr-10 md:mt-10 tabletL:px-12 ' +
            'lg:w-4/5 lg:mx-auto'}>

          <div className={'container grid grid-cols-1 sm:grid-cols-2 ' +
              'lg:grid-cols-3 gap-8 mt-16'}>
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

      </div>

      <Footer backgroundColor={'blue'}/>

    </div>;
  }
}
