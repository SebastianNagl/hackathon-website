import classNames from 'classnames';
import React from 'react';
import linkedInIcon from '../../img/icons/linkedIn.png';
import mailIcon from '../../img/icons/mail.svg';
import './TeamCard.css';

type Props = {
    name: string
    email?: string
    linkedIn?: string
    shortDesc: string
    backgroundClass: string
}

export class TeamCard extends React.Component<Props> {
  render() {
    return <div className="bg-blue-2 rounded relative select-none 2xl:h-[400px]">
      <div
        className={'w-full h-60 2xl:h-[80%] rounded-t ' +
          this.props.backgroundClass}>
      </div>
      <div className="text-center p-4 bg-blue-2 bg-opacity-10 rounded-b">
        <div className="font-semi-bold">
          {this.props.name}
        </div>
        <div className="text-sm opacity-80 mb-3">
          {this.props.shortDesc}
        </div>
        <div className={classNames(
            'flex items-center mx-auto mt-2',
            this.props.email && this.props.linkedIn ? 'justify-around w-2/5' : 'justify-center',
        )}>
          {this.props.email &&
            <a
              href={'mailto:' + this.props.email}
              target="_blank"
              rel="noreferrer">
              <img className="h-7 w-auto" src={mailIcon} alt="Email"/>
            </a>
          }
          {this.props.linkedIn &&
            <a
              href={this.props.linkedIn}
              target="_blank"
              rel="noreferrer">
              <img className="h-6 w-auto" src={linkedInIcon} alt="LinkedIn"/>
            </a>
          }
        </div>
      </div>
    </div>;
  }
}
