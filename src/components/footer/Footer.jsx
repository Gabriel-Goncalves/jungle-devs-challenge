import React from 'react';
import calendarIcon from '../../images/calendarIcon.svg';
import footerHapuLogo from '../../images/footerHapuLogo.svg';
import footerFacebookLogo from '../../images/footerFacebookLogo.svg';
import footerTwitterLogo from '../../images/footerTwitterLogo.svg';
import footerInstagramLogo from '../../images/footerInstagramLogo.svg';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer-top-content">
        <h2>Become a nanny share host</h2>
        <p>Takes less than 5 minutes to get started</p>
        <button>
          <img src={calendarIcon} alt="A calendar icon" />
          <div className="footer-button-text">
            <span className="button-title">Create Your Nanny Share</span>
            <span className="button-subtitle">Takes less than 5 minutes</span>
          </div>
        </button>
        <a href="#">Or browse local nanny-shares</a>
      </section>
      <section className="footer-middle-content">
        <img src={footerHapuLogo} alt="hapu icon" />
        <nav>
            <h5>Share Your Nanny</h5>
            <h5>Our Story</h5>
            <h5>Blog</h5>
            <h5>Terms & Privacy</h5>
        </nav>
        <section className="footer-social-medias">
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <img src={footerFacebookLogo} alt="Facebook" />
          </a>
          <a href="https://twitter.com/home" target="_blank" rel="noreferrer">
            <img src={footerTwitterLogo} alt="Twitter" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <img src={footerInstagramLogo} alt="Instagram" />
          </a>
        </section>
      </section>
      <section className="footer-copyright">
        <hr className="hr-mobile-version"/>
        <p>Copyright © 2017 Hapu PTY Limited All rights reserved</p>
      </section>
    </footer>
  );
};

export default Footer;
