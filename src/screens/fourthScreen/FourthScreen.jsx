import React from 'react';
import fourthScreenImage from '../../images/fourthScreenImage.png';
import './fourthScreen.css';

const FourthScreen = () => {
  return (
    <article className="article-fourth-screen">
      <section className="fourth-screen-top-content">
        <h2>A framework built for the long term</h2>
        <p>
          Childcare is for the long term. And you need a framework you can count
          on that gives your share long term viability and success. That’s why
          we’ve defined Hapu around our three tribal principles; clearly defined
          process, transparency over money and equality of participation.
        </p>
        <a href="#">Read how Hapu’s tribal background defines our app</a>
      </section>
      <img src={fourthScreenImage} alt="Exemple a user Blilling History" />
      <hr />
    </article>
  );
};

export default FourthScreen;
