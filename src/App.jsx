import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollManager from './utils/ScrollManager';

import Header from '@components/Header';
import Footer from '@pages/home/footer/Footer';
import Home from '@pages/home/Home';
import NewsPage from '@pages/news/NewsPage';
import About from '@/pages/about/About';
import Destinations from '@pages/destinations/Destinations';
import Contacts from '@pages/contacts/Contacts';
import InsuranceInfo from '@pages/insurance/Insurance';

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
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/insurance" element={<InsuranceInfo />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
