import React, { useState } from 'react';
import newsPhoto1 from '@assets/sections/news/first_news/news1-1.jpg';

const FirstNews = () => {
  const photos = [newsPhoto1];
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <div className="container mx-auto">
      <div className="bg-white rounded p-6 mb-8">
        <h1 className="text-3xl font-bold mb-6">
          Агентствам : не забывайте про раннее бронирование и успейте получить
          дополнительную выгоду!
        </h1>

        <span className="text-gray-400 text-sm mb-2">9 февраля 2025</span>

        {/* Контейнер для изображений и текста */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Левая колонка с изображениями */}
          <div className="md:w-1/2">
            {/* Главное фото */}
            <div className="mb-4">
              <img
                src={photos[0]}
                alt="Основное фото"
                className="w-full object-cover rounded-lg cursor-pointer"
                onClick={() => setSelectedPhoto(photos[0])}
              />
            </div>
            {/* <div className="mb-4">
              <img
                src={photos[1]}
                alt="Основное фото"
                className="w-full h-64 object-cover rounded-lg cursor-pointer"
                onClick={() => setSelectedPhoto(photos[1])}
              />
            </div> */}

            {/* Миниатюры фото */}
            {/* <div className="grid grid-cols-3 gap-2">
              {photos.slice(2).map((photo, index) => (
                <img
                  key={index}
                  src={photo}
                  alt={`Фото новости ${index + 2}`}
                  className="w-full h-20 object-cover rounded-lg cursor-pointer"
                  onClick={() => setSelectedPhoto(photo)}
                />
              ))}
            </div> */}
          </div>

          {/* Правая колонка с текстом */}
          <div className="p-6">
            <p className="text-gray-700 mb-4">
              Уважаемые коллеги! Предлагаем Вам ✨ раннее бронирование на
              лечебных курортах в Чехии — в Карловых Варах и Марианских Лазнях.
              Это очень выгодные условия для ваших клиентов.
            </p>
            <p className="text-gray-700 mb-4">
              ➡️ <strong>Условия акции:</strong> бронирование за 40-90 дней до
              начала заезда. Дополнительная комиссия от 5 до 15%.
            </p>
            <p className="text-gray-700 mb-4">
              📍 <strong>Карловы Вары:</strong> Olympic Palace 5*, Imperial 5*,
              Astoria 4*, комплекс отелей Bristol Royal 4*, Sanssoucci 4*,
              Humboldt 4*, Smetana 4*, Karlsbad Grande Madonna 4*
            </p>
            <p className="text-gray-700">
              📍 <strong>Марианские Лазне:</strong> сеть отелей ENSANA, Olympia
              4*, Grandhotel Nabokov 4*, Falkenstejner 5*
            </p>
          </div>
        </div>
      </div>

      {/* Модальное окно для фото */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="relative">
            <img
              src={selectedPhoto}
              alt="Просмотр фото"
              className="max-w-full max-h-screen rounded-lg"
            />
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-lg text-black"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FirstNews;
