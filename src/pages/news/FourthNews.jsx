import React, { useState } from 'react';
import newsVideo from '@assets/sections/news/fourth_news/news_video1.mp4';

const FourthNews = () => {
  return (
    <div className="container mx-auto">
      <div className="bg-white rounded p-6 mb-8">
        <h1 className="text-3xl font-bold mb-6 text-center md:text-left">
          🚀 Европейский туроператор DestXpert Travel запускает онлайн-продажи!
          🔥
        </h1>

        <span className="text-gray-400 text-sm mb-4 block text-center md:text-left">
          17 февраля 2025
        </span>

        {/* Контейнер для видео и текста */}
        <div className="flex flex-col md:flex-row gap-6 items-center">
          {/* Левая колонка с видео */}
          <div className="md:w-1/2 w-full flex justify-center">
            <video
              src={newsVideo}
              autoPlay
              loop
              muted
              playsInline
              className="w-[300px] md:w-[80%] h-auto rounded-lg"
            />
          </div>

          {/* Правая колонка с текстом */}
          <div className="p-6 md:w-1/2 w-full">
            <p className="text-gray-700 mb-4">
              Приглашаем агентов, партнеров и всех, кто хочет развивать туризм,
              подключиться к нашей платформе!
            </p>
            <p className="text-gray-700 mb-4">
              ✅ Удобный доступ к актуальным турам
            </p>
            <p className="text-gray-700 mb-4">✅ Бронирование отелей</p>
            <p className="text-gray-700 mb-4">
              ✅ Прозрачные тарифы и моментальное бронирование
            </p>
            <p className="text-gray-700 mb-4">
              ✅ Поддержку на каждом этапе работы
            </p>

            <p className="text-gray-700 mb-4">
              💡 Будьте в числе первых! Регистрируйтесь прямо сейчас и получайте
              дополнительный 1% на первую заявку.
              <br />
              👉{' '}
              <a
                href="https://sm.destxpert.travel/search_tour?samo_action=logon"
                className="text-blue-600 underline"
              >
                Перейти к регистрации
              </a>
            </p>

            <p className="text-gray-700 mb-4">
              📩 По вопросам сотрудничества обращайтесь:
              <br />
              Бахтиозина Ксения - Руководитель отдела продаж
              <br />
              Моб: +998 90 026 88 85
            </p>

            <p className="text-gray-700">
              DestXpert Travel – соединяем Европу и Узбекистан 🌍✈️
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthNews;
