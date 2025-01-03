import React, { useState } from 'react';
import logo from '@assets/header/logo.gif';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white z-50 shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Логотип и основная навигация (слева) */}
        <div className="flex items-center space-x-6">
          <img src={logo} alt="Logo" className="h-8" />
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-700 hover:text-blue-600">
              О нас
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Агентствам
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Туристам
            </a>
          </nav>
        </div>

        {/* Курс валют и телефон (справа) */}
        <div className="hidden md:flex items-center space-x-4">
          <span className="text-gray-700">+7 700 377-15-15</span>
          <div className="space-x-2">
            <a href="#" className="text-gray-700 hover:text-blue-600">
              USD: 533
            </a>
            <span>|</span>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              EUR: 554
            </a>
          </div>
        </div>

        {/* Кнопка "Меню" для мобильных */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-blue-600 border border-blue-600 px-4 py-1 rounded-md"
        >
          {menuOpen ? 'Закрыть' : 'Меню'}
        </button>
      </div>
    </header>
  );
};

export default Header;
