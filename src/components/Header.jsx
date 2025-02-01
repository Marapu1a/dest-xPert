import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  FaBars,
  FaTimes,
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaYoutube,
  FaUserAlt,
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '@assets/header/logo.png';
import CurrencyRates from '@/utils/CurrencyRates';

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
      <header ref={headerRef} className="relative bg-white z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="h-14 md:w-[4rem] lg:w-auto"
              loading="lazy"
            />
          </Link>

          <div className="hidden lg:flex space-x-16 items-center ml-8 mr-auto">
            <Link
              to="/about"
              className="text-black hover:text-gray-600 font-semibold transition-colors"
            >
              О нас
            </Link>
            <Link
              to="/agency"
              className="text-black hover:text-gray-600 font-semibold transition-colors"
            >
              Агентствам
            </Link>
            <Link
              to="/tourists"
              className="text-black hover:text-gray-600 font-semibold transition-colors"
            >
              Туристам
            </Link>
            <Link
              to="/cabinet"
              className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
            >
              <FaUserAlt
                className="text-black hover:text-gray-800 transition-colors"
                size={20}
              />
            </Link>
          </div>

          <div className="md:flex mr-2 space-x-4 ml-auto">
            <CurrencyRates />
          </div>

          <button
            onClick={handleMenuButtonClick}
            className="z-50 bg-gray-200 text-black px-4 py-2 rounded md:hidden hover:bg-gray-300 transition-colors"
          >
            {menuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>

          <button
            onClick={handleMenuButtonClick}
            className="hidden md:inline-flex items-center justify-center z-50 bg-gray-200 text-black px-4 py-2 ml-4 rounded w-28 hover:bg-gray-300 transition-colors"
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
                ? 'absolute top-[66px] w-full left-0 bg-blue-300 shadow-lg rounded-md '
                : 'fixed top-[66px] left-0 w-3/4 h-full bg-blue-300 shadow-md flex flex-col space-y-6 sm:space-y-4 overflow-y-auto mobile-only-padding'
            } z-40`}
            initial={isDesktop ? { y: '-100%' } : { x: '-100%' }}
            animate={isDesktop ? { y: 0 } : { x: 0 }}
            exit={isDesktop ? { y: '-100%' } : { x: '-100%' }}
            transition={{ duration: 0.3 }}
          >
            <div
              className={
                isDesktop
                  ? 'md:container md:mx-auto md:px-4 md:py-8 md:flex md:justify-between'
                  : ''
              }
            >
              <div className="flex flex-col">
                <h2 className="font-bold text-white mb-2">О нас</h2>
                <Link
                  to="/team"
                  className="block text-white hover:text-[#f0e68c]"
                >
                  Наша команда
                </Link>
                <Link
                  to="/contacts"
                  className="block text-white hover:text-[#f0e68c]"
                >
                  Контакты
                </Link>
                <div className="flex mt-auto space-x-4">
                  <a
                    href="#"
                    className="text-white transition-transform hover:scale-110"
                  >
                    <FaFacebook size={20} />
                  </a>
                  <a
                    href="#"
                    className="text-white transition-transform hover:scale-110"
                  >
                    <FaInstagram size={20} />
                  </a>
                  <a
                    href="#"
                    className="text-white transition-transform hover:scale-110"
                  >
                    <FaTelegram size={20} />
                  </a>
                  <a
                    href="#"
                    className="text-white transition-transform hover:scale-110"
                  >
                    <FaYoutube size={20} />
                  </a>
                </div>
                <span className="text-[#f0e68c] text-sm mobile-only-space">
                  Мы в соц. сетях
                </span>
              </div>
              <div className="mobile-only-space">
                <h2 className="font-bold text-white mb-2">Агентствам</h2>
                <Link
                  to="/cabinet"
                  className="block text-white hover:text-[#f0e68c]"
                >
                  Личный кабинет
                </Link>
                <Link
                  to="/subscribe"
                  className="block text-white hover:text-[#f0e68c]"
                >
                  Подписка
                </Link>
                <Link
                  to="/payments"
                  className="block text-white hover:text-[#f0e68c]"
                >
                  Способы оплаты
                </Link>
                <Link
                  to="/bonus"
                  className="block text-white hover:text-[#f0e68c]"
                >
                  Бонусная программа
                </Link>
              </div>
              <div className="mobile-only-space">
                <h2 className="font-bold text-white">Новости</h2>
                <h2 className="font-bold text-white mobile-only-space mb-2">
                  Направления
                </h2>
                <h2 className="font-bold text-white mb-2">Туристам</h2>
                <Link
                  to="/where-to-buy"
                  className="block text-white hover:text-[#f0e68c]"
                >
                  Где купить
                </Link>
                <Link
                  to="/reviews"
                  className="block text-white hover:text-[#f0e68c]"
                >
                  Отзывы
                </Link>
              </div>
              <div>
                <ul className="space-y-4">
                  <li>
                    +7 (700) 377 15 15
                    <p className="text-sm text-[#f0e68c]">Служба поддержки</p>
                  </li>
                  <li>
                    +7 (776) 877 15 15
                    <p className="text-sm text-[#f0e68c]">Экстренный телефон</p>
                  </li>
                  <li>
                    +7 (700) 377 15 15
                    <p className="text-sm text-[#f0e68c]">WhatsApp</p>
                  </li>
                  <li>
                    sales@selfietravel.kz
                    <p className="text-sm text-[#f0e68c]">Наша почта</p>
                  </li>
                  <li>
                    @selfietravelkz_bot
                    <p className="text-sm text-[#f0e68c]">Telegram</p>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HeaderWithMenu;
