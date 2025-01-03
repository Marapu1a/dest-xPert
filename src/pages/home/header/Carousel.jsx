import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import image1 from '@assets/header/danang.webp';
import image2 from '@assets/header/kambodja.webp';
import image3 from '@assets/header/fukuok.webp';
import image4 from '@assets/header/niachang.webp';
import image5 from '@assets/header/prague.webp';
import image6 from '@assets/header/posh-club.webp';
import image7 from '@assets/header/hajnan.webp';
import image8 from '@assets/header/tajland.webp';
import image9 from '@assets/header/tg-bot.webp';
import image10 from '@assets/header/waterworld.webp';

const slides = [
  {
    image: image1,
    title: 'Дананг - сердце Вьетнама',
    subtitle: 'Прямые вылеты из Астаны и Алматы!',
    buttonText: 'Бронируйте туры',
  },
  {
    image: image2,
    title: 'Экзотика Камбоджи',
    subtitle: 'Прямой чартер из Алматы, Астаны и Екатеринбурга!',
    buttonText: 'Бронируйте туры',
  },
  {
    image: image3,
    title: 'Вьетнам, остров Фукуок',
    subtitle: 'о. Фукуок из Алматы, Астаны и Шымкента доступен к бронированию!',
    buttonText: 'Бронируйте туры',
  },
  {
    image: image4,
    title: 'Нячанг из Алматы!',
    subtitle: 'Открывая новые горизонты! Нячанг из Алматы 2 раза в неделю',
    buttonText: 'Бронируйте туры',
  },
  {
    image: image5,
    title: 'Прага из Астаны!',
    subtitle: 'Вылеты из Астаны (с подлетами на крыльях Scat Airlines)',
    buttonText: 'Бронируйте туры',
  },
  {
    image: image6,
    title: 'Posh Club by Sunrise',
    subtitle: 'Бонусная система для сьют-номеров в отелях Sunrise',
    buttonText: 'Забронировать отель',
  },
  {
    image: image7,
    title: 'Китай. Остров Хайнань',
    subtitle:
      'Китайский остров сокровищ. Вылеты 2 раза в неделю из Алматы, Астаны.',
    buttonText: 'Бронируйте туры',
  },
  {
    image: image8,
    title: 'Тайланд круглый год',
    subtitle:
      'Вылеты из Актобе, Алматы, Астаны, Костаная, Тараза, Уральска и Шымкента',
    buttonText: 'Бронируйте туры',
  },
  {
    image: image9,
    title: 'Telegram-бот',
    subtitle: 'Описание функций бота',
    buttonText: 'Перейти в Telegram',
  },
  {
    image: image10,
    title: 'Coral Sea Waterworld',
    subtitle: 'Ваш отель для семейного отдыха',
    buttonText: 'Бронируйте туры',
  },
];

const Carousel = () => (
  <Swiper
    modules={[Navigation, Pagination, Autoplay]}
    navigation
    pagination={{ clickable: true }}
    autoplay={{ delay: 3000, disableOnInteraction: false }}
    loop
  >
    {slides.map((slide, index) => (
      <SwiperSlide key={index}>
        <img
          src={slide.image}
          alt={slide.title}
          className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex flex-col justify-center items-center text-white">
          <h2 className="text-2xl md:text-4xl font-bold text-shadow-lg">
            {slide.title}
          </h2>
          <p className="text-lg md:text-xl mt-2 text-shadow-md">
            {slide.subtitle}
          </p>
          <button className="mt-4 bg-blue-600 px-4 py-2 rounded-lg">
            {slide.buttonText}
          </button>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
);

export default Carousel;
