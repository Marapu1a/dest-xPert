import React, { useState } from 'react';

const SightseeingSelector = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    tourists: '',
    tourDate: '',
    region: '',
    tourType: '',
    duration: '',
    language: '',
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
            name="region"
            placeholder="Город/регион интереса"
            value={formData.region}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
        </div>
        <div className="flex flex-col gap-4">
          <input
            type="email"
            name="email"
            placeholder="Ваш e-mail"
            value={formData.email}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
          <input
            type="number"
            name="tourists"
            placeholder="Количество участников"
            value={formData.tourists}
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
          <select
            name="tourType"
            value={formData.tourType}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          >
            <option value="">Выберите тип экскурсии</option>
            <option value="cultural">Культурная</option>
            <option value="historical">Историческая</option>
            <option value="nature">Природная</option>
            <option value="gastronomic">Гастрономическая</option>
          </select>
          <select
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          >
            <option value="">Выберите длительность</option>
            <option value="few_hours">Несколько часов</option>
            <option value="full_day">Целый день</option>
            <option value="multi_day">Многодневная</option>
          </select>
          <select
            name="language"
            value={formData.language}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          >
            <option value="">Выберите язык экскурсии</option>
            <option value="ru">Русский</option>
            <option value="en">Английский</option>
            <option value="de">Немецкий</option>
            <option value="fr">Французский</option>
          </select>
        </div>
        <div className="col-span-3">
          <textarea
            name="wishes"
            placeholder="Специальные пожелания"
            value={formData.wishes}
            onChange={handleChange}
            className="border p-2 rounded w-full h-32"
          ></textarea>
        </div>
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded w-full mt-4 hover:bg-blue-600"
      >
        Подобрать экскурсию
      </button>
      <p className="text-sm text-center mt-2">
        Нажимая кнопку "Подобрать экскурсию" вы соглашаетесь с{' '}
        <a href="#" className="text-blue-500">
          условиями обработки персональных данных
        </a>
        .
      </p>
    </form>
  );
};

export default SightseeingSelector;
