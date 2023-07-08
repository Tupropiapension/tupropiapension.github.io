import React, { useEffect, useState } from 'react';
import './AnimatedBackground.css';

const AnimatedBackground = () => {
  const [currentFrame, setCurrentFrame] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight - 12 * 16; // Subtract the height of the footer in pixels
      const scrollPercentage = scrollY / maxScroll;
      const totalFrames = 48;

      // Calculate the frame based on the scroll percentage
      const frameToShow = Math.ceil(totalFrames * scrollPercentage);

      // Clamp the frame number to ensure it stays within the valid range
      const clampedFrame = Math.max(1, Math.min(totalFrames, frameToShow));

      setCurrentFrame(clampedFrame);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`AnimatedBackground frame-${currentFrame}`}></div>
  );
};

export default AnimatedBackground;
