import React, { useState, useEffect } from 'react';
import './ScrollToTopButton.css'; 

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Add event listener to track scroll position
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to handle scroll event
  const handleScroll = () => {
    if (window.pageYOffset > 40) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Optional smooth scrolling effect
    });
  };

  return (
    <button
      className={`scroll-to-top-button ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
      title="Go to top"
    >
      Top
    </button>
  );
};

export default ScrollToTopButton;
