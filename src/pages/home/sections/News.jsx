import React from 'react';
import { Link } from 'react-router-dom';
import newsPhoto from '@assets/sections/news/main_news/news1-3.jpg';

function News() {
  return (
    <div className="bg-white rounded p-6 mb-8">
      <h2 className="text-2xl font-bold mb-6">Новости</h2>
      <div className="flex flex-col md:flex-row">
        {/* Левый блок с фото и анонсом главной новости */}
        {/* Левый блок с фото и анонсом главной новости */}
        <div className="flex-1 md:w-2/3 relative mb-4 md:mb-0 group overflow-hidden rounded-lg">
          <div className="w-full overflow-hidden">
            <img
              src={newsPhoto}
              alt="Главная новость"
              className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          {/* Градиентный фон снизу */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent transition-all duration-300 flex flex-col justify-end p-4">
            <span className="text-white text-sm sm:text-shadow-md">
              6 января 2025
            </span>
            <h3 className="text-xl font-bold mb-2 text-white sm:text-shadow-md">
              <Link to="/news/main-news" className="hover:underline">
                Открытие нового корпуса отеля St. Joseph Royal Regent Spa Hotel
                в Карловых Вараx
              </Link>
            </h3>
            <p className="text-sm text-white sm:text-shadow-md">
              Успейте забронировать тур по выгодным ценам до конца января.
            </p>
          </div>
        </div>

        {/* Правый блок с четырьмя заголовками новостей */}
        <div className="flex-1 md:w-1/3 md:ml-4 flex flex-col justify-between">
          {[
            {
              date: '02.01.2025',
              link: '/news/1',
              title:
                'Агентствам: не забывайте про раннее бронирование и успейте получить дополнительную выгоду!',
            },
            {
              date: '14.02.2025',
              link: '/news/2',
              title: 'Специальное предложение от Spa Hotel Imperial 5*',
            },
            {
              date: '15.02.2025',
              link: '/news/3',
              title: '🌿 Workshop 2025: Чехия ближе, чем кажется! 🌿',
            },
            {
              date: '17.02.2025',
              link: '/news/4',
              title:
                '🚀 Европейский туроператор DestXpert Travel запускает онлайн-продажи! 🔥',
            },
          ].map((news, index) => (
            <div
              key={index}
              className={`border-b pb-4 mb-4 ${index === 3 ? 'border-none' : ''}`}
            >
              <span className="text-blue-300 text-sm">{news.date}</span>
              <h3 className="text-lg font-bold text-blue-500 hover:text-blue-400">
                <Link to={news.link}>{news.title}</Link>
              </h3>
            </div>
          ))}
          <Link
            to="/news"
            className="mt-4 text-center bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Показать все
          </Link>
        </div>
      </div>
    </div>
  );
}

export default News;
