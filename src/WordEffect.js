import React from 'react';

const glassEffectStyles = {
  container: {
    position: 'relative',
    fontFamily: 'sans-serif',
    marginTop: '320px',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '90%',
  },
  box: {
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.074)',
    border: '2px solid rgba(255, 255, 255, 0.222)',
    WebkitBackdropFilter: 'blur(20px)',
    backdropFilter: 'blur(20px)',
    borderRadius: '0.7rem',
    transition: 'all ease 0.3s',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  "box:hover": {
    boxShadow: '0px 0px 20px 10px #ea8b19',
    border: '1px solid rgba(255, 255, 255, 0.454)',
  },
  wordEffectContainer: {
    position: 'absolute',
    top: '4%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'rgba(45, 45, 45, 1)',
    fontSize: '130px',
    textAlign: 'center',
    lineHeight: '1',
    margin: '0',
    letterSpacing: '-0.5rem',
  },
  wordEffectFlicker: {
    content: '!',
    position: 'absolute',
    overflow: 'hidden',
    color: '#ffcc00',
    width: '100%',
    zIndex: '5',
    textShadow: 'none',
    left: '92.5%',
    textAlign: 'left',
    animation: 'flicker 3s linear infinite',
  },
};

const WordEffect = () => {
  return (
    <div style={glassEffectStyles.container}>
      <div className="box" style={glassEffectStyles.box}></div>
      <div style={glassEffectStyles.wordEffectContainer}>
        <h2>
          Regalos!
        </h2>
      </div>
    </div>
  );
};

export default WordEffect;
