import React, { useState, useEffect, useRef } from 'react';
import {
  FaPlaneDeparture,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUser,
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const cities = [
  'Ташкент',
  'Самарканд',
  'Бухара',
  'Фергана',
  'Наманган',
  'Москва',
  'Санкт-Петербург',
];

function TourSearch() {
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [dates, setDates] = useState({ start: new Date(), end: new Date() });
  const [showCalendar, setShowCalendar] = useState(false);
  const [passengers, setPassengers] = useState({ adults: 1, children: 0 });
  const [showPassengersMenu, setShowPassengersMenu] = useState(false);
  const calendarRef = useRef(null);

  const handleDatesChange = (range) => {
    const [start, end] = range;
    setDates({ start, end: end || start });
  };

  const handleOutsideClick = (e) => {
    if (calendarRef.current && !calendarRef.current.contains(e.target)) {
      setShowCalendar(false);
    }
  };

  useEffect(() => {
    if (showCalendar) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [showCalendar]);

  return (
    <div className="bg-white shadow-2xl rounded-lg p-8 flex flex-col md:flex-row items-center justify-between md:space-x-6 space-y-6 md:space-y-0 relative -mt-8 mb-8 z-10">
      {/* From City */}
      <div className="relative w-full md:w-1/5">
        <label className="text-gray-500 text-sm absolute -top-3 left-3 bg-white px-1">
          Откуда
        </label>
        <FaPlaneDeparture
          className="absolute left-3 top-4 text-blue-600"
          size={20}
        />
        <select
          value={fromCity}
          onChange={(e) => setFromCity(e.target.value)}
          className="border rounded-lg py-2 pl-10 pr-3 w-full focus:outline-none focus:shadow-md"
        >
          <option value="" disabled hidden>
            Выберите город
          </option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>

      {/* To City */}
      <div className="relative w-full md:w-1/5">
        <label className="text-gray-500 text-sm absolute -top-3 left-3 bg-white px-1">
          Куда
        </label>
        <FaMapMarkerAlt
          className="absolute left-3 top-4 text-blue-600"
          size={20}
        />
        <select
          value={toCity}
          onChange={(e) => setToCity(e.target.value)}
          className="border rounded-lg py-2 pl-10 pr-3 w-full focus:outline-none focus:shadow-md"
        >
          <option value="" disabled hidden>
            Выберите город
          </option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>

      {/* Dates */}
      <div className="relative w-full md:w-1/5">
        <label className="text-gray-500 text-sm absolute -top-3 left-3 bg-white px-1">
          Даты тура
        </label>
        <FaCalendarAlt
          className="absolute left-3 top-4 text-blue-600"
          size={20}
        />
        <button
          type="button"
          onClick={() => setShowCalendar(true)}
          className="border rounded-lg py-2 pl-10 pr-3 w-full focus:outline-none focus:shadow-md"
        >
          {`${dates.start.toLocaleDateString('ru-RU', { day: '2-digit', month: 'short' })} - ${dates.end.toLocaleDateString('ru-RU', { day: '2-digit', month: 'short' })}`}
        </button>
        {showCalendar && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full mt-2 bg-white shadow-md rounded-lg p-4"
            ref={calendarRef}
          >
            <Calendar
              selectRange
              onChange={handleDatesChange}
              value={[dates.start, dates.end]}
              className="rounded-lg shadow-lg"
            />
            <button
              type="button"
              onClick={() => setShowCalendar(false)}
              className="mt-1 bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700"
            >
              Готово
            </button>
          </motion.div>
        )}
      </div>

      {/* Passengers */}
      <div className="relative w-full md:w-1/5">
        <label className="text-gray-500 text-sm absolute -top-3 left-3 bg-white px-1">
          Туристы
        </label>
        <FaUser className="absolute left-3 top-4 text-blue-600" size={20} />
        <button
          type="button"
          onClick={() => setShowPassengersMenu(!showPassengersMenu)}
          className="border rounded-lg py-2 pl-10 pr-3 w-full focus:outline-none focus:shadow-md"
        >
          {`${passengers.adults} взрослых, ${passengers.children} детей`}
        </button>
        {showPassengersMenu && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full mt-2 bg-white shadow-md rounded-lg p-4"
          >
            <div className="flex justify-between items-center mb-2">
              <span>Взрослые</span>
              <input
                type="number"
                min="1"
                max="10"
                value={passengers.adults}
                onChange={(e) =>
                  setPassengers({
                    ...passengers,
                    adults: Math.max(1, Math.min(10, +e.target.value)),
                  })
                }
                className="w-12 border rounded text-center"
              />
            </div>
            <div className="flex justify-between items-center">
              <span>Дети</span>
              <input
                type="number"
                min="0"
                max="10"
                value={passengers.children}
                onChange={(e) =>
                  setPassengers({
                    ...passengers,
                    children: Math.max(0, Math.min(10, +e.target.value)),
                  })
                }
                className="w-12 border rounded text-center"
              />
            </div>
          </motion.div>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-blue-600 text-white font-bold py-3 px-6 rounded-3xl shadow-lg hover:bg-blue-700"
      >
        Подобрать тур
      </button>
    </div>
  );
}

export default TourSearch;
