import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export type CarouselItem = {src: string; caption?: string};

type Props = {
  items: CarouselItem[]
  // fallback caption shown under the whole carousel when a slide has none
  caption?: string
};

// RecapCarousel shows a set of photos in a swipeable carousel with
// navigation arrows and pagination dots. Each slide can carry its own
// caption; otherwise the shared caption is shown below the carousel.
export function RecapCarousel({items, caption}: Props) {
  const perSlideCaptions = items.some((it) => it.caption);
  return (
    <figure className={'my-4 max-w-2xl mx-auto'}>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={true}
        pagination={{clickable: true}}
        spaceBetween={12}
        slidesPerView={1}
        loop={true}
        className={'recap-carousel rounded overflow-hidden'}
      >
        {items.map((it, i) => (
          <SwiperSlide key={i}>
            <img
              src={it.src}
              alt={it.caption || caption || ('Foto ' + (i + 1))}
              className={'w-full aspect-[16/10] object-cover bg-blue-3'}
            />
            {it.caption && (
              <div className={'text-text-s text-blue-11 opacity-80 mt-2 ' +
                'italic text-center px-8'}>
                {it.caption}
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      {!perSlideCaptions && caption && (
        <figcaption className={'text-text-s opacity-60 mt-2 italic ' +
          'text-center'}>
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
