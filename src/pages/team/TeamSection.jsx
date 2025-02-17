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

const TeamSection = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl text-[#252630] font-bold text-left mb-6">
        Команда DestXpert Travel
      </h1>
      <p className="text-[#252630] text-left max-w-2xl mb-10">
        Команда DestXpert Travel — это специалисты с многолетним опытом в
        индустрии туризма, которые знают, как превратить путешествие в
        незабываемое приключение. Мы тщательно разрабатываем маршруты, подбираем
        лучшие отели и сервисы, чтобы каждое ваше путешествие было комфортным,
        насыщенным и уникальным. Ваш отдых — наша забота, ваше вдохновение — наш
        результат!
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
  );
};

export default TeamSection;
