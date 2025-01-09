import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '@assets/header/logo.gif';

const HeaderWithMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(
    window.matchMedia('(min-width: 768px)').matches
  );
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  // Используем matchMedia API для отслеживания изменения ширины окна
  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    const handleMediaChange = (e) => setIsDesktop(e.matches);

    mediaQuery.addEventListener('change', handleMediaChange);
    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
    };
  }, []);

  // Функции для открытия/закрытия меню
  const handleHeaderClick = (e) => {
    if (!menuRef.current?.contains(e.target)) {
      setMenuOpen((prev) => !prev);
    }
  };

  const handleMenuButtonClick = (e) => {
    e.stopPropagation();
    setMenuOpen((prev) => !prev);
  };

  // Закрытие меню при клике вне области
  useEffect(() => {
    if (menuOpen) {
      const handleOutsideClick = (e) => {
        if (
          !menuRef.current?.contains(e.target) &&
          !headerRef.current?.contains(e.target)
        ) {
          setMenuOpen(false);
        }
      };
      document.addEventListener('click', handleOutsideClick);
      return () => document.removeEventListener('click', handleOutsideClick);
    }
  }, [menuOpen]);

  // Стили для меню
  const menuStyles = `
    ${
      isDesktop
        ? 'absolute top-[55px] left-0 w-full h-auto bg-white shadow-md'
        : 'fixed top-0 left-0 w-3/4 h-full bg-white shadow-md'
    }
    transition-transform duration-500 ease-in-out transform ${
      menuOpen
        ? isDesktop
          ? 'scale-y-100 opacity-100'
          : 'translate-x-0'
        : isDesktop
          ? 'scale-y-0 opacity-0'
          : '-translate-x-full'
    }
  `;

  return (
    <header
      ref={headerRef}
      onClick={handleHeaderClick}
      className="relative bg-white shadow-md z-50"
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-8" loading="lazy" />
        </Link>
        <div className="hidden md:flex space-x-4">
          <span className="text-gray-700">+7 700 377-15-15</span>
          <span>|</span>
          <span className="text-gray-700">USD: 533 / EUR: 554</span>
        </div>
        <button
          onClick={handleMenuButtonClick}
          className="md:hidden z-50 bg-blue-600 text-white px-4 py-2 rounded"
        >
          {menuOpen ? 'Закрыть' : 'Меню'}
        </button>
      </div>

      {menuOpen && !isDesktop && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50"
          onClick={() => setMenuOpen(true)}
        />
      )}

      <div ref={menuRef} className={menuStyles}>
        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h2 className="font-bold text-gray-800 mb-2">О нас</h2>
            <Link
              to="/team"
              className="block text-gray-700 hover:text-blue-600"
            >
              Наша команда
            </Link>
            <Link
              to="/contacts"
              className="block text-gray-700 hover:text-blue-600"
            >
              Контакты
            </Link>
          </div>
          <div>
            <h2 className="font-bold text-gray-800 mb-2">Агентствам</h2>
            <Link
              to="/cabinet"
              className="block text-gray-700 hover:text-blue-600"
            >
              Личный кабинет
            </Link>
            <Link
              to="/subscribe"
              className="block text-gray-700 hover:text-blue-600"
            >
              Подписка
            </Link>
            <Link
              to="/payments"
              className="block text-gray-700 hover:text-blue-600"
            >
              Способы оплаты
            </Link>
            <Link
              to="/bonus"
              className="block text-gray-700 hover:text-blue-600"
            >
              Бонусная программа
            </Link>
          </div>
          <div>
            <h2 className="font-bold text-gray-800 mb-2">Туристам</h2>
            <Link
              to="/where-to-buy"
              className="block text-gray-700 hover:text-blue-600"
            >
              Где купить
            </Link>
            <Link
              to="/reviews"
              className="block text-gray-700 hover:text-blue-600"
            >
              Отзывы
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderWithMenu;
