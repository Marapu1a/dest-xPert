import React from 'react';
import { Link } from 'react-router-dom';

import egypt from '@assets/sections/destination/egypt.webp';
import tailand from '@assets/sections/destination/tailand.webp';
import kamboja from '@assets/sections/destination/kamboja.webp';
import vietnam from '@assets/sections/destination/vietnam.webp';
import china from '@assets/sections/destination/china.webp';
import maldives from '@assets/sections/destination/maldives.webp';

const destinations = [
  { name: 'Египет', link: '/egypt', image: egypt },
  { name: 'Таиланд', link: '/thailand', image: tailand },
  { name: 'Вьетнам', link: '/vietnam', image: kamboja },
  { name: 'Камбоджа', link: '/cambodia', image: vietnam },
  { name: 'Китай', link: '/china', image: china },
  { name: 'Мальдивы', link: '/maldives', image: maldives },
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
