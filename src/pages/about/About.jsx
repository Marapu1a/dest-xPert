import React from 'react';

const teamMembers = [
  {
    name: 'Мильский Петр',
    position: 'Коммерческий директор',
    email: 'director.sales@destxpert.travel',
    phone: '',
  },
  {
    name: 'Шодиева Камола',
    position: 'Директор',
    email: 'tas@destxpert.travel',
    phone: '+998 90-026-88-87',
  },
  {
    name: 'Бахтиозина Ксения',
    position: 'Руководитель отдела продаж',
    email: 'sales1@destxpert.travel',
    phone: '+998 90-026-88-85',
  },
  {
    name: 'Одилова Шахзода',
    position: 'Менеджер',
    email: 'sales2@destxpert.travel',
    phone: '+988 90-026-88-83',
  },
];

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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow text-center flex flex-col items-center"
            >
              {/* Заглушка вместо фото */}
              <div className="w-24 h-24 bg-gray-300 rounded-full mb-4"></div>
              <h2 className="text-xl font-semibold">{member.name}</h2>
              <p className="text-[#252630] mb-2">{member.position}</p>
              {member.email && (
                <p className="text-blue-600 text-sm break-all">
                  <a href={`mailto:${member.email}`}>{member.email}</a>
                </p>
              )}
              {member.phone && (
                <p className="text-[#252630] text-sm mt-1">{member.phone}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
