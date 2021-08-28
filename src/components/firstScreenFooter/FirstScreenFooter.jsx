import React from 'react';
import './firstScreenFooter.css';
import ProfileImage from '../../images/ProfileImage.png';

const firstScreenFooter = () => {
  return (
    <section className="first-screen-footer">
      <img src={ProfileImage} alt="profile random user" />
      <p>
        <a href="#" className="link-profile">
          Sarah's day care available <br className="break-line" /> now in North
          Sydney
        </a>{' '}
        <br className="break-line" /> Wednesday, Thursday, Friday - 7:30 - 5:30
      </p>
    </section>
  );
};

export default firstScreenFooter;
