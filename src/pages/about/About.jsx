import React from 'react';

const About = () => {
  return (
    <section className="container mx-auto p-6 text-[#252630]">
      <h2 className="text-4xl font-bold mb-4">О DestXpert Travel</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <p className="text-lg">
            <strong>DestXpert Travel</strong> – европейский стандарт туризма в
            Узбекистане. Добро пожаловать в DestXpert Travel MChJ – европейского
            туроператора с офисом в Узбекистане! Мы – команда экспертов с
            десятками лет опыта в туризме, и надеемся вместе с вами вывести
            туристический рынок Узбекистана на новый уровень.
          </p>
        </div>
        <div>
          <p className="text-lg">
            <strong>Наши конкурентные преимущества:</strong>
          </p>
          <ul className="list-none list-inside space-y-2 text-lg">
            <li>
              ✅ Европейские стандарты качества – лучшие мировые практики в
              организации туров.
            </li>
            <li>
              ✅ Собственный офис в Ташкенте – оперативное решение любых
              вопросов.
            </li>
            <li>✅ Гибкость и индивидуальный подход – туры на любой вкус.</li>
            <li>✅ Технологичность – современные системы бронирования.</li>
            <li>
              ✅ Надежность и международные связи – гарантия качества услуг.
            </li>
            <li>✅ Комплексный сервис – от визовой поддержки до VIP-услуг.</li>
          </ul>
        </div>
      </div>
      <div className="mt-6">
        <h3 className="text-2xl font-semibold">Наша миссия</h3>
        <p className="text-lg mt-2">
          <em>
            "Путешествия без границ – европейский туроператор в сердце
            Центральной Азии"
          </em>
        </p>
        <p className="text-lg mt-2">
          Наша цель – используя многолетний опыт работы в туризме, сделать
          путешествия между Узбекистаном и Европой удобными, доступными и
          запоминающимися, открывая туристам новые горизонты.
        </p>
      </div>
    </section>
  );
};

export default About;
