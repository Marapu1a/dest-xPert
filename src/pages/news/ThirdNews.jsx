import React, { useState } from 'react';
import newsPhoto1 from '@assets/sections/news/third_news/news4-1.webp';

const ThirdNews = () => {
  const photos = [newsPhoto1];
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <div className="container mx-auto">
      <div className="bg-white rounded p-6 mb-8">
        <h1 className="text-3xl font-bold mb-6">
          Специальное предложение от Spa Hotel Imperial 5*
        </h1>

        <span className="text-gray-400 text-sm mb-2">15 февраля 2025</span>

        {/* Контейнер для изображений и текста */}
        <div className="flex flex-col md:flex-col gap-6">
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
          <div className="p-6 md:w-2/3">
            <p className="text-gray-700 mb-4">
              12 февраля в отеле <strong>Hyatt Regency Tashkent</strong> прошел
              яркий и продуктивный воркшоп{' '}
              <strong>«Популярные СПА-курорты Чехии»</strong>, организованный{' '}
              <strong>DestXpert Travel</strong>.
            </p>

            <p className="text-gray-700 mb-4">
              ✨ Официальное открытие мероприятия провел Чрезвычайный и
              Полномочный Посол Чешской Республики{' '}
              <strong>Лубомир Фрэборт</strong>, подчеркнув важность
              сотрудничества в сфере медицинского и оздоровительного туризма.
            </p>

            <p className="text-gray-700 mb-4">
              💆‍♀️ Гостям воркшопа представили лучшие лечебные курорты Чехии:
              <br />
              🏨 Отели <strong>Карловых Вар, Марианских Лазней</strong> и{' '}
              <strong>СПА-курорта Теплице</strong> презентовали уникальные
              оздоровительные программы, минеральные источники и возможности
              лечения.
            </p>

            <p className="text-gray-700 mb-4">
              🤝 В формате B2B-встреч турагенты могли пообщаться с отельерами,
              задать вопросы и наладить сотрудничество. Партнеры также
              подготовили викторину с ценными призами!
            </p>

            <p className="text-gray-700 mb-4">
              🎁 <strong>Победители получили:</strong>
              <br />
              🏨 Бесплатные ночи в отелях Чехии
              <br />
              🎁 Подарки и сувениры
              <br />
              ✈️ Авиабилет от <strong>Qanot Sharq</strong>
            </p>

            <p className="text-gray-700 mb-4">
              Благодарим всех участников! Теперь с новыми знаниями бронировать
              туры на чешские СПА-курорты станет еще проще. 💙
            </p>

            <p className="text-gray-700">
              📍 Фотоотчет с мероприятия можно посмотреть по ссылке:
              <a
                href="https://clck.ru/3GQX6q"
                className="text-blue-600 underline"
              >
                https://clck.ru/3GQX6q
              </a>
            </p>

            <p className="text-gray-700">
              📍 Ждем вас на следующих мероприятиях от{' '}
              <strong>DestXpert</strong>!
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
