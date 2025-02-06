import React from 'react';
import { Link } from 'react-router-dom';

import attention1 from '@assets/sections/attention/attention-1.webp';
import attention2 from '@assets/sections/attention/attention-2.webp';
import attention3 from '@assets/sections/attention/attention-3.webp';
import attention4 from '@assets/sections/attention/attention-4.webp';

const slides = [
  {
    img: attention1,
    title: '',
    text: '',
    buttonStyle:
      'absolute md:left-[28px] md:top-[250px] z-10 text-center max-w-[80%]',
  },
  {
    img: attention2,
    title: '',
    text: '',
    buttonStyle:
      'absolute md:left-[38px] md:top-[190px] z-10 text-center max-w-[80%]',
  },
  {
    img: attention3,
    title: '',
    text: '',
    buttonStyle:
      'absolute md:left-[52px] md:top-[250px] z-10 text-center max-w-[80%]',
  },
  {
    img: attention4,
    title: '',
    text: '',
    buttonStyle:
      'absolute md:left-[32px] md:top-[210px] z-10 text-center max-w-[80%]',
  },
];

const AttentionSection = () => {
  return (
    <div className="bg-white p-6">
      <h2 className="text-3xl font-bold mb-6">Обратите внимание</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {slides.map(({ img, title, text, buttonStyle }, index) => (
          <div
            key={index}
            className="relative flex items-center justify-center text-white p-6 rounded-lg overflow-hidden min-h-[250px] md:min-h-[700px]"
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className={buttonStyle}>
              <h3 className="hidden text-xl font-semibold mb-2">{title}</h3>
              <p className="hidden mb-4">{text}</p>
              <Link
                to="#"
                className="inline-block font-bold text-center px-6 py-3 rounded-full bg-white text-blue-900 md:text-[28px] shadow-xl transition-transform transform hover:scale-105"
              >
                Подробнее
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AttentionSection;
