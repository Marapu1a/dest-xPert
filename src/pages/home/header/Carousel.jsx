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
    title: `Экскурсионные туры`,
    titleStyle:
      'md:text-[#252630] text-white text-4xl md:text-6xl p-6 pb-8 md:bg-white rounded-[60px] rounded-bl-none shadow-lg',
    subtitle: 'в Европу',
    subtitleStyle:
      'md:text-[#252630] text-white text-4xl md:text-6xl px-6 pb-8 pt-0 md:bg-white rounded-[60px] rounded-tl-none rounded-tr-none shadow-lg',
    buttonText: 'Бронировать',
    buttonStyle:
      'mt-6 bg-orange-500 text-white text-[28px] md:text-[48px] pb-5 pt-3 px-10 font-bold rounded-full shadow-lg hover:bg-orange-600 transition',
  },
  {
    image: image2,
    title: 'Роудшоу ЧЕШСКАЯ ОДИССЕЯ 2025',
    titleStyle:
      'md:text-[#252630] text-white text-3xl md:text-5xl font-bold md:bg-white p-4 rounded-[50px] rounded-bl-none shadow-lg',
    subtitle: 'Представляем потенциал Чешских регионов',
    subtitleStyle:
      'md:text-[#252630] text-white text-xl md:text-2xl md:bg-white px-6 pb-6 pt-0 rounded-[50px] rounded-tl-none rounded-tr-none shadow-lg',
    buttonText: 'Регистрация',
    buttonStyle:
      'mt-6 bg-orange-500 text-white text-[28px] md:text-[48px] pb-5 pt-3 px-10 font-bold rounded-full shadow-lg hover:bg-orange-600 transition',
  },
  {
    image: image3,
    title: 'Популярные курорты Европы',
    titleStyle:
      'text-white text-5xl md:text-6xl font-bold text-center drop-shadow-[0_4px_4px_rgba(0,0,0,0.7)] w-full',
    subtitle: '',
    subtitleStyle: '',
    buttonText: '',
    buttonStyle: 'hidden',
  },
  {
    image: image4,
    title: 'Telegram-канал',
    titleStyle:
      'text-white text-5xl md:text-6xl font-bold text-center drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]',
    subtitle: '',
    subtitleStyle: '',
    buttonText: 'Перейти',
    buttonStyle:
      'mt-6 bg-blue-500 text-white text-[28px] md:text-[38px] font-bold py-2 pb-4 px-10 rounded-full shadow-lg hover:bg-blue-600 transition',
  },
  {
    image: image5,
    title: 'Обучающие семинары\nи тренинги',
    titleStyle:
      'text-white text-5xl md:text-6xl font-bold text-center drop-shadow-[0_4px_4px_rgba(0,0,0,0.7)] w-full whitespace-pre-line',
    subtitle: '',
    subtitleStyle: '',
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
      loop
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className="relative">
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-start sm:items-center md:items-start pl-4 sm:pl-6">
            <h2
              className={`${slide.titleStyle} text-3xl sm:text-5xl md:text-6xl`}
            >
              {slide.title}
            </h2>
            {slide.subtitle && (
              <p
                className={`${slide.subtitleStyle} text-xl sm:text-2xl md:text-3xl`}
              >
                {slide.subtitle}
              </p>
            )}
            {slide.buttonText && (
              <button
                className={`${slide.buttonStyle} text-lg sm:text-2xl md:text-3xl px-6 md:px-10`}
              >
                {slide.buttonText}
              </button>
            )}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

export default Carousel;
