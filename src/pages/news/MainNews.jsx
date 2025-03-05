import React, { useState } from 'react';
import newsPhoto1 from '@assets/sections/news/main_news/news1-1.webp';
import newsPhoto2 from '@assets/sections/news/main_news/news1-3.webp';
import newsPhoto3 from '@assets/sections/news/main_news/news1-2.webp';
import newsPhoto4 from '@assets/sections/news/main_news/news1-4.webp';
import newsPhoto5 from '@assets/sections/news/main_news/news1-5.webp';

const MainNews = () => {
  const photos = [newsPhoto1, newsPhoto2, newsPhoto3, newsPhoto4, newsPhoto5];
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <div className="container mx-auto">
      <div className="bg-white rounded p-6 mb-8">
        <h1 className="text-3xl font-bold mb-6">
          ✨ Открытие нового корпуса отеля St. Joseph Royal Regent Spa Hotel в
          Карловых Варах
        </h1>

        <span className="text-gray-400 text-sm mb-2">11 февраля 2025</span>

        {/* Контейнер для изображений и текста */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Левая колонка с изображениями */}
          <div className="md:w-1/2">
            {/* Главное фото */}
            <div className="mb-4">
              <img
                src={photos[0]}
                alt="Основное фото"
                className="w-full h-64 object-cover rounded-lg cursor-pointer"
                onClick={() => setSelectedPhoto(photos[0])}
              />
            </div>
            <div className="mb-4">
              <img
                src={photos[1]}
                alt="Основное фото"
                className="w-full h-64 object-cover rounded-lg cursor-pointer"
                onClick={() => setSelectedPhoto(photos[1])}
              />
            </div>

            {/* Миниатюры фото */}
            <div className="grid grid-cols-3 gap-2">
              {photos.slice(2).map((photo, index) => (
                <img
                  key={index}
                  src={photo}
                  alt={`Фото новости ${index + 2}`}
                  className="w-full h-20 object-cover rounded-lg cursor-pointer"
                  onClick={() => setSelectedPhoto(photo)}
                />
              ))}
            </div>
          </div>

          {/* Правая колонка с текстом */}
          <div className="md:w-1/2 prose prose-sm sm:prose lg:prose-lg max-w-none">
            <p className="my-5">Мы рады сообщить вам отличную новость! ☺️</p>
            <p className="my-5">
              В июле 2025 года в знаменитом курортном городе Карловы Вары
              состоится открытие новой части отеля St. Joseph Royal Regent Spa
              Hotel — ST. JOSEPH TOWER. В ST. JOSEPH TOWER разместятся 31 новых
              номера четырех категорий 💫: PREMIUM / JUNIOR SUITE city view /
              ROYAL SUITE / JUNIOR SUITE.
            </p>
            <p className="my-5">
              🧖 Приватный велнес и удобное соединение между зданиями. Гости
              смогут насладиться уединенным и эксклюзивным отдыхом 🧘 в частном
              велнес-центре, доступном только для постояльцев нового корпуса.
              Корпуса соединены отапливаемым внутренним коридором,
              спроектированным с учетом комфорта гостей в любое время года.
            </p>
            <p>
              ➡️ Бронируйте размещение заранее и дарите себе незабываемые
              впечатления в St. Joseph Royal Regent Spa Hotel.
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

export default MainNews;
