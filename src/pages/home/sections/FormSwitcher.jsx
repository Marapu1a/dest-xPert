import React, { useState } from 'react';
import ExcursionSearch from '@components/ExcursionSearch';
import TourSearch from '@components/TourSearch';
import TicketSearch from '@components/TicketSearch';

function FormSwitcher() {
  const [activeForm, setActiveForm] = useState('excursion');

  const renderForm = () => {
    switch (activeForm) {
      case 'excursion':
        return (
          <div className="w-full">
            <ExcursionSearch />
          </div>
        );
      case 'tour':
        return (
          <div className="w-full">
            <TourSearch />
          </div>
        );
      case 'ticket':
        return (
          <div className="w-full">
            <TicketSearch />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-4">
      {/* Switcher Buttons */}
      <div className="flex justify-center space-x-4 mb-6">
        <button
          onClick={() => setActiveForm('excursion')}
          className={`px-4 py-2 rounded-lg font-bold transition-colors ${
            activeForm === 'excursion'
              ? 'bg-blue-400 text-white'
              : 'bg-gray-200 text-blue-500 hover:bg-blue-200'
          }`}
        >
          Экскурсии
        </button>
        <button
          onClick={() => setActiveForm('tour')}
          className={`px-4 py-2 rounded-lg font-bold transition-colors ${
            activeForm === 'tour'
              ? 'bg-blue-400 text-white'
              : 'bg-gray-200 text-blue-500 hover:bg-blue-200'
          }`}
        >
          Туры
        </button>
        <button
          onClick={() => setActiveForm('ticket')}
          className={`px-4 py-2 rounded-lg font-bold transition-colors ${
            activeForm === 'ticket'
              ? 'bg-blue-400 text-white'
              : 'bg-gray-200 text-blue-500 hover:bg-blue-200'
          }`}
        >
          Билеты
        </button>
      </div>

      {/* Render Active Form */}
      <div className="flex justify-center">{renderForm()}</div>
    </div>
  );
}

export default FormSwitcher;
