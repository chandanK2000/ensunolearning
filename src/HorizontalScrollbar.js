import React, { useState, useEffect } from 'react';
import './HorizontalScrollbar.css';

function HorizontalScrollbar() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.clientHeight;
      const scrollPosition = window.scrollY;
      const maxScroll = documentHeight - windowHeight;
      const percentage = (scrollPosition / maxScroll) * 100;
      setScrollPercentage(percentage);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="horizontal-scrollbar" style={{ width: `${scrollPercentage}%` }}></div>
  );
}

export default HorizontalScrollbar;
