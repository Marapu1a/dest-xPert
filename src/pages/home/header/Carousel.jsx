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
      'md:text-[#252630] text-white text-4xl md:text-6xl md:ml-12 p-6 pb-8 md:bg-white rounded-[60px] rounded-bl-none shadow-lg',
    subtitle: 'в Европу',
    subtitleStyle:
      'md:text-[#252630] text-white text-4xl md:text-6xl md:ml-12 px-6 pb-8 pt-0 md:bg-white rounded-[60px] rounded-tl-none rounded-tr-none shadow-lg',
    buttonText: 'Бронировать',
    buttonStyle:
      'mt-6 md:ml-12 bg-orange-500 text-white text-[28px] md:text-[48px] py-4 px-10 font-bold rounded-full shadow-lg hover:bg-orange-600 transition',
  },
  {
    image: image2,
    title: 'Роудшоу ЧЕШСКАЯ ОДИССЕЯ 2025',
    titleStyle:
      'md:text-[#252630] text-white text-3xl md:text-5xl md:ml-12 font-bold md:bg-white p-4 rounded-[50px] rounded-bl-none shadow-lg',
    subtitle: 'Представляем потенциал Чешских регионов',
    subtitleStyle:
      'md:text-[#252630] text-white text-xl md:text-2xl md:ml-12 md:bg-white px-6 pb-6 pt-0 rounded-[50px] rounded-tl-none rounded-tr-none shadow-lg',
    buttonText: 'Регистрация',
    buttonStyle:
      'mt-6 md:ml-12 bg-orange-500 text-white text-[28px] md:text-[48px] py-4 px-10 font-bold rounded-full shadow-lg hover:bg-orange-600 transition',
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
      'text-white text-5xl md:text-6xl font-bold text-center md:ml-12 drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]',
    subtitle: '',
    subtitleStyle: '',
    buttonText: 'Перейти',
    buttonStyle:
      'mt-6 md:ml-12 bg-blue-500 text-white text-[28px] md:text-[38px] font-bold py-3 px-10 rounded-full shadow-lg hover:bg-blue-600 transition',
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
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      speed={800} // Плавное переключение
      lazy={{ loadPrevNext: true }} // Включаем ленивую загрузку изображений
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className="relative">
          {/* Оптимизированное изображение */}
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover will-change-transform"
            loading="lazy"
          />
          {/* Градиентный фон для контраста */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent transition-all duration-300 flex flex-col justify-center items-start sm:items-center md:items-start pl-4 sm:pl-6">
            <h2 className={slide.titleStyle}>{slide.title}</h2>
            {slide.subtitle && (
              <p className={slide.subtitleStyle}>{slide.subtitle}</p>
            )}
            {slide.buttonText && (
              <button className={slide.buttonStyle}>{slide.buttonText}</button>
            )}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

export default Carousel;
