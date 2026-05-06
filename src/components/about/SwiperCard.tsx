import React from 'react';

type Props = {
    img: string
    title: string
    info: string
    details: string
}

export class SwiperCard extends React.Component<Props, {}> {
  render() {
    return <div className={'rounded overflow-hidden'}>
      <div>
        <img
          alt={this.props.title}
          src={this.props.img}
          className={'w-full object-cover'}
        />
      </div>
      <div className={'px-4 pb-4'}>
        <div className={'pt-3 850-h:pt-6 text-head-m'}>
          {this.props.title}
        </div>
        <div className={'text-text-s 750-h:text-text-subtitle' +
          ' 850-h:text-text-l text-left pt-2 850-h:text-justify'}
        dangerouslySetInnerHTML={{__html:
                 `${this.props.info}<br />${this.props.details}`}}
        >
        </div>
      </div>
    </div>;
  }
}
