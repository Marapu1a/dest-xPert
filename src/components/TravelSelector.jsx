import React, { useState } from 'react';

const cities = [
  'Москва',
  'Санкт-Петербург',
  'Казань',
  'Новосибирск',
  'Екатеринбург',
];

function FlightSearch() {
  const [mode, setMode] = useState('flight');
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [passengers, setPassengers] = useState(1);

  const handleCityChange = (setter) => (event) => {
    setter(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fromCity || !toCity || !departureDate) {
      alert('Заполните все обязательные поля!');
      return;
    }
    alert(
      `Поиск билетов из ${fromCity} в ${toCity}, дата отправления: ${departureDate}, пассажиров: ${passengers}`
    );
  };

  const renderForm = () => {
    switch (mode) {
      case 'tour':
        return (
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 bg-gray-100 p-4 rounded-lg shadow-lg">
            <div className="flex-1">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Направление тура
              </label>
              <input
                list="city-list"
                value={fromCity}
                onChange={handleCityChange(setFromCity)}
                placeholder="Выберите город"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <datalist id="city-list">
                {cities.map((city) => (
                  <option key={city} value={city} />
                ))}
              </datalist>
            </div>
            <div className="flex-1">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Дата начала тура
              </label>
              <input
                type="date"
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4 md:mt-0"
            >
              Подобрать тур
            </button>
          </div>
        );
      case 'excursion':
        return (
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 bg-gray-100 p-4 rounded-lg shadow-lg">
            <div className="flex-1">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Город экскурсии
              </label>
              <input
                list="city-list"
                value={toCity}
                onChange={handleCityChange(setToCity)}
                placeholder="Выберите город"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <datalist id="city-list">
                {cities.map((city) => (
                  <option key={city} value={city} />
                ))}
              </datalist>
            </div>
            <div className="flex-1">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Дата экскурсии
              </label>
              <input
                type="date"
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4 md:mt-0"
            >
              Подобрать экскурсию
            </button>
          </div>
        );
      case 'flight':
      default:
        return (
          <div className="flex flex-col space-y-4 bg-gray-100 p-4 rounded-lg shadow-lg md:space-y-0">
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
              <div className="flex-1">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Откуда
                </label>
                <input
                  list="city-list"
                  value={fromCity}
                  onChange={handleCityChange(setFromCity)}
                  placeholder="Выберите город"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <datalist id="city-list">
                  {cities.map((city) => (
                    <option key={city} value={city} />
                  ))}
                </datalist>
              </div>
              <div className="flex-1">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Куда
                </label>
                <input
                  list="city-list"
                  value={toCity}
                  onChange={handleCityChange(setToCity)}
                  placeholder="Выберите город"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
              <div className="flex-1">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Когда
                </label>
                <input
                  type="date"
                  value={departureDate}
                  onChange={(e) => setDepartureDate(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="flex-1">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Пассажиры
                </label>
                <input
                  type="number"
                  min="1"
                  value={passengers}
                  onChange={(e) => setPassengers(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4 md:mt-0"
            >
              Найти билеты
            </button>
          </div>
        );
    }
  };

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="flex justify-between mb-4">
        <button
          className={`py-2 px-4 rounded ${mode === 'flight' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setMode('flight')}
        >
          Поиск авиабилетов
        </button>
        <button
          className={`py-2 px-4 rounded ${mode === 'tour' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setMode('tour')}
        >
          Подбор тура
        </button>
        <button
          className={`py-2 px-4 rounded ${mode === 'excursion' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setMode('excursion')}
        >
          Подбор экскурсии
        </button>
      </div>
      <form onSubmit={handleSubmit}>{renderForm()}</form>
    </div>
  );
}

export default FlightSearch;
