import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollManager from './utils/ScrollManager';

import Header from '@components/Header';
import Footer from '@pages/home/footer/Footer';
import Home from '@pages/home/Home';
import NewsPage from '@pages/news/NewsPage';
import About from '@/pages/about/About';
import Destinations from '@pages/destinations/Destinations';
import Spa from '@pages/destinations/about-destinations/Spa';
import Excursions from '@pages/destinations/about-destinations/Excursions';
import Beach from '@pages/destinations/about-destinations/Beach';

export function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/spa-wellness" element={<Spa />} />
        <Route path="/excursions" element={<Excursions />} />
        <Route path="/beach-vacation" element={<Beach />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
