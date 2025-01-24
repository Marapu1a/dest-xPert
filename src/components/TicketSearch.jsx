import React, { useState, useEffect, useRef } from 'react';
import {
  FaPlaneDeparture,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaTimes,
  FaExchangeAlt,
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

const childOptions = [
  { type: 'children', label: 'С 2 до 12 лет' },
  { type: 'infantsWithSeat', label: 'До 2 лет с местом' },
  { type: 'infantsNoSeat', label: 'До 2 лет без места' },
];

function TicketSearch() {
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [dates, setDates] = useState({ start: new Date(), end: new Date() });
  const [isOneWay, setIsOneWay] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [passengers, setPassengers] = useState({
    adults: 0,
    childrenList: [],
  });
  const [showChildOptions, setShowChildOptions] = useState(false);
  const [travelClass, setTravelClass] = useState('economy');
  const [showPassengersMenu, setShowPassengersMenu] = useState(false);
  const calendarRef = useRef(null);
  const passengersMenuRef = useRef(null);

  const handleDatesChange = (range) => {
    const today = new Date();
    if (isOneWay) {
      if (range < today) return;
      setDates({ start: range, end: range });
    } else {
      const [start, end] = range;
      if (start < today || (end && end < today)) return;
      setDates({ start, end: end || start });
    }
  };

  const handleOutsideClick = (e) => {
    if (calendarRef.current && !calendarRef.current.contains(e.target)) {
      setShowCalendar(false);
    }
    if (
      passengersMenuRef.current &&
      !passengersMenuRef.current.contains(e.target)
    ) {
      setShowPassengersMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const addChildOption = (type) => {
    setPassengers((prev) => ({
      ...prev,
      childrenList: [
        ...prev.childrenList,
        { type, label: childOptions.find((opt) => opt.type === type).label },
      ],
    }));
    setShowChildOptions(false);
  };

  const removeChildOption = (index) => {
    setPassengers((prev) => ({
      ...prev,
      childrenList: prev.childrenList.filter((_, i) => i !== index),
    }));
  };

  const totalPassengers = passengers.adults + passengers.childrenList.length;

  const isFormValid =
    fromCity &&
    toCity &&
    totalPassengers > 0 &&
    dates.start &&
    (!isOneWay || dates.end);

  const swapCities = () => {
    setFromCity(toCity);
    setToCity(fromCity);
  };

  return (
    <div className="bg-gray-200 shadow-2xl rounded-lg p-8 flex flex-col md:flex-row items-center justify-between md:space-x-4 space-y-10 md:space-y-0 relative -mt-8 mb-8 z-10">
      {/* From City */}
      <div className="relative w-full md:w-1/4">
        <label className="text-gray-800 text-sm absolute -top-3 left-3 bg-gray-200 rounded-full px-1">
          Город вылета
        </label>
        <FaPlaneDeparture
          className="absolute left-3 top-4 text-gray-800"
          size={20}
        />
        <select
          value={fromCity}
          onChange={(e) => setFromCity(e.target.value)}
          className="border border-blue-300 rounded-lg py-2 pl-10 pr-3 w-full focus:outline-none focus:shadow-md text-gray-800 bg-white"
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

      {/* Swap Button */}
      <div className="flex items-center justify-center swap-button-fix">
        <button
          onClick={swapCities}
          className="bg-blue-400 p-2 rounded-full shadow-md hover:bg-blue-500 focus:outline-none"
          aria-label="Swap cities"
        >
          <FaExchangeAlt className="text-gray-800" size={20} />
        </button>
      </div>

      {/* To City */}
      <div className="relative w-full md:w-1/4 swap-button-fix">
        <label className="text-gray-800 text-sm absolute -top-3 left-3 bg-gray-200 px-1 rounded-full">
          Куда
        </label>
        <FaMapMarkerAlt
          className="absolute left-3 top-4 text-gray-800"
          size={20}
        />
        <select
          value={toCity}
          onChange={(e) => setToCity(e.target.value)}
          className="border border-blue-300 rounded-lg py-2 pl-10 pr-3 w-full focus:outline-none focus:shadow-md text-gray-800 bg-white"
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
      <div className="relative w-full md:w-1/4">
        <label className="text-gray-800 text-sm absolute -top-3 left-3 bg-gray-200 px-1 rounded-full">
          Даты
        </label>
        <FaCalendarAlt
          className="absolute left-3 top-4 text-gray-800"
          size={20}
        />
        <button
          type="button"
          onClick={() => setShowCalendar(true)}
          className="border border-blue-300 rounded-lg py-2 pl-10 pr-3 w-full focus:outline-none focus:shadow-md text-gray-800 bg-white"
        >
          {isOneWay
            ? dates.start.toLocaleDateString('ru-RU', {
                day: '2-digit',
                month: 'short',
              })
            : `${dates.start.toLocaleDateString('ru-RU', { day: '2-digit', month: 'short' })} - ${dates.end.toLocaleDateString('ru-RU', { day: '2-digit', month: 'short' })}`}
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
              selectRange={!isOneWay}
              onChange={handleDatesChange}
              value={isOneWay ? dates.start : [dates.start, dates.end]}
              className="rounded-lg shadow-lg"
              minDate={new Date()}
            />
            <button
              type="button"
              onClick={() => setShowCalendar(false)}
              className="mt-1 bg-blue-400 text-gray-800 py-2 px-4 rounded-lg shadow-md hover:bg-white hover:text-blue-300"
            >
              Готово
            </button>
          </motion.div>
        )}
        <div className="absolute md:-bottom-6 left-0">
          <label className="inline-flex items-center text-sm">
            <input
              type="checkbox"
              className="form-checkbox text-blue-300 focus:ring-yellow-400"
              checked={isOneWay}
              onChange={() => setIsOneWay(!isOneWay)}
            />
            <span className="ml-2 text-gray-800">В одну сторону</span>
          </label>
        </div>
      </div>

      {/* Passengers and Travel Class */}
      <div className="relative w-full md:w-1/4" ref={passengersMenuRef}>
        <label className="text-gray-800 text-sm absolute -top-3 left-3 bg-gray-200 px-1 rounded-full">
          Пассажиры и класс
        </label>
        <button
          type="button"
          onClick={() => setShowPassengersMenu(!showPassengersMenu)}
          className="border border-blue-300 rounded-lg py-2 pl-3 pr-3 w-full focus:outline-none focus:shadow-md text-gray-800 bg-white"
        >
          {`${totalPassengers} ${
            totalPassengers === 1 ? 'пассажир' : 'пассажиров'
          }, ${
            travelClass === 'economy'
              ? 'Эконом'
              : travelClass === 'business'
                ? 'Бизнес'
                : 'Первый'
          }`}
        </button>
        {showPassengersMenu && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full mt-2 bg-white shadow-md rounded-lg p-4 space-y-4"
          >
            <div className="flex justify-between items-center">
              <button
                onClick={() =>
                  setPassengers((prev) => ({
                    ...prev,
                    adults: Math.max(0, prev.adults - 1),
                  }))
                }
                className="bg-gray-300 rounded-lg px-4 py-1 text-gray-800 hover:bg-gray-400"
              >
                -
              </button>
              <span>
                {passengers.adults === 1
                  ? `${passengers.adults} Взрослый`
                  : `${passengers.adults} Взрослых`}
              </span>
              <button
                onClick={() =>
                  setPassengers((prev) => ({
                    ...prev,
                    adults: prev.adults + 1,
                  }))
                }
                className="bg-blue-400 rounded-lg px-4 py-1 text-gray-800 hover:bg-blue-500"
              >
                +
              </button>
            </div>
            <div className="space-y-2">
              <button
                onClick={() => setShowChildOptions(!showChildOptions)}
                className="bg-blue-400 rounded-lg px-4 py-1 text-gray-800 hover:bg-blue-500 w-full"
              >
                Добавить ребёнка
              </button>
              {showChildOptions && (
                <div className="bg-gray-100 rounded-lg shadow-md p-2">
                  {childOptions.map((option) => (
                    <button
                      key={option.type}
                      onClick={() => addChildOption(option.type)}
                      className="block w-full text-left py-1 px-2 hover:bg-blue-200 rounded-lg"
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
              {passengers.childrenList.map((child, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center bg-blue-100 rounded-lg px-3 py-1"
                >
                  <span>{child.label}</span>
                  <button
                    onClick={() => removeChildOption(index)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <FaTimes />
                  </button>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setTravelClass('economy')}
                className={`${
                  travelClass === 'economy' ? 'bg-blue-400' : 'bg-gray-100'
                } rounded-lg px-4 py-2 text-gray-800 hover:bg-blue-500`}
              >
                Эконом
              </button>
              <button
                onClick={() => setTravelClass('premium')}
                className={`${
                  travelClass === 'premium' ? 'bg-blue-400' : 'bg-gray-100'
                } rounded-lg px-4 py-2 text-gray-800 hover:bg-blue-500`}
              >
                Премиум
              </button>
              <button
                onClick={() => setTravelClass('business')}
                className={`${
                  travelClass === 'business' ? 'bg-blue-400' : 'bg-gray-100'
                } rounded-lg px-4 py-2 text-gray-800 hover:bg-blue-500`}
              >
                Бизнес
              </button>
              <button
                onClick={() => setTravelClass('first')}
                className={`${
                  travelClass === 'first' ? 'bg-blue-400' : 'bg-gray-100'
                } rounded-lg px-4 py-2 text-gray-800 hover:bg-blue-500`}
              >
                Первый
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
            ? 'bg-blue-400 text-blue-500 hover:bg-white hover:text-blue-400'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
      >
        Найти
      </button>
    </div>
  );
}

export default TicketSearch;
