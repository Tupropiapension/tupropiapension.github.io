import React from 'react';
import './SocialMenu.scss';
import facebookLogo from './assets/background frames/facebook.png';
import twitterLogo from './assets/background frames/youtube.png';
import googlePlusLogo from './assets/background frames/instagram.png';
import youtubeLogo from './assets/background frames/tiktok.png';

const SocialMenu = () => {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const getLinkUrl = (isMobile, className) => {
    if (isMobile) {
      switch (className) {
        case 'facebook':
          return 'https://www.facebook.com/profile.php?id=100078469580873';
        case 'twitter':
          return 'https://www.youtube.com/@Tupropiapension';
        case 'googlePlus':
          return 'https://instagram.com/oscarestoa?igshid=MzNlNGNkZWQ4Mg==';
        case 'youtube':
          return 'https://www.tiktok.com/@tupropiapension';
        default:
          return '';
      }
    } else {
      switch (className) {
        case 'facebook':
          return 'https://www.facebook.com/profile.php?id=100078469580873';
        case 'twitter':
          return 'https://www.youtube.com/@Tupropiapension';
        case 'googlePlus':
          return 'https://instagram.com/oscarestoa?igshid=MzNlNGNkZWQ4Mg==';
        case 'youtube':
          return 'https://www.tiktok.com/@tupropiapension';
        default:
          return '';
      }
    }
  };

  return (
    <div className="container">
      <ul className="menu">
        <li>
          <a href={getLinkUrl(isMobile, 'facebook')} className="facebook" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-facebook"></i>
            <img className="social-logo" src={facebookLogo} alt="Facebook" />
          </a>
        </li>
        <li>
          <a href={getLinkUrl(isMobile, 'twitter')} className="twitter" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-twitter"></i>
            <img className="social-logo" src={twitterLogo} alt="Twitter" />
          </a>
        </li>
        <li>
          <a href={getLinkUrl(isMobile, 'googlePlus')} className="googlePlus" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-google-plus"></i>
            <img className="social-logo" src={googlePlusLogo} alt="Google Plus" />
          </a>
        </li>
        <li>
          <a href={getLinkUrl(isMobile, 'youtube')} className="youtube" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-youtube"></i>
            <img className="social-logo" src={youtubeLogo} alt="YouTube" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialMenu;
