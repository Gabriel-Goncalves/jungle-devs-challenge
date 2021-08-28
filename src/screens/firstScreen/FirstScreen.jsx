import React from 'react';
import Header from '../../components/header/Header';
import exampleFirstScreen from '../../images/exampleFirstScreen.png';
import playButton from '../../images/playButton.svg';

import './firstScreen.css';

const FirstScreen = () => {
  return (
    <section className="first-screen">
      <Header />
      <article className="article-first-screen">
        <section className="left-content">
          <section className="article-title">
            <h1>Easily create or joing a local</h1>
            <br className="break-line" />
            <h1>nanny share with Hapu</h1>
          </section>
          <section className="article-description">
            <p>
              Hapu is Airbnb for nanny share your home, nanny and costs{' '}
              <br className="break-line" />
              and create new flexible, affordable solutionsin childcare
            </p>
          </section>
          <section className="play-hapu">
            <img src={playButton} alt="play hapu action (27 seconds)" />
            <a href="#">See hapu in action (27 seconds)</a>
          </section>
        </section>
        <section className="rigth-content">
          <img
            className="exemple-first-screen"
            src={exampleFirstScreen}
            alt="Example joining with a nanny share"
          />
        </section>
      </article>
    </section>
  );
};

export default FirstScreen;
