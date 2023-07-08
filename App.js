import React, { lazy, Suspense } from 'react';
import './App.css';
import Button from './Button.js';
import Button2 from './Button2.js';
import WordEffect from './WordEffect';
import AnimatedBackground from './AnimatedBackground';
import SocialMenu from './SocialMenu.js';
import Contacto from './Contacto';
import Footer from './Footer';

const LazyCoinGraphic = lazy(() => import('./CoinGraphic'));

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1 className="title">Tu Propia Pensión</h1>
        <a
          target="_blank"
          href="http://codepen.io/Moslim/"
          className="white-mode"
        ></a>
        <AnimatedBackground />
        <div className="content">
          <div className="container1">
            <p className="seo-introduction">
              ¡Bienvenido a mi web sobre inversión!😃
              <br />
              <br />
              Me comprometo a ayudarte a maximizar tus inversiones y alcanzar tus metas financieras, sean las que sean, desde el primer día 💼💰.
              <br />
              <br />
              Quiero brindarte un asesoramiento personalizado y estratégico para garantizar que tus inversiones sean rentables y seguras.
              <br />
              <br />
              Te ofrezco un servicio de consultoría de inversión online, donde te resolveré todas tus dudas sobre cuáles son las mejores estrategias y oportunidades de inversión adaptadas a tus objetivos💡📈. Ya sea que estés buscando diversificar tu cartera, optimizar tus inversiones existentes o explorar nuevas oportunidades de crecimiento, estoy aquí para ayudarte en cada paso del camino.
              <br />
              <br />
              Para ayudarte aún más, tengo dos regalos exclusivos para ti🎁📘.
              <br />
              <br />
              El primero es un ebook sobre criptomonedas 📚, donde encontrarás valiosos consejos y nociones básicas sobre criptomonedas que has de conocer sobretodo si estás empezando .
            </p>
            <p className="seo-fiscalidad">
              Pero eso no es todo. También ofrezco otro ebook gratuito sobre fiscalidad💼💰, que te proporcionará información importante sobre los aspectos fiscales relacionados con las inversiones. Descarga mi ebook gratuito sobre fiscalidad haciendo clic en el botón siguiente 📖.
            </p>
            <p className="seo-redes">
              ¡No esperes más! Aprovecha mis regalos exclusivos. Además, te invito a seguirme en mis redes sociales para estar al tanto de las últimas novedades financieras. Haz clic en los botones de las redes sociales y únete a nuestra comunidad! 🌐📲👍
            </p>
            <p className="seo-contacto">
            ¡No esperes más para aclarar todas tus dudas! 😊📞. Haz clic en mi cara y reserva una consulta gratuita y personalizada.
            <br />
            <br />
            Estoy aquí para brindarte la tranquilidad que necesitas. Recuerda que mi objetivo es ayudarte, y nunca te pediré dinero para invertirlo yo en tu lugar, ya que eso es algo que solamente hacen los estafadores. ¡Estoy emocionado de poder acompañarte en tu camino hacia el éxito! 💼💰
            </p>
            <WordEffect /> {/* regalos*/}
          </div>
          <div className="bg-black py-5 d-flex justify-content-center align-items-center">
            <div className="obj">
              <div className="objchild">
                <span className="impuestos"></span>
              </div>
            </div>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <LazyCoinGraphic />
          </Suspense>
          <Button />
          <Button2 />
          <SocialMenu />
          <Contacto />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
