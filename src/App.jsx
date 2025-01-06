import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Carousel from '@pages/home/header/Carousel';
import Header from '@pages/home/header/Header';

export function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Carousel />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
