import React from 'react';
import News from '@pages/home/sections/News';
import TravelSelector from '@/components/TravelSelector';
import SeasonalDestinations from '@pages/home/sections/SeasonalDestinations';
import AttentionSection from '@pages/home/sections/Attention';
import Carousel from '@pages/home/header/Carousel';

const Home = () => {
  return (
    <>
      <Carousel />
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <TravelSelector />
        <News />
        <SeasonalDestinations />
        <AttentionSection />
      </div>
    </>
  );
};

export default Home;
