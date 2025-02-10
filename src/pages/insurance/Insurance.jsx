import React from 'react';
import pdfFile from '@assets/sections/insurance/Gross_Assistance.pdf';
import Gross_logo from '@assets/sections/insurance/Gross_logo_2.png';

const InsuranceInfo = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold text-[#252630] mb-6">
        Страхование путешествий за рубеж
      </h2>
      <p className="mb-4">
        Для любителей путешествовать, а также для деловых людей ООО «GROSS
        INSURANCE» разработало комплексную программу туристической страховки.
      </p>
      <p className="mb-4">
        В зависимости от срока Вашей поездки, территории страхования и страховых
        рисков мы предлагаем Вам разные программы. Мы поможем защитить Вас от
        внезапных заболеваний в поездке.
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Неотложное амбулаторное и стационарное лечение</li>
        <li>Неотложную стоматологическую помощь</li>
        <li>
          Возвращение домой несовершеннолетних детей, оставшихся без присмотра
        </li>
        <li>Медицинскую эвакуацию и репатриацию</li>
        <li>Поисково-спасательные мероприятия</li>
        <li>Приобретение медикаментов</li>
      </ul>
      <h3 className="text-2xl font-bold mt-8 mb-4">
        Стандартно в тур включена программа GRAND 2 (ООО «GROSS INSURANCE»)
      </h3>
      <p className="mb-4">Все страховые суммы указаны в Евро. </p>
      <a
        href="https://gross.uz/ru/product/details?product=travel"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline"
      >
        <img
          src={Gross_logo}
          alt="Gross Insurance"
          className="h-12 inline-block"
        />
      </a>
      <div className="overflow-auto">
        <table className="table-auto w-full text-sm border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">
                Название Программы страхования
              </th>
              <th className="border border-gray-300 p-2">Grand 1</th>
              <th className="border border-gray-300 p-2">Grand 2</th>
              <th className="border border-gray-300 p-2">Prestige</th>
              <th className="border border-gray-300 p-2">Antivirus 1</th>
              <th className="border border-gray-300 p-2">Antivirus 2</th>
              <th className="border border-gray-300 p-2">Antivirus 3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2">
                Страховая сумма за одного застрахованного лица
              </td>
              <td className="border border-gray-300 p-2">50,000</td>
              <td className="border border-gray-300 p-2">60,000</td>
              <td className="border border-gray-300 p-2">90,000</td>
              <td className="border border-gray-300 p-2">60,000</td>
              <td className="border border-gray-300 p-2">90,000</td>
              <td className="border border-gray-300 p-2">110,000</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">
                В том числе, страхование от смерти
              </td>
              <td className="border border-gray-300 p-2">1,500</td>
              <td className="border border-gray-300 p-2">2,000</td>
              <td className="border border-gray-300 p-2">3,000</td>
              <td className="border border-gray-300 p-2">2,000</td>
              <td className="border border-gray-300 p-2">3,000</td>
              <td className="border border-gray-300 p-2">3,000</td>
            </tr>
            <tr className="bg-gray-100">
              <td
                colSpan="7"
                className="border border-gray-300 p-2 text-center font-bold"
              >
                Страховые суммы по каждой услуге
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">
                1. Медицинские услуги, в том числе:
              </td>
              <td className="border border-gray-300 p-2">до 25,000</td>
              <td className="border border-gray-300 p-2">до 30,000</td>
              <td className="border border-gray-300 p-2">до 40,000</td>
              <td className="border border-gray-300 p-2">до 30,000</td>
              <td className="border border-gray-300 p-2">до 40,000</td>
              <td className="border border-gray-300 p-2">до 90,000</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 pl-6">
                - стоматологическая помощь
              </td>
              <td className="border border-gray-300 p-2">до 150</td>
              <td className="border border-gray-300 p-2">до 200</td>
              <td className="border border-gray-300 p-2">до 300</td>
              <td className="border border-gray-300 p-2">до 200</td>
              <td className="border border-gray-300 p-2">до 300</td>
              <td className="border border-gray-300 p-2">до 300</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 pl-6">
                - помощь при COVID-19
              </td>
              <td className="border border-gray-300 p-2">нет</td>
              <td className="border border-gray-300 p-2">нет</td>
              <td className="border border-gray-300 p-2">до 1,000</td>
              <td className="border border-gray-300 p-2">до 3,000</td>
              <td className="border border-gray-300 p-2">до 45,000</td>
              <td className="border border-gray-300 p-2">до 90,000</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">
                2. Медико-транспортные и иные услуги, в том числе:
              </td>
              <td className="border border-gray-300 p-2">до 23,500</td>
              <td className="border border-gray-300 p-2">до 28,000</td>
              <td className="border border-gray-300 p-2">до 47,000</td>
              <td className="border border-gray-300 p-2">до 28,000</td>
              <td className="border border-gray-300 p-2">до 47,000</td>
              <td className="border border-gray-300 p-2">до 17,000</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 pl-6">
                - медицинская эвакуация
              </td>
              <td className="border border-gray-300 p-2">до 5,000</td>
              <td className="border border-gray-300 p-2">до 6,000</td>
              <td className="border border-gray-300 p-2">до 11,000</td>
              <td className="border border-gray-300 p-2">до 6,000</td>
              <td className="border border-gray-300 p-2">до 11,000</td>
              <td className="border border-gray-300 p-2">до 1,000</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 pl-6">
                - транспортировка сопровождающего лица
              </td>
              <td className="border border-gray-300 p-2">до 5,000</td>
              <td className="border border-gray-300 p-2">до 6,000</td>
              <td className="border border-gray-300 p-2">до 9,000</td>
              <td className="border border-gray-300 p-2">до 6,000</td>
              <td className="border border-gray-300 p-2">до 9,000</td>
              <td className="border border-gray-300 p-2">до 1,000</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 pl-6">
                - возвращение застрахованного лица и/или его несовершеннолетних
                детей
              </td>
              <td className="border border-gray-300 p-2">до 4,000</td>
              <td className="border border-gray-300 p-2">до 5,000</td>
              <td className="border border-gray-300 p-2">до 8,000</td>
              <td className="border border-gray-300 p-2">до 5,000</td>
              <td className="border border-gray-300 p-2">до 8,000</td>
              <td className="border border-gray-300 p-2">до 1,000</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 pl-6">
                - поисково–спасательные мероприятия
              </td>
              <td className="border border-gray-300 p-2">до 1,500</td>
              <td className="border border-gray-300 p-2">до 2,000</td>
              <td className="border border-gray-300 p-2">до 4,000</td>
              <td className="border border-gray-300 p-2">до 2,000</td>
              <td className="border border-gray-300 p-2">до 4,000</td>
              <td className="border border-gray-300 p-2">до 1,000</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 pl-6">
                - захоронение в стране временного пребывания
              </td>
              <td className="border border-gray-300 p-2">до 2,000</td>
              <td className="border border-gray-300 p-2">до 2,000</td>
              <td className="border border-gray-300 p-2">до 4,000</td>
              <td className="border border-gray-300 p-2">до 2,000</td>
              <td className="border border-gray-300 p-2">до 4,000</td>
              <td className="border border-gray-300 p-2">до 1,000</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 pl-6">- репатриация</td>
              <td className="border border-gray-300 p-2">до 6,000</td>
              <td className="border border-gray-300 p-2">до 7,000</td>
              <td className="border border-gray-300 p-2">до 11,000</td>
              <td className="border border-gray-300 p-2">до 7,000</td>
              <td className="border border-gray-300 p-2">до 11,000</td>
              <td className="border border-gray-300 p-2">до 12,000</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-sm italic">
        Внимание! Для получения экстренной медицинской помощи, позвоните по
        нижеуказанному номеру, в зависимости от страны пребывания. Если нет
        возможности связаться, то отправьте текстовые сообщения в мессенджеры
        круглосуточного сервисного центра:
      </p>
      <a
        href={pdfFile}
        target="_blank"
        rel="noopener noreferrer"
        className="text-red-600 font-bold underline"
      >
        Памятка застрахованному лицу
      </a>
    </div>
  );
};

export default InsuranceInfo;
