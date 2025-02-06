import { useEffect, useState } from 'react';

const CurrencyRates = () => {
  // Стейт для курсов валют
  const [rates, setRates] = useState({ USD: 0, EUR: 0 });

  // Функция для получения данных с API
  const fetchRates = async () => {
    try {
      const response = await fetch(
        'https://cbu.uz/ru/arkhiv-kursov-valyut/json/'
      );
      const data = await response.json();

      // Найти курсы USD и EUR
      const usdRate = data.find((rate) => rate.Ccy === 'USD').Rate;
      const eurRate = data.find((rate) => rate.Ccy === 'EUR').Rate;

      // Обновляем стейт
      setRates({ USD: usdRate, EUR: eurRate });
    } catch (error) {
      console.error('Ошибка при получении курсов валют:', error);
    }
  };

  // Используем useEffect для загрузки данных при монтировании компонента
  useEffect(() => {
    fetchRates();

    // Обновление каждые 5 минут
    const interval = setInterval(fetchRates, 300000);
    return () => clearInterval(interval);
  }, []);

  // Отображаем курсы валют
  return (
    <span className="text-[#252630] hover:text-gray-600 cursor-default">
      USD: {rates.USD} UZS / EUR: {rates.EUR} UZS
    </span>
  );
};

export default CurrencyRates;
