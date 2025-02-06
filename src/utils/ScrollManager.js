import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollManager = () => {
  const location = useLocation();

  useEffect(() => {
    // Восстанавливаем скролл-позицию при переходе
    const savedScrollY = sessionStorage.getItem(`scroll-${location.pathname}`);
    if (savedScrollY !== null) {
      window.scrollTo(0, parseInt(savedScrollY, 10));
    }
  }, [location.pathname]);

  useEffect(() => {
    const saveScrollPosition = () => {
      sessionStorage.setItem(`scroll-${location.pathname}`, window.scrollY);
    };

    // Сохраняем скролл перед уходом со страницы
    window.addEventListener("scroll", saveScrollPosition);

    return () => {
      window.removeEventListener("scroll", saveScrollPosition);
    };
  }, [location.pathname]);

  return null;
};

export default ScrollManager;
