import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '@assets/header/logo.gif';

const HeaderWithMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(
    window.matchMedia('(min-width: 768px)').matches
  );
  const headerRef = useRef(null);

  // Блокировка прокрутки страницы на мобильных устройствах
  useEffect(() => {
    if (menuOpen && !isDesktop) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [menuOpen, isDesktop]);

  // Отслеживаем изменение ширины экрана
  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    const handleMediaChange = (e) => {
      setIsDesktop(e.matches);
      if (e.matches) {
        setMenuOpen(false);
      }
    };

    mediaQuery.addEventListener('change', handleMediaChange);
    return () => mediaQuery.removeEventListener('change', handleMediaChange);
  }, []);

  const handleMenuButtonClick = (e) => {
    e.stopPropagation();
    setMenuOpen((prev) => !prev);
  };

  return (
    <>
      {/* Хедер */}
      <header ref={headerRef} className="relative bg-white shadow-md z-50">
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
            className="z-50 bg-blue-600 text-white px-4 py-2 rounded md:hidden"
          >
            {menuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>

          <button
            onClick={handleMenuButtonClick}
            className="hidden md:inline-flex items-center z-50 bg-blue-600 text-white px-4 py-2 rounded"
          >
            {menuOpen ? (
              <>
                <FaTimes size={18} className="mr-2" />
                Закрыть
              </>
            ) : (
              <>
                <FaBars size={18} className="mr-2" />
                Меню
              </>
            )}
          </button>
        </div>
      </header>

      {/* Фон-затемнение для мобильной версии */}
      <AnimatePresence>
        {menuOpen && !isDesktop && (
          <motion.div
            key="overlay"
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Меню */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="menu"
            className={`${
              isDesktop
                ? 'absolute top-[55px] w-full left-0 bg-white shadow-lg rounded-md'
                : 'fixed top-[55px] left-0 w-3/4 h-full bg-white shadow-md'
            } z-40`}
            initial={isDesktop ? { y: '-100%' } : { x: '-100%' }}
            animate={isDesktop ? { y: 0 } : { x: 0 }}
            exit={isDesktop ? { y: '-100%' } : { x: '-100%' }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-3 flex justify-between">
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
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HeaderWithMenu;
