import React from 'react';
import { FaFacebook, FaInstagram, FaTelegram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800">
      {/* First Block */}
      <div className="border-b border-gray-300 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Column 1 */}
          <div>
            <div>
              <h4 className="font-bold mb-4">О нас</h4>
              <ul className="space-y-2">
                <li>Наша команда</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div className="mt-6">
              <div className="flex space-x-4">
                <a href="#" className="text-blue-500">
                  <FaFacebook size={20} />
                </a>
                <a href="#" className="text-blue-500">
                  <FaInstagram size={20} />
                </a>
                <a href="#" className="text-blue-500">
                  <FaTelegram size={20} />
                </a>
                <a href="#" className="text-blue-500">
                  <FaYoutube size={20} />
                </a>
              </div>
              <p className="text-sm text-gray-500 mt-2">Мы в соц. сетях</p>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <ul className="space-y-4">
              <li>
                +7 (700) 377 15 15
                <p className="text-sm text-gray-500">Служба поддержки</p>
              </li>
              <li>
                +7 (776) 877 15 15
                <p className="text-sm text-gray-500">Экстренный телефон</p>
              </li>
              <li>
                +7 (700) 377 15 15
                <p className="text-sm text-gray-500">WhatsApp</p>
              </li>
              <li>
                sales@selfietravel.kz
                <p className="text-sm text-gray-500">Наша почта</p>
              </li>
              <li>
                @selfietravelkz_bot
                <p className="text-sm text-gray-500">Telegram</p>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <div>
              <h4 className="font-bold mb-4">Агентствам</h4>
              <ul className="space-y-2">
                <li>Личный кабинет</li>
                <li>Подписка</li>
                <li>Способ оплаты</li>
                <li>Бонусная программа</li>
              </ul>
            </div>
            <div className="mt-6">
              <h4 className="font-bold mb-4">Новости</h4>
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
            <div className="mt-6">
              <h4 className="font-bold mb-4">Направления</h4>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                <li>Вьетнам</li>
                <li>Мальдивы</li>
                <li>Египет</li>
                <li>Таиланд</li>
                <li>Китай</li>
                <li>Турция</li>
                <li>Круизы</li>
                <li>Камбоджа</li>
              </ul>
            </div>
          </div>

          {/* Column 5 */}
          <div>
            <h4 className="font-bold mb-4">Информация</h4>
            <ul className="space-y-2">
              <li>Мед. страховка</li>
              <li>Коллаборации</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Second Block */}
      <div className="text-center text-sm text-gray-500 py-4 border-b border-gray-300">
        <p>
          © 2016 — 2024 Международный туроператор ТОО SELFIE TRAVEL (СЕЛФИ
          ТРЕВЕЛ) имеющий лицензию ТО - 1314 от 03.12.2016 БИН/БСН: 140240028966
          находится по адресу г. Шымкент, Аль-Фарабийский р-он, пр-т Кунаева 39
          кв.1 ЖК Казахстан.
        </p>
      </div>

      {/* Third Block */}
      <div className="bg-gray-800 text-white text-sm py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p>
            Продолжая использовать наш сайт, вы подтверждаете свое согласие на
            обработку персональных данных и принятие политики
            конфиденциальности. Для повышения удобства работы с сайтом, ТОО
            «Selfie Travel (Селфи Тревел)» использует файлы cookie. Если вы не
            хотите, чтобы персональные данные обрабатывались, отключите cookie в
            настройках браузера.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
