import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '@components/Header';
import Footer from '@/components/Footer';
import TourForm from '@components/TourForm';
import Home from '@pages/home/Home';
import NewsPage from '@pages/news/NewsPage';
import ScrollRestoration from '@/utils/ScrollRestoration';

export function App() {
  return (
    <BrowserRouter>
      <ScrollRestoration />
      <Header />
      <TourForm />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<NewsPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
