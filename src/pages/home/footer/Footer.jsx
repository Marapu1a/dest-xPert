import { useState, useRef, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTelegram, FaYoutube } from 'react-icons/fa';
import Notification from '@components/Notification';

const Footer = () => {
  const [notification, setNotification] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const notificationRef = useRef('');
  const timerRef = useRef(null);

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
    return () => clearTimeout(timerRef.current); // Чистим таймер при размонтировании
  }, []);

  return (
    <footer className="bg-blue-100 text-blue-800">
      {/* First Block */}
      <div className="border-b border-blue-300 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Column 1 */}
          <div>
            <div>
              <Link to={'/about'}>
                <h4 className="font-bold mb-4">О нас</h4>
              </Link>
              <ul className="space-y-2">
                <Link to={'/team'}>
                  <li>Наша команда</li>
                </Link>
                <Link to={'/contacts'}>
                  <li>Контакты</li>
                </Link>
              </ul>
            </div>
            <div className="mt-12">
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-blue-500 transition-transform  hover:scale-110"
                >
                  <FaFacebook size={20} />
                </a>
                <a
                  href="#"
                  className="text-blue-500 transition-transform  hover:scale-110"
                >
                  <FaInstagram size={20} />
                </a>
                <a
                  href="#"
                  className="text-blue-500 transition-transform  hover:scale-110"
                >
                  <FaTelegram size={20} />
                </a>
                <a
                  href="#"
                  className="text-blue-500 transition-transform  hover:scale-110"
                >
                  <FaYoutube size={20} />
                </a>
              </div>
              <p className="text-sm text-blue-500 mt-2">Мы в соц. сетях</p>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <ul className="space-y-4">
              <li
                onClick={(e) => copyToClipboard('+998 90 9545470', e)}
                className="cursor-pointer"
              >
                +998 90 9545470
                <p className="text-sm text-blue-500">Офис Ташкент</p>
              </li>
              <li
                onClick={(e) => copyToClipboard('+998 900268885', e)}
                className="cursor-pointer"
              >
                +998 900268885
                <p className="text-sm text-blue-500">Отдел продаж</p>
              </li>

              {/* E-mail */}
              <li
                onClick={(e) => copyToClipboard('tas@destxpert.travel', e)}
                className="cursor-pointer"
              >
                tas@destxpert.travel
                <p className="text-sm text-blue-500">E-mail</p>
              </li>

              {/* Telegram ссылки */}
              <li>
                <a
                  href="https://t.me/destxpertb2b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" hover:underline"
                >
                  @destxpertb2b
                </a>
                <p className="text-sm text-blue-500">
                  Telegram: DestXpert Travel Агентствам Узбекистана
                </p>
              </li>
              <li>
                <a
                  href="https://t.me/destxpert_travel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" hover:underline"
                >
                  @destxpert_travel
                </a>
                <p className="text-sm text-blue-500">
                  Telegram: DestXpert Travel
                </p>
              </li>
              {/* Уведомление */}
              {notification && (
                <Notification message={notification} position={mousePosition} />
              )}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <div>
              <h4 className="font-bold mb-4">Агентствам</h4>
              <ul className="space-y-2">
                <a
                  href="https://sm.destxpert.travel/search_tour?samo_action=logon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Личный кабинет
                </a>
                <li>Подписка</li>
                <li>Способ оплаты</li>
                <li>Бонусная программа</li>
              </ul>
            </div>
            <div className="mt-6">
              <Link to={'/news'}>
                <h4 className="font-bold mb-4">Новости</h4>
              </Link>
              <ul className="space-y-2">
                <li>Специальные предложения</li>
                <li>Важная информация</li>
                <li>Мероприятия</li>
                <li>Разное</li>
              </ul>
            </div>
          </div>

          {/* Column 4 */}
          <div>
            <div>
              <h4 className="font-bold mb-4">Туристам</h4>
              <ul className="space-y-2">
                <li>Где купить</li>
                <li>Отзывы</li>
              </ul>
            </div>
            <div className="mt-6 ">
              <h4 className="font-bold mb-4">Направления</h4>
              <ul className="grid md:grid-cols-2 gap-x-4 gap-y-2">
                <li>Италия</li>
                <li>Австрия</li>
                <li>Чехия</li>
                <li>Венгрия</li>
                <li>Литва</li>
                <li>Словакия</li>
              </ul>
            </div>
          </div>

          {/* Column 5 */}
          <div>
            <h4 className="font-bold mb-4">Информация</h4>
            <ul className="space-y-2">
              <Link to={'/insurance'}>
                Страхование <br /> путешествия <br /> за рубеж
              </Link>
              <li>Коллаборации</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Second Block */}
      <div className="text-center text-sm text-blue-500 py-4 border-b border-blue-300">
        <p>
          © 2025 Международный туроператор DestXpert Travel Masʼuliyati
          cheklangan jamiyat (DestXpert Travel), зарегистрированное на
          территории Республики Узбекистан, индикационный номер
          налогоплательщика 311617009, расположенное по адресу Республика
          Узбекистан, Ташкент, Юнусабадский район, Малая кольцевая дорога, 18а,
          лицензия на туроператорскую деятельность № L-41802189 от 08.01.2025г.
        </p>
      </div>

      {/* Third Block */}
      <div className="bg-blue-900 text-blue-100 text-sm py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p>
            Для улучшения работы нашего сайта и предоставления
            персонализированного пользовательского опыта, DestXpert Travel MChJ
            использует файлы cookie. Вы можете управлять настройками их
            использования в своем браузере. Продолжая пользоваться сайтом без
            изменения настроек, вы соглашаетесь на обработку данных и принимаете
            политику конфиденциальности в соответствии с законодательством
            Республики Узбекистан.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
