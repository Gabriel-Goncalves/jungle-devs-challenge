import React from 'react';
import Badge from '../../images/headerLogo.svg';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <section className="header-left-content">
        <img src={Badge} alt="Badge logo" />
        <ul>
          <li>Create Your Nanny Share</li>
          <li>Browse Shares</li>
          <li>Our Story</li>
        </ul>
      </section>
      <section className="header-right-content">
        <ul>
          <li>
            <button type="button">Become a Nanny Share Host</button>
          </li>
          <li className="sign-in">Sign In</li>
        </ul>
      </section>
    </header>
  );
};

export default Header;
