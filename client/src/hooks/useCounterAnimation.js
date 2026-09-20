import { useEffect, useRef, useState } from 'react';

const useCounterAnimation = (target, duration = 2000, suffix = '') => {
  const [count, setCount] = useState('0');
  const ref = useRef(null);
  const targetValue = parseFloat(target);
  const isDecimal = String(target).includes('.');

  useEffect(() => {
    let observer;
    
    if (ref.current) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const start = performance.now();

              const update = (now) => {
                const elapsed = now - start;
                const progress = Math.min(elapsed / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                const current = eased * targetValue;

                if (isDecimal) {
                  setCount(current.toFixed(1) + suffix);
                } else {
                  setCount(Math.round(current) + suffix);
                }

                if (progress < 1) {
                  requestAnimationFrame(update);
                }
              };

              requestAnimationFrame(update);
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.5 }
      );
      
      observer.observe(ref.current);
    }

    return () => {
      if (observer && ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [targetValue, duration, isDecimal, suffix]);

  return { count, ref };
};

export default useCounterAnimation;
