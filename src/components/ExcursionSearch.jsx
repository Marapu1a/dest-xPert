import React, { useState, useRef } from 'react';
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function ExcursionSearch() {
  const [destination, setDestination] = useState('');
  const [dates, setDates] = useState({ start: new Date(), end: new Date() });
  const [showCalendar, setShowCalendar] = useState(false);

  const calendarRef = useRef(null);

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
  };

  React.useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const isFormValid = destination && dates.start && dates.end;

  return (
    <div className="bg-blue-100 shadow-2xl rounded-lg p-8 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 -mt-8 relative">
      {/* Destination */}
      <div className="relative w-full md:flex-1">
        <label className="text-blue-500 text-sm absolute -top-3 left-3 bg-blue-100 rounded-full px-1">
          Куда
        </label>
        <FaMapMarkerAlt
          className="absolute left-3 top-4 text-blue-500"
          size={20}
        />
        <input
          type="text"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          placeholder="Страна, город или достопримечательность"
          className="border border-blue-300 rounded-lg py-2 pl-10 pr-3 w-full focus:outline-none focus:shadow-md text-gray-800 bg-white"
        />
      </div>

      {/* Dates */}
      <div className="relative w-full md:w-1/3">
        <label className="text-blue-500 text-sm absolute -top-3 left-3 bg-blue-100 px-1 rounded-full">
          Дата проведения экскурсий
        </label>
        <FaCalendarAlt
          className="absolute left-3 top-4 text-blue-500"
          size={20}
        />
        <button
          type="button"
          onClick={() => setShowCalendar(true)}
          className="border border-blue-300 rounded-lg py-2 pl-10 pr-3 w-full focus:outline-none focus:shadow-md text-gray-800 bg-white"
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
              className="mt-1 bg-[#f0e68c] text-blue-500 py-2 px-4 rounded-lg shadow-md hover:bg-blue-200 hover:text-white"
            >
              Готово
            </button>
          </motion.div>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={!isFormValid}
        className={`text-sm font-bold py-2 px-4 rounded-3xl shadow-lg focus:outline-none transition-colors ${
          isFormValid
            ? 'bg-[#f0e68c] text-blue-500 hover:bg-blue-200 hover:text-white'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
      >
        Найти
      </button>
    </div>
  );
}

export default ExcursionSearch;
