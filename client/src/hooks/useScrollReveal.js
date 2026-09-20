import { useEffect, useRef } from 'react';

const useScrollReveal = () => {
  const elementsRef = useRef([]);

  const setRef = (el) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    elementsRef.current.forEach(el => observer.observe(el));

    return () => {
      elementsRef.current.forEach(el => observer.unobserve(el));
    };
  }, []);

  return { setRef };
};

export default useScrollReveal;
