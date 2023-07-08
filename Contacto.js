import React from 'react';
import './Contacto.scss';
import yoImage from './assets/background frames/yo.png';

const Contacto = () => {
  const handleLinkClick = () => {
    window.open("https://calendly.com/oscarestoa/hello", "_blank");
  };

  return (
    <div className="box1">
      <div className="content">
        <img src={yoImage} alt="Me" />
        <h5>
          ¡La primera consulta es gratis! <br />
          <span></span>
        </h5>
        <a href="#" onClick={handleLinkClick}>Invierte en tu futuro</a>
      </div>
    </div>
  );
};

export default Contacto;
