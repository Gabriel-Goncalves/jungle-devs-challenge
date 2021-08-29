import React from 'react';
import fifthScreenImage from '../../images/fifthScreenImage.png';
import './fifthScreen.css';

const FifthScreen = () => {
  return (
    <article className="article-fifth-screen">
      <img src={fifthScreenImage} alt="Nanny Share Daily Diary Illustration" />
      <h2>Coming soon: Nanny Share Daily Diary!</h2>
      <p>
        With the Hapu daily diary your nanny will be able to update you and your
        sharers with photos and commentary of the day. You and sharers will
        receive notifications and you’ll be able to login to view the daily
        adventures fo your little ones. We can’t wait!
      </p>
    </article>
  );
};

export default FifthScreen;
