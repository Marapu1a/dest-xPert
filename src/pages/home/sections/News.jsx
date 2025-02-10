import React from 'react';
import { Link } from 'react-router-dom';
import newsPhoto from '@assets/sections/news/news1.jpg';

function News() {
  return (
    <div className="bg-white rounded p-6 mb-8">
      <h2 className="text-2xl font-bold mb-6">Новости</h2>
      <div className="flex flex-col md:flex-row">
        {/* Левый блок с фото */}
        <div className="flex-1 md:w-1/3 mb-4 md:mb-0">
          <img
            src={newsPhoto}
            alt="News"
            className="rounded-lg shadow-md w-full h-full object-cover"
          />
        </div>
        {/* Правый блок с тремя новостями */}
        <div className="flex-1 md:w-2/3 md:ml-4 flex flex-col justify-between">
          <div className="border-b pb-4 mb-4">
            <span className="text-blue-300 text-sm">6 января 2025</span>
            <h3 className="text-lg font-bold text-blue-500 hover:text-blue-400">
              <Link to="/news/1">Ранее бронирование Чехия</Link>
            </h3>
            <div className="p-6">
              <p className="text-gray-700 mb-4">
                Уважаемые коллеги! Предлагаем Вам ✨ раннее бронирование на
                лечебных курортах в Чехии — в Карловых Варах и Марианских
                Лазнях. Это очень выгодные условия для ваших клиентов.
              </p>
              <p className="text-gray-700 mb-4">
                ➡️ <strong>Условия акции:</strong> бронирование за 40-90 дней до
                начала заезда. Дополнительная комиссия от 5 до 15%.
              </p>
              <p className="text-gray-700 mb-4">
                📍 <strong>Карловы Вары:</strong> Olympic Palace 5*, Imperial
                5*, Astoria 4*, комплекс отелей Bristol Royal 4*, Sanssoucci 4*,
                Humboldt 4*, Smetana 4*, Karlsbad Grande Madonna 4*
              </p>
              <p className="text-gray-700">
                📍 <strong>Марианские Лазне:</strong> сеть отелей ENSANA,
                Olympia 4*, Grandhotel Nabokov 4*, Falkenstejner 5*
              </p>
            </div>
          </div>
          <div className="border-b pb-4 mb-4">
            <span className="text-blue-300 text-sm">02.01.2025</span>
            <h3 className="text-lg font-bold text-blue-500 hover:text-blue-400">
              <Link to="/news/2">Заголовок новости 2</Link>
            </h3>
          </div>
          <div>
            <span className="text-blue-300 text-sm">03.01.2025</span>
            <h3 className="text-lg font-bold text-blue-500 hover:text-blue-400">
              <Link to="/news/3">Заголовок новости 3</Link>
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
