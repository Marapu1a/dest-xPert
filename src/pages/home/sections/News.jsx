import React from 'react';
import { Link } from 'react-router-dom';
import newsPhoto from '@assets/sections/news/main_news/news1-3.jpg';

function News() {
  return (
    <div className="bg-white rounded p-6 mb-8">
      <h2 className="text-2xl font-bold mb-6">Новости</h2>
      <div className="flex flex-col md:flex-row">
        {/* Левый блок с фото и анонсом главной новости */}
        <div className="flex-1 md:w-2/3 relative mb-4 md:mb-0 group overflow-hidden rounded-lg">
          <div className="w-full overflow-hidden">
            <img
              src={newsPhoto}
              alt="Главная новость"
              className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100">
            <span className="text-white text-sm mb-2">6 января 2025</span>
            <h3 className="text-white text-xl font-bold mb-2">
              <Link to="/news/main-news" className="hover:underline">
                Открытие нового корпуса отеля St. Joseph Royal Regent Spa Hotel
                в Карловых Вараx
              </Link>
            </h3>
            <p className="text-gray-300 text-sm">
              Успейте забронировать тур по выгодным ценам до конца января.
            </p>
          </div>
        </div>

        {/* Правый блок с тремя заголовками новостей */}
        <div className="flex-1 md:w-1/3 md:ml-4 flex flex-col justify-between">
          <div className="border-b pb-4 mb-4">
            <span className="text-blue-300 text-sm">02.01.2025</span>
            <h3 className="text-lg font-bold text-blue-500 hover:text-blue-400">
              <Link to="/news/1">
                Агентствам : не забывайте про раннее бронирование и успейте
                получить дополнительную выгоду!
              </Link>
            </h3>
          </div>
          <div className="border-b pb-4 mb-4">
            <span className="text-blue-300 text-sm">14.02.2025</span>
            <h3 className="text-lg font-bold text-blue-500 hover:text-blue-400">
              <Link to="/news/2">
                Специальное предложение от Spa Hotel Imperial 5*
              </Link>
            </h3>
          </div>
          <div>
            <span className="text-blue-300 text-sm">15.02.2025</span>
            <h3 className="text-lg font-bold text-blue-500 hover:text-blue-400">
              <Link to="/news/3">
                🌿 Workshop 2025: Чехия ближе, чем кажется! 🌿
              </Link>
            </h3>
          </div>
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
