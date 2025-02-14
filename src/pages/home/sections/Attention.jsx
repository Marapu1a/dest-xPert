import React from 'react';
import { Link } from 'react-router-dom';

import attention1 from '@assets/sections/attention/attention1.webp';
import attention2 from '@assets/sections/attention/attention2.webp';
import attention3 from '@assets/sections/attention/attention3.webp';
import attention4 from '@assets/sections/attention/attention4.webp';

const slides = [
  {
    img: attention1,
    title: 'Программа лояльности для агентств',
    text: 'Забронируйте <span class="text-yellow-500 font-bold">тур на двоих</span> в Карловы Вары до <span class="text-yellow-500 font-bold">30.04.25</span> и получите дополнительную скидку <span class="text-yellow-500 font-bold">1%</span> к туру.',
    buttonStyle:
      'lg:absolute lg:left-[36px] lg:top-[230px] z-10 text-center max-w-[80%]',
  },
  {
    img: attention2,
    title: '<span class="text-green-500">Растите</span> вместе с нами',
    text: 'Оставьте Вашу заявку на обучающие мероприятия от <span class="text-green-500 font-bold">DestXpert Travel</span>.',
    buttonStyle:
      'lg:absolute lg:left-[38px] lg:top-[190px] z-10 text-center max-w-[70%]',
  },
  {
    img: attention3,
    title: 'Хочешь быть в курсе <span class="text-blue-500">событий</span>?',
    text: 'Подпишись на наш <span class="text-blue-500 font-bold">телеграм-канал</span> и узнавай <span class="text-blue-500 font-bold">новости первым</span>! <br /> (канал Телеграм для частника).',
    buttonStyle:
      'lg:absolute lg:left-[30px] lg:top-[205px] z-10 text-center max-w-[60%]',
  },
  {
    img: attention4,
    title:
      'Есть <span class="text-yellow-500">вопросы</span>? Пиши <span class="text-yellow-500">нам</span>!',
    text: 'Наш <span class="text-yellow-500 font-bold">чат-бот</span> Телеграм всегда готов прийти на помощь и ответить на <span class="text-yellow-500 font-bold">любые вопросы</span> вашего <span class="text-yellow-500 font-bold">агентства</span>, а наши менеджеры свяжутся с Вами в <span class="text-yellow-500 font-bold">течение суток</span>.',
    buttonStyle:
      'lg:absolute lg:left-[32px] lg:top-[210px] z-10 text-center max-w-[75%]',
  },
];

const AttentionSection = () => {
  return (
    <div className="bg-white p-6">
      <h2 className="text-3xl font-bold mb-6">Обратите внимание</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {slides.map(({ img, title, text, buttonStyle }, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center justify-start text-white p-6 rounded-lg overflow-hidden min-h-[250px] lg:min-h-[700px]"
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <h3
              className="text-3xl text-shadow-md font-bold text-center mb-4"
              dangerouslySetInnerHTML={{ __html: title }}
            />
            <p
              className="text-2xl text-shadow-md text-left mb-6"
              dangerouslySetInnerHTML={{ __html: text }}
            />
            <div className={buttonStyle}>
              <Link
                to="#"
                className="inline-block font-bold text-center px-6 py-3 rounded-full bg-white text-blue-900 lg:text-[28px] shadow-xl transition-transform transform hover:scale-105"
              >
                Подробнее
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AttentionSection;
