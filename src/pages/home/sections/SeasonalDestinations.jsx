import React from 'react';
import { Link } from 'react-router-dom';

import egypt from '@assets/sections/egypt.webp';
import tailand from '@assets/sections/tailand.webp';
import kamboja from '@assets/sections/kamboja.webp';
import vietnam from '@assets/sections/vietnam.webp';
import china from '@assets/sections/china.webp';
import maldives from '@assets/sections/maldives.webp';

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
    <div className="bg-gray-100 p-6">
      <h2 className="text-2xl font-bold mb-4">Сезонные направления</h2>
      <div className="flex gap-4">
        {/* Left Block */}
        <div className="flex flex-col gap-4 w-1/2">
          <div className="flex gap-4">
            {destinations.slice(0, 2).map((dest) => (
              <Link
                key={dest.name}
                to={dest.link}
                className="relative flex-1 h-32 rounded-lg overflow-hidden hover:scale-105 transition-transform"
              >
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 flex items-center justify-center">
                  <span className="text-white font-bold text-lg text-shadow-md">
                    {dest.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <Link
            to={destinations[2].link}
            className="relative h-64 rounded-lg overflow-hidden hover:scale-105 transition-transform"
          >
            <img
              src={destinations[2].image}
              alt={destinations[2].name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 flex items-center justify-center">
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
            className="relative h-64 rounded-lg overflow-hidden hover:scale-105 transition-transform"
          >
            <img
              src={destinations[3].image}
              alt={destinations[3].name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 flex items-center justify-center">
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
                className="relative flex-1 h-32 rounded-lg overflow-hidden hover:scale-105 transition-transform"
              >
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 flex items-center justify-center">
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
