import { Link } from 'react-router-dom';

import beach from '@assets/sections/destination/beach.webp';

const Destinations = () => {
  return (
    <section className="container mx-auto px-4 lg:px-6 py-12">
      {/* Заголовок */}
      <h2 className="text-[#252630] text-4xl font-bold mb-4">
        Страны и направления
      </h2>
      <p className="text-lg text-[#252630] max-w-2xl">
        Откройте для себя мир с DestXpert Travel! Мы предлагаем тщательно
        подобранные маршруты для отдыха и оздоровления: от лечебных курортов и
        спа до увлекательных экскурсионных программ и отдыха на лучших пляжах.
        Ваше путешествие — это не просто поездка, а яркий опыт, новые открытия и
        незабываемые эмоции.
      </p>

      {/* Баннер */}
      <div className="mt-8 h-48 relative">
        <img
          src={beach}
          alt="Туристическое направление"
          className="w-full h-full object-cover rounded-xl shadow-lg"
        />
        <div className="absolute bottom-4 left-6 flex space-x-4">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-full font-medium shadow-md">
            Где купить
          </button>
          <button className="px-6 py-2 bg-blue-600 text-white rounded-full font-medium shadow-md">
            Заявка на подбор
          </button>
        </div>
      </div>

      {/* Подразделы */}
      <div className="flex flex-wrap gap-3 mt-6">
        <Link
          to={'/spa-wellness'}
          onClick={() => {
            sessionStorage.clear(); // Очищаем сохраненные скролл-позиции
            window.scrollTo(0, 0); // Сбрасываем в начало страницы
          }}
        >
          <button className="px-4 py-2 bg-[#F5F7FA] text-[#252630] text-sm font-medium rounded-full shadow-sm">
            Лечение & спа & велнес
          </button>
        </Link>
        <Link
          to={'/excursions'}
          onClick={() => {
            sessionStorage.clear(); // Очищаем сохраненные скролл-позиции
            window.scrollTo(0, 0); // Сбрасываем в начало страницы
          }}
        >
          <button className="px-4 py-2 bg-[#F5F7FA] text-[#252630] text-sm font-medium rounded-full shadow-sm">
            Экскурсионный отдых
          </button>
        </Link>
        <Link
          to={'/beach-vacation'}
          onClick={() => {
            sessionStorage.clear(); // Очищаем сохраненные скролл-позиции
            window.scrollTo(0, 0); // Сбрасываем в начало страницы
          }}
        >
          <button className="px-4 py-2 bg-[#F5F7FA] text-[#252630] text-sm font-medium rounded-full shadow-sm">
            Пляжный отдых
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Destinations;
