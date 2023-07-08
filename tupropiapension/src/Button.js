import React from 'react';
import styles from './Button.module.css'; // Import the styles using CSS Modules


const Button = () => {
  const handleButtonClick = () => {
    window.open('https://oscarestoa.com/', '_blank'); // Open URL in a new window/tab
  };

  return (
    <div className={styles.button} onClick={handleButtonClick}>
      <h3>Descarga mi eBook de Criptomonedas</h3>
    </div>
  );
};

export default Button;
