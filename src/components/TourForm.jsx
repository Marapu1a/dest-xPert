import React, { useState } from 'react';
import SightseeingSelect from './SightseeingSelector';
import TourSelector from './TourSelector';

const SidebarTabs = ({ setActiveModal }) => {
  return (
    <div className="fixed left-0 top-1/4 flex flex-col space-y-2">
      <button
        onClick={() => setActiveModal('tour')}
        className="bg-blue-500 text-white p-4 rounded-r-lg shadow-lg hover:bg-blue-600"
      >
        Подбор тура
      </button>
      <button
        onClick={() => setActiveModal('booking')}
        className="bg-green-500 text-white p-4 rounded-r-lg shadow-lg hover:bg-green-600"
      >
        Бронирование
      </button>
    </div>
  );
};

const Modal = ({ showModal, setShowModal, children }) => {
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full md:max-w-5xl relative">
        <button
          onClick={() => setShowModal(null)}
          className="absolute top-2 right-2 text-gray-500 hover:text-black"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
};

const TourForm = () => {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <div>
      <SidebarTabs setActiveModal={setActiveModal} />

      <Modal showModal={activeModal === 'tour'} setShowModal={setActiveModal}>
        <TourSelector />
      </Modal>

      <Modal
        showModal={activeModal === 'booking'}
        setShowModal={setActiveModal}
      >
        <SightseeingSelect />
      </Modal>
    </div>
  );
};

export default TourForm;
