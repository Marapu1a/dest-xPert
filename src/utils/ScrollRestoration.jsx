import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollRestoration = () => {
  const location = useLocation();

  // Сохраняем позицию скролла при уходе со страницы
  useEffect(() => {
    const handleSaveScroll = () => {
      sessionStorage.setItem(location.pathname, window.scrollY);
    };

    window.addEventListener('popstate', handleSaveScroll); // Назад/вперед
    window.addEventListener('beforeunload', handleSaveScroll); // При закрытии

    return () => {
      window.removeEventListener('popstate', handleSaveScroll);
      window.removeEventListener('beforeunload', handleSaveScroll);
    };
  }, [location]);

  // Восстанавливаем позицию скролла при переходе
  useEffect(() => {
    const scrollY = sessionStorage.getItem(location.pathname);
    if (scrollY !== null) {
      window.scrollTo(0, parseInt(scrollY, 10));
    }
  }, [location]);

  return null;
};

export default ScrollRestoration;
