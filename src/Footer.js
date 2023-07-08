import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="bubbles">
        {/* Add the bubble elements dynamically */}
        {[...Array(128)].map((_, index) => (
          <div
            key={index}
            className="bubble"
            style={{
              "--size": `${2 + Math.random() * 4}rem`,
              "--distance": `${6 + Math.random() * 4}rem`,
              "--position": `${-5 + Math.random() * 110}%`,
              "--time": `${2 + Math.random() * 2}s`,
              "--delay": `-${1 * (2 + Math.random() * 2)}s`,
            }}
          ></div>
        ))}
      </div>
      <div className="content">
        {/* Add your content here */}
        {/* Replace the existing HTML structure with your desired content */}
      </div>
    </div>
  );
};

export default Footer;
