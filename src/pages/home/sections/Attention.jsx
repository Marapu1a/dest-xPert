import React from 'react';
import { Link } from 'react-router-dom';

import attention1 from '@assets/sections/attention-1.webp';
import attention2 from '@assets/sections/attention-2.webp';
import attention3 from '@assets/sections/attention-3.webp';
import attention4 from '@assets/sections/attention-4.webp';

const AttentionSection = () => {
  return (
    <div className="bg-white p-6">
      <h2 className="text-3xl font-bold mb-6">Обратите внимание</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          {
            img: attention1,
            title: 'Селфи Премиум',
            text: 'Выбирая тур с отметкой «Selfie Premium», автоматически будут предложены отели класса люкс, встреча с цветами, индивидуальный трансфер.',
            bgColor: 'bg-blue-500',
          },
          {
            img: attention2,
            title: 'Чат-бот MAX',
            text: 'Max: телеграм-бот и персональный помощник. Удобно для смартфона. Доступ 24/7. Оперативный ответ на запрос.',
            bgColor: 'bg-green-500',
          },
          {
            img: attention3,
            title: 'Обучение',
            text: 'Регулярно проводятся образовательные мероприятия для турагентов в разнообразных форматах.',
            bgColor: 'bg-yellow-500',
          },
          {
            img: attention4,
            title: 'Коллаборация',
            text: 'Открыты к сотрудничеству и партнерству. Работая в сфере услуг, мы понимаем, как много зависит от хороших коллабораций.',
            bgColor: 'bg-red-500',
          },
        ].map(({ img, title, text, bgColor }, index) => (
          <div
            key={index}
            className={`attention-block ${bgColor} text-white p-6 rounded-lg flex flex-col md:flex-row overflow-hidden`}
          >
            <div className="w-full md:w-1/2 flex flex-col justify-center mb-4 md:mb-0">
              <h3 className="text-xl font-semibold text-shadow-md mb-2">
                {title}
              </h3>
              <p className="text-shadow-md mb-4">{text}</p>
              <Link
                to="#"
                className={`inline-block font-bold text-center px-6 py-3 rounded-full border-2 border-white shadow-xl transition-transform transform hover:scale-105 hover:bg-opacity-80`}
                style={{
                  maxWidth: '200px',
                  backgroundColor: 'white',
                  color:
                    bgColor.split('-')[1] === 'blue'
                      ? '#1D4ED8'
                      : bgColor.split('-')[1] === 'green'
                        ? '#10B981'
                        : bgColor.split('-')[1] === 'yellow'
                          ? '#F59E0B'
                          : '#EF4444',
                }}
              >
                Подробнее
              </Link>
            </div>
            <div className="w-full md:w-1/2 flex items-stretch">
              <img
                src={img}
                alt={title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AttentionSection;
