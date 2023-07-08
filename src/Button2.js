import React from 'react';
import styles from './Button2.module.css'; // Import the styles using CSS Modules


const Button = () => {
  const handleButtonClick = () => {
    window.open('https://oscarestoa.com/', '_blank'); // Open URL in a new window/tab
  };

  return (
    <div className={styles.button} onClick={handleButtonClick}>
      <h4>Descarga mi eBook de Fiscalidad</h4>
    </div>
  );
};

export default Button;
