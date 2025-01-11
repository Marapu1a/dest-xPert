import React from 'react';
import { Link } from 'react-router-dom';
import newsPhoto from '@assets/sections/news-photo.webp';

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
            <span className="text-gray-500 text-sm">01.01.2025</span>
            <h3 className="text-lg font-bold text-blue-500 hover:underline">
              <Link to="/news/1">Заголовок новости 1</Link>
            </h3>
          </div>
          <div className="border-b pb-4 mb-4">
            <span className="text-gray-500 text-sm">02.01.2025</span>
            <h3 className="text-lg font-bold text-blue-500 hover:underline">
              <Link to="/news/2">Заголовок новости 2</Link>
            </h3>
          </div>
          <div>
            <span className="text-gray-500 text-sm">03.01.2025</span>
            <h3 className="text-lg font-bold text-blue-500 hover:underline">
              <Link to="/news/3">Заголовок новости 3</Link>
            </h3>
          </div>
          <Link
            to="/news"
            className="mt-4 text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Показать все
          </Link>
        </div>
      </div>
    </div>
  );
}

export default News;
