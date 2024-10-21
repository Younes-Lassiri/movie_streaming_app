import { useState, useEffect } from 'react';

function useScrollStatus(threshold = 50) {
  const [isFarFromTop, setIsFarFromTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > threshold) {
        setIsFarFromTop(true);
      } else {
        setIsFarFromTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  return isFarFromTop;
}

export default useScrollStatus;
