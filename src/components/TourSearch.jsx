import React, { useState, useEffect, useRef } from 'react';
import {
  FaPlaneDeparture,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaTimes,
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const cities = ['Москва', 'Санкт-Петербург', 'Ташкент', 'Самарканд', 'Бухара'];
const countries = ['Италия', 'Франция', 'Испания', 'Египет', 'Турция'];

function TourSearch() {
  const [fromCity, setFromCity] = useState('');
  const [country, setCountry] = useState('');
  const [dates, setDates] = useState({ start: new Date(), end: new Date() });
  const [showCalendar, setShowCalendar] = useState(false);
  const [tourists, setTourists] = useState({ adults: 0, children: 0 });
  const [showTouristMenu, setShowTouristMenu] = useState(false);

  const calendarRef = useRef(null);
  const touristMenuRef = useRef(null);

  const handleDatesChange = (range) => {
    const today = new Date();
    const [start, end] = range;
    if (start < today || (end && end < today)) return;
    setDates({ start, end: end || start });
  };

  const handleOutsideClick = (e) => {
    if (calendarRef.current && !calendarRef.current.contains(e.target)) {
      setShowCalendar(false);
    }
    if (touristMenuRef.current && !touristMenuRef.current.contains(e.target)) {
      setShowTouristMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const isFormValid =
    fromCity &&
    country &&
    tourists.adults + tourists.children > 0 &&
    dates.start &&
    dates.end;

  return (
    <div className="bg-[#F6D242] shadow-2xl rounded-lg p-8 flex flex-col md:flex-row items-center justify-between md:space-x-4 space-y-10 md:space-y-0 relative -mt-8 mb-8 z-10">
      {/* From City */}
      <div className="relative w-full md:w-1/4">
        <label className="text-[#F04E98] text-sm absolute -top-3 left-3 bg-[#F6D242] rounded-full px-1">
          Откуда
        </label>
        <FaPlaneDeparture
          className="absolute left-3 top-4 text-[#F04E98]"
          size={20}
        />
        <select
          value={fromCity}
          onChange={(e) => setFromCity(e.target.value)}
          className="border border-[#F89E1B] rounded-lg py-2 pl-10 pr-3 w-full focus:outline-none focus:shadow-md text-gray-800 bg-white"
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

      {/* Country */}
      <div className="relative w-full md:w-1/4">
        <label className="text-[#F04E98] text-sm absolute -top-3 left-3 bg-[#F6D242] rounded-full px-1">
          Страна
        </label>
        <FaMapMarkerAlt
          className="absolute left-3 top-4 text-[#F04E98]"
          size={20}
        />
        <select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="border border-[#F89E1B] rounded-lg py-2 pl-10 pr-3 w-full focus:outline-none focus:shadow-md text-gray-800 bg-white"
        >
          <option value="" disabled hidden>
            Выберите страну
          </option>
          {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>

      {/* Dates */}
      <div className="relative w-full md:w-1/4">
        <label className="text-[#F04E98] text-sm absolute -top-3 left-3 bg-[#F6D242] px-1 rounded-full">
          Даты тура
        </label>
        <FaCalendarAlt
          className="absolute left-3 top-4 text-[#F04E98]"
          size={20}
        />
        <button
          type="button"
          onClick={() => setShowCalendar(true)}
          className="border border-[#F89E1B] rounded-lg py-2 pl-10 pr-3 w-full focus:outline-none focus:shadow-md text-gray-800 bg-white"
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
              minDate={new Date()}
            />
            <button
              type="button"
              onClick={() => setShowCalendar(false)}
              className="mt-1 bg-[#F89E1B] text-[#F04E98] py-2 px-4 rounded-lg shadow-md hover:bg-white hover:text-[#F89E1B]"
            >
              Готово
            </button>
          </motion.div>
        )}
      </div>

      {/* Tourists */}
      <div className="relative w-full md:w-1/4" ref={touristMenuRef}>
        <label className="text-[#F04E98] text-sm absolute -top-3 left-3 bg-[#F6D242] px-1 rounded-full">
          Туристы
        </label>
        <button
          type="button"
          onClick={() => setShowTouristMenu(!showTouristMenu)}
          className="border border-[#F89E1B] rounded-lg py-2 pl-3 pr-3 w-full focus:outline-none focus:shadow-md text-gray-800 bg-white"
        >
          {`${tourists.adults} взрослых, ${tourists.children} детей`}
        </button>
        {showTouristMenu && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full mt-2 bg-white shadow-md rounded-lg p-4 space-y-4"
          >
            <div className="flex justify-between items-center">
              <button
                onClick={() =>
                  setTourists((prev) => ({
                    ...prev,
                    adults: Math.max(0, prev.adults - 1),
                  }))
                }
                className="bg-gray-300 rounded-lg px-4 py-1 text-gray-800 hover:bg-gray-400"
              >
                -
              </button>
              <span>{`${tourists.adults} взрослых`}</span>
              <button
                onClick={() =>
                  setTourists((prev) => ({
                    ...prev,
                    adults: prev.adults + 1,
                  }))
                }
                className="bg-[#F89E1B] rounded-lg px-4 py-1 text-gray-800 hover:bg-[#F6D242]"
              >
                +
              </button>
            </div>
            <div className="flex justify-between items-center">
              <button
                onClick={() =>
                  setTourists((prev) => ({
                    ...prev,
                    children: Math.max(0, prev.children - 1),
                  }))
                }
                className="bg-gray-300 rounded-lg px-4 py-1 text-gray-800 hover:bg-gray-400"
              >
                -
              </button>
              <span>{`${tourists.children} детей`}</span>
              <button
                onClick={() =>
                  setTourists((prev) => ({
                    ...prev,
                    children: prev.children + 1,
                  }))
                }
                className="bg-[#F89E1B] rounded-lg px-4 py-1 text-gray-800 hover:bg-[#F6D242]"
              >
                +
              </button>
            </div>
          </motion.div>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={!isFormValid}
        className={`text-sm font-bold py-2 px-4 rounded-3xl shadow-lg focus:outline-none transition-colors ${
          isFormValid
            ? 'bg-[#F89E1B] text-[#F04E98] hover:bg-white hover:text-[#F89E1B]'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
      >
        Найти
      </button>
    </div>
  );
}

export default TourSearch;
