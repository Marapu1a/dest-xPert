import React, { useState } from 'react';

const TourSelector = () => {
  const [formData, setFormData] = useState({
    name: '',
    tourists: '',
    phone: '',
    email: '',
    country: '',
    tourDate: '',
    wishes: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-100 p-6 rounded-md shadow-md max-w-full mx-auto"
    >
      <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Ваше имя"
            value={formData.name}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
          <input
            type="tel"
            name="phone"
            placeholder="+7 (___) ___-__-__"
            value={formData.phone}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
          <input
            type="text"
            name="country"
            placeholder="Страна"
            value={formData.country}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
        </div>
        <div className="flex flex-col gap-4">
          <input
            type="number"
            name="tourists"
            placeholder="Количество туристов"
            value={formData.tourists}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
          <input
            type="email"
            name="email"
            placeholder="Ваш e-mail"
            value={formData.email}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
          <input
            type="date"
            name="tourDate"
            value={formData.tourDate}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
        </div>
        <div className="flex flex-col gap-4">
          <textarea
            name="wishes"
            placeholder="Пожелания"
            value={formData.wishes}
            onChange={handleChange}
            className="border p-2 rounded w-full h-full"
          ></textarea>
        </div>
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded w-full mt-4 hover:bg-blue-600"
      >
        Отправить
      </button>
      <p className="text-sm text-center mt-2">
        Нажимая кнопку "Отправить" вы соглашаетесь с{' '}
        <a href="#" className="text-blue-500">
          условиями обработки персональных данных
        </a>
        .
      </p>
    </form>
  );
};

export default TourSelector;
