import classNames from 'classnames';
import {Testimonial} from './Testimonials';
import React from 'react';

interface Props {
  testimonial: Testimonial;
  i: number;
}

export class TestimonialSwiper extends React.Component<Props, {}> {
  render() {
    return <div className="w-2/3 h-full mx-auto ">
      <div className={'w-full my-20 relative h-full flex' +
        ' flex-col justify-center align-middle items-center'}>
        <div className={classNames('bg-contain absolute xl:top-20' +
          ' top-[17%] sm:top-1/4 -translate-y-1/2' +
          ' xl:translate-y-0 bg-brackets xl:h-56 xl:w-56 md:h-40' +
          ' md:w-40 w-28 h-28 bg-no-repeat bg-center flex' +
          ' justify-center align-center items-center',
          this.props.i % 2 ?
            'xl:-left-28 md:-left-20' :
            'xl:-right-28 md:-right-20')}>
          <img
            src={this.props.testimonial.img}
            className={'h-5/6 rounded'}
            alt={this.props.testimonial.name} />
        </div>
        <div className={'rounded bg-red-3 w-full h-2/3 sm:h-1/2' +
          ' flex' +
          ' justify-center align-center items-center'}>
          <div className={'md:w-3/4 w-5/6 text-center md:pt-0' +
            ' pt-4'}>
            <div className={classNames('text-left mx-auto w-10/12',
              this.props.testimonial.isTooBig ?
              'text-text-s md:text-text-m xl:text-head-s 2xl:text-head-m' :
              'text-text-m md:text-head-s xl:text-head-m 2xl:text-head-l')}>
              {this.props.testimonial.text}
            </div>
            <div className={classNames(
                'text-right mt-4',
              this.props.testimonial.isTooBig ?
              'text-text-s md:text-text-m xl:text-text-lg' :
              'text-text-s md:text-text-m xl:text-head-s')}>
              - {this.props.testimonial.name}
            </div>
          </div>
        </div>
      </div>
    </div>;
  }
}
