import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './utils/ScrollTop';

import Header from '@components/Header';
import Home from '@pages/home/Home';
import TeamSection from './pages/team/TeamSection';
import About from '@/pages/about/About';

import Destinations from '@pages/destinations/Destinations';
import Contacts from '@pages/contacts/Contacts';
import InsuranceInfo from '@pages/insurance/Insurance';

import NewsPage from '@pages/news/NewsPage';
import MainNews from '@pages/news/MainNews';
import FirstNews from '@pages/news/FirstNews';
import SecondNews from '@pages/news/SecondNews';
import ThirdNews from '@pages/news/ThirdNews';
import FourthNews from '@pages/news/FourthNews';

import Footer from '@pages/home/footer/Footer';

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<TeamSection />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/insurance" element={<InsuranceInfo />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/news/main-news" element={<MainNews />} />
        <Route path="/news/1" element={<FirstNews />} />
        <Route path="/news/2" element={<SecondNews />} />
        <Route path="/news/3" element={<ThirdNews />} />
        <Route path="/news/4" element={<FourthNews />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
