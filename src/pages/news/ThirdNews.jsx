import React, { useState } from 'react';
import newsPhoto1 from '@assets/sections/news/first_news/news1-1.jpg';

const ThirdNews = () => {
  const photos = [newsPhoto1];
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <div className="container mx-auto">
      <div className="bg-white rounded p-6 mb-8">
        <h1 className="text-3xl font-bold mb-6">
          Специальное предложение от Spa Hotel Imperial 5*
        </h1>

        <span className="text-gray-400 text-sm mb-2">14 февраля 2025</span>

        {/* Контейнер для изображений и текста */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Левая колонка с изображениями */}
          <div className="md:w-1/2 hidden">
            {/* Главное фото */}
            {/* <div className="mb-4">
              <img
                src={photos[0]}
                alt="Основное фото"
                className="w-full h-64 object-cover rounded-lg cursor-pointer"
                onClick={() => setSelectedPhoto(photos[0])}
              />
            </div> */}
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
              • <strong>Распространяется</strong> на новые бронирования,
              оформленные с сегодняшнего дня до конца апреля.
              <br />• <strong>Особые условия:</strong> бронируйте 14 ночей —
              оплачивайте всего 12!
              <br />• Действует на все курортные лечебные программы:{' '}
              <strong>Classic, Premium, Intensive, Fit&Slim</strong>.<br />•{' '}
              <strong>Можно комбинировать</strong> с non-refundable или early
              bird скидкой.
            </p>

            <p className="text-gray-700 mb-4">
              ✅ <strong>Бронируйте и экономьте:</strong>
              <br />
              — 14 ночей — оплачивайте всего 12
              <br />
              — 21 ночь — оплачивайте всего 18
              <br />— 28 ночей — оплачивайте всего 24
            </p>

            <p className="text-gray-700 mb-4">
              <strong>Обновления:</strong>
              <br />• Программа «PREMIUM» теперь включает{' '}
              <strong>18 процедур вместо 15</strong> для всех новых
              бронирований.
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

export default ThirdNews;
