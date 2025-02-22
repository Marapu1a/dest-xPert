import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
import logo from '@assets/header/logo/logo.png';

import CurrencyRates from '@/utils/CurrencyRates';
import useMediaQuery from '@/utils/useMediaQuery';
import Notification from '@components/Notification';

const HeaderWithMenu = () => {
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const [menuOpen, setMenuOpen] = useState(false);
  const notificationRef = useRef('');
  const [notification, setNotification] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const menuRef = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => {
    if (isDesktop) setMenuOpen(false); // Авто-закрытие меню при ресайзе на десктоп
  }, [isDesktop]);

  const handleClickOutside = useCallback(
    (event) => {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        event.target.closest('.menu-button') === null
      ) {
        setMenuOpen(false);
      }
    },
    [menuOpen]
  );

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen, handleClickOutside]);

  useEffect(() => {
    if (menuOpen && !isDesktop) {
      document.body.classList.add('overflow-hidden');
    }

    return () => {
      if (menuOpen && !isDesktop) {
        document.body.classList.remove('overflow-hidden');
      }
    };
  }, [menuOpen, isDesktop]);

  // Закрытие меню при смене маршрута
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const handleMenuButtonClick = useCallback((e) => {
    e.stopPropagation();
    setMenuOpen((prev) => !prev);
  }, []);

  const copyToClipboard = useCallback((text, event) => {
    if (timerRef.current) clearTimeout(timerRef.current);

    navigator.clipboard
      .writeText(text)
      .then(() => {
        setMousePosition({ x: event.clientX, y: event.clientY });
        notificationRef.current = `${text} скопировано!`;
        setNotification(notificationRef.current);
        timerRef.current = setTimeout(() => setNotification(''), 3000);
      })
      .catch(() => {
        notificationRef.current = 'Не удалось скопировать';
        setNotification(notificationRef.current);
        timerRef.current = setTimeout(() => setNotification(''), 3000);
      });
  }, []);

  useEffect(() => {
    return () => clearTimeout(timerRef.current); // Очищаем таймер при размонтировании
  }, []);

  return (
    <>
      {/* Хедер */}
      <header className="relative bg-white z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link
            to="/"
            onClick={() => {
              sessionStorage.clear(); // Очищаем сохраненные скролл-позиции
              window.scrollTo(0, 0); // Сбрасываем в начало страницы
            }}
          >
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
              className="text-[#252630] hover:text-gray-600 font-semibold transition-colors"
            >
              О нас
            </Link>
            <Link
              to="/agency"
              className="text-[#252630] hover:text-gray-600 font-semibold transition-colors"
            >
              Агентствам
            </Link>
            <Link
              to="/tourists"
              className="text-[#252630] hover:text-gray-600 font-semibold transition-colors"
            >
              Туристам
            </Link>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://sm.destxpert.travel/search_tour?samo_action=logon"
              className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
            >
              <FaUserAlt
                className="text-[#252630] hover:text-gray-800 transition-colors"
                size={20}
              />
            </a>
          </div>

          <div className="md:flex mr-2 space-x-4 ml-auto">
            <CurrencyRates />
          </div>

          <button
            onClick={handleMenuButtonClick}
            className="z-50 bg-gray-200 text-[#252630] px-4 py-2 rounded md:hidden hover:bg-gray-300 transition-colors"
          >
            {menuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>

          <button
            onClick={handleMenuButtonClick}
            className="menu-button hidden md:inline-flex items-center justify-center z-50 bg-gray-200 text-[#252630] px-4 py-2 ml-4 rounded w-28 hover:bg-gray-300 transition-colors"
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
            ref={menuRef}
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
                <Link to={'/about'} className="font-bold text-white mb-2">
                  О нас
                </Link>
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
                <Link to={'/destinations'}>
                  <button className="font-bold text-white mobile-only-space mb-2">
                    Страны и направления
                  </button>
                </Link>
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
                  {/* Телефоны */}
                  <li
                    onClick={(e) => copyToClipboard('+998 90 9545470', e)}
                    className="cursor-pointer"
                  >
                    +998 90 9545470
                    <p className="text-sm text-[#f0e68c]">Офис Ташкент</p>
                  </li>
                  <li
                    onClick={(e) => copyToClipboard('+998 900268885', e)}
                    className="cursor-pointer"
                  >
                    +998 900268885
                    <p className="text-sm text-[#f0e68c]">Отдел продаж</p>
                  </li>

                  {/* E-mail */}
                  <li
                    onClick={(e) => copyToClipboard('tas@destxpert.travel', e)}
                    className="cursor-pointer"
                  >
                    tas@destxpert.travel
                    <p className="text-sm text-[#f0e68c]">E-mail</p>
                  </li>

                  {/* Telegram ссылки */}
                  <li>
                    <a
                      href="https://t.me/destxpertb2b"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      @destxpertb2b
                    </a>
                    <p className="text-sm text-[#f0e68c]">
                      Telegram: DestXpert Travel Агентствам Узбекистана
                    </p>
                  </li>
                  <li>
                    <a
                      href="https://t.me/destxpert_travel"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      @destxpert_travel
                    </a>
                    <p className="text-sm text-[#f0e68c]">
                      Telegram: DestXpert Travel
                    </p>
                  </li>
                  {/* Уведомление */}
                  <Notification
                    message={notification}
                    position={mousePosition}
                  />
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
