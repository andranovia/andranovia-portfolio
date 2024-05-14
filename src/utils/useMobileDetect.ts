import { useEffect, useState } from 'react';

const useMobileDetect = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      const mobileQuery = window.matchMedia('(max-width: 768px)');
      const tabletQuery = window.matchMedia('(min-width: 768px) and (max-width: 1024px)');
      setIsMobile(mobileQuery.matches);
      setIsTablet(tabletQuery.matches);
    };

    if (typeof window !== 'undefined') {
      checkIfMobile();
      window.addEventListener('resize', checkIfMobile);
      return () => window.removeEventListener('resize', checkIfMobile);
    }
  }, []);

  return { isMobile, isTablet };
};

export default useMobileDetect;
