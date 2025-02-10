import { useState } from 'react';
import { FaPhoneAlt, FaTelegramPlane, FaEnvelope } from 'react-icons/fa';

const Contacts = () => {
  const [notification, setNotification] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const copyToClipboard = (text, event) => {
    navigator.clipboard.writeText(text).then(() => {
      setMousePosition({ x: event.clientX, y: event.clientY });
      setNotification(`${text} скопировано!`);
      setTimeout(() => setNotification(''), 3000);
    });
  };

  const contacts = [
    {
      icon: <FaPhoneAlt size={34} />,
      title: (
        <span
          onClick={(e) => copyToClipboard('+998 90 9545470', e)}
          className="cursor-pointer"
        >
          +998 90 9545470
        </span>
      ),
      description: (
        <>
          <strong>Апрель – октябрь:</strong> <br />
          Пн–Пт: 09:00 – 19:00 <br />
          Сб: 10:00 – 15:00 <br />
          <br />
          <strong>Ноябрь – март:</strong> <br />
          Пн–Пт: 10:00 – 18:00 <br />
          Сб–Вс: офис не работает
        </>
      ),
      bgColor: 'bg-[#ff6f61]', // Розовый из логотипа
    },
    {
      icon: <FaPhoneAlt size={34} />,
      title: (
        <span
          onClick={(e) => copyToClipboard('+998 90 9545470', e)}
          className="cursor-pointer"
        >
          +998 90 9545470
        </span>
      ),
      description:
        'Экстренный телефон во внерабочее время (заказы турагентств по экстренному телефону не принимаются)',
      bgColor: 'bg-[#FDBB2F]', // Оранжевый из логотипа
    },
    {
      icon: <FaTelegramPlane size={34} />,
      title: <>Телеграм</>,
      description: (
        <>
          <a
            href="https://t.me/destxpertb2b"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-white hover:underline"
          >
            @destxpertb2b
          </a>
          <br />
          DestXpert Travel Агентствам Узбекистана <br />
          <a
            href="https://t.me/destxpert_travel"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-white hover:underline"
          >
            @destxpert_travel
          </a>
          <br />
          DestXpert Travel
        </>
      ),
      bgColor: 'bg-[#7FC8F8]', // Синий из логотипа
    },
    {
      icon: <FaEnvelope size={34} />,
      title: 'Напишите нам',
      description: (
        <span
          onClick={(e) => copyToClipboard('tas@destxpert.travel', e)}
          className="cursor-pointer"
        >
          E-mail: tas@destxpert.travel
        </span>
      ),
      bgColor: 'bg-[#6CC34A]', // Зеленый из логотипа
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold text-[#252630] mb-8">Контакты</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {contacts.map((contact, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-md text-white ${contact.bgColor} animate-gradient`}
          >
            <div className="flex items-center mb-4">
              <div className="text-white mr-3">{contact.icon}</div>
              <h3 className="text-lg font-bold">{contact.title}</h3>
            </div>
            <p className="text-sm">{contact.description}</p>
          </div>
        ))}
      </div>
      {notification && (
        <div
          className="fixed bg-black text-white text-sm py-2 px-4 rounded-lg shadow-lg"
          style={{
            top: mousePosition.y + 15 + 'px',
            left: mousePosition.x + 15 + 'px',
            zIndex: 1000,
          }}
        >
          {notification}
        </div>
      )}
    </div>
  );
};

export default Contacts;
