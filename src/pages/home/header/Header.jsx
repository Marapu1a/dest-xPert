import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '@assets/header/logo.gif';

const HeaderWithMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  // Обработчик изменения ширины окна
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
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
    ${isDesktop ? 'absolute top-[55px] left-0 w-full h-auto bg-white shadow-md' : 'fixed top-0 left-0 w-3/4 h-full bg-white shadow-md'}
    transition-all duration-500 ease-in-out
    ${menuOpen ? (isDesktop ? 'opacity-100 visible' : 'translate-x-0') : isDesktop ? 'opacity-0 invisible' : '-translate-x-full'}
  `;

  return (
    <header
      ref={headerRef}
      onClick={handleHeaderClick}
      className="relative bg-white shadow-md z-50"
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-8" />
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
