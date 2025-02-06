import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import image1 from '@assets/header/carousel/Eurotour.webp';
import image2 from '@assets/header/carousel/Roadshow.webp';
import image3 from '@assets/header/carousel/Popular.webp';
import image4 from '@assets/header/carousel/TG.webp';
import image5 from '@assets/header/carousel/Training.webp';

const slides = [
  {
    image: image1,
    title: '',
    subtitle: '',
    buttonText: 'Бронировать',
    buttonStyle:
      'absolute bottom-7 md:bottom-[90px] left-2 md:left-[54px] bg-orange-500 text-white text-[28px] md:text-[48px] md:pb-4 pb-2 font-bold py-1 px-10 rounded-full shadow-lg hover:bg-orange-600 transition',
  },
  {
    image: image2,
    title: '',
    subtitle: '',
    buttonText: 'Регистрация',
    buttonStyle:
      'absolute bottom-7 md:bottom-[90px] left-2 md:left-[48px] bg-orange-500 text-white text-[28px] md:text-[48px] md:pb-4 pb-2 font-bold py-1 px-10 rounded-full shadow-lg hover:bg-orange-600 transition',
  },
  {
    image: image3,
    title: '',
    subtitle: '',
    buttonText: '',
    buttonStyle: 'hidden',
  },
  {
    image: image4,
    title: '',
    subtitle: '',
    buttonText: 'Перейти',
    buttonStyle:
      'absolute bottom-7 md:bottom-[180px] left-2 md:left-[105px] bg-blue-500 text-white text-[38px] font-bold md:pb-5 py-3 px-14 rounded-full shadow-lg hover:bg-blue-600 transition',
  },
  {
    image: image5,
    title: '',
    subtitle: '',
    buttonText: '',
    buttonStyle: 'hidden',
  },
];

const Carousel = () => (
  <div className="w-full overflow-hidden">
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      // autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className="relative">
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
            <h2 className="text-2xl md:text-4xl font-bold cursor-default">
              {slide.title}
            </h2>
            <p className="text-lg md:text-xl mt-2 cursor-default">
              {slide.subtitle}
            </p>
            <button className={slide.buttonStyle}>{slide.buttonText}</button>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

export default Carousel;
