import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '@components/Header';
import Footer from '@pages/home/footer/Footer';
import Home from '@pages/home/Home';
import NewsPage from '@pages/news/NewsPage';
import ScrollRestoration from '@/utils/ScrollRestoration';

export function App() {
  return (
    <BrowserRouter>
      <ScrollRestoration />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<NewsPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
