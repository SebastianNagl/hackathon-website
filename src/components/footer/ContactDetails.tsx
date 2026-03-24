import React from 'react';

type Props = {
    className: string
}

export class ContactDetails extends React.Component<Props, any> {
  render() {
    return <div className={this.props.className}>
      <div className={'text-text-l font-medium mb-2'}>
        Kontakt
      </div>
      <div className={'font-semi-bold text-text-l mb-0.5'}>
        {/* the name of the person to contact, changes should
        probably also cause an image change; the image can be
        changed in Footer.css */}
        Enci Huang
      </div>
      <div className={'italic text-text-s mb-0.5'}>
        Koordinator Hackathon
      </div>
      <div className={'font-semi-bold text-text-s'}>
        <a href={'mailto:hackathon@ml-tech.org'}>hackathon@ml-tech.org</a>
      </div>
    </div>;
  }
}
