import React from 'react';
import { Link } from 'react-router-dom';

import italy from '@assets/sections/destination/италия.webp';
import carl_var from '@assets/sections/destination/карловы_вары.webp';
import slovenia from '@assets/sections/destination/словения.webp';
import france from '@assets/sections/destination/франция.webp';
import cheviz from '@assets/sections/destination/хевиз.webp';
import switz from '@assets/sections/destination/швейцария.webp';

const destinations = [
  { name: 'Италия', link: '#', image: italy },
  { name: 'Карловы Вары', link: '#', image: carl_var },
  { name: 'Франция', link: '#', image: france },
  { name: 'Словения', link: '#', image: slovenia },
  { name: 'Хевиз', link: '#', image: cheviz },
  { name: 'Швейцария', link: '#', image: switz },
];

const SeasonalDestinations = () => {
  return (
    <div className="bg-white p-6">
      <h2 className="inline text-2xl font-bold">
        Популярные страны и направления
      </h2>
      <Link to={'/destinations'}>
        <button className="px-4 py-2 rounded-full bg-[#F5F7FA] text-[#252630] text-xs font-medium shadow-sm">
          Все страны и направления
        </button>
      </Link>
      <div className="flex mt-6 gap-4">
        {/* Left Block */}
        <div className="flex flex-col gap-4 w-1/2">
          <div className="flex gap-4">
            {destinations.slice(0, 2).map((dest) => (
              <Link
                key={dest.name}
                to={dest.link}
                className="relative flex-1 h-32 rounded-lg overflow-hidden group"
              >
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white font-bold text-lg text-shadow-md">
                    {dest.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <Link
            to={destinations[2].link}
            onClick={() => {
              sessionStorage.clear(); // Очищаем сохраненные скролл-позиции
              window.scrollTo(0, 0); // Сбрасываем в начало страницы
            }}
            className="relative h-64 rounded-lg overflow-hidden group"
          >
            <img
              src={destinations[2].image}
              alt={destinations[2].name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-white font-bold text-lg text-shadow-md">
                {destinations[2].name}
              </span>
            </div>
          </Link>
        </div>
        {/* Right Block */}
        <div className="flex flex-col gap-4 w-1/2">
          <Link
            to={destinations[3].link}
            className="relative h-64 rounded-lg overflow-hidden group"
          >
            <img
              src={destinations[3].image}
              alt={destinations[3].name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-white font-bold text-lg text-shadow-md">
                {destinations[3].name}
              </span>
            </div>
          </Link>
          <div className="flex gap-4">
            {destinations.slice(4).map((dest) => (
              <Link
                key={dest.name}
                to={dest.link}
                className="relative flex-1 h-32 rounded-lg overflow-hidden group"
              >
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white font-bold text-lg text-shadow-md">
                    {dest.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeasonalDestinations;
