import React from 'react';
import './firstScreenFooter.css';
import ProfileImage from '../../images/ProfileImage.png'

const firstScreenFooter = () => {
  return (
    <section className="first-screen-footer">
      <img src={ProfileImage} alt="profile random user" />
      <p>
        <a href="#">Sarah's day care available now in North Sydney</a> Wednesday, Thursday, Friday - 7:30 - 5:30
      </p>
    </section>
  )
}

export default firstScreenFooter;