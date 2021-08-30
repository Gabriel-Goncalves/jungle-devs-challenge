import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Header from '../../components/header/Header';
import exampleFirstScreen from '../../images/exampleFirstScreen.png';
import playButton from '../../images/playButton.svg';

import './firstScreen.css';

const FirstScreen = () => {
  const [title, setTitle] = useState(
    'Easily create or joing a local nanny share with Hapu',
  );
  const [description, setDescription] = useState(
    'Hapu is Airbnb for nanny share. Share your home, nanny and costs and create new flexible, affordable solutions in childcare.',
  );

  const ABTest = aOrB => {
    if (aOrB === 'a') {
      setTitle('Easily create or joing a local nanny share with Hapu');
      setDescription(
        'Hapu is Airbnb for nanny share. Share your home, nanny and costs and create new flexible, affordable solutions in childcare.',
      );
    } else {
      setTitle('Create the childcare you need at a price you can afford');
      setDescription(
        'Connect with other local families to share a nanny from as low as $10.00/hr each. Create your family profile today to get started.',
      );
    }
  };

  useEffect(() => {
    const today = new Date();
    const actualHour = today.getHours();
    if (actualHour % 2 !== 0) {
      ABTest('a');
    } else {
      ABTest('b');
    }
  }, []);

  return (
    <section className="first-screen">
      <Header />
      <article className="article-first-screen">
        <section className="left-content">
          <section className="article-title">
            <h1>{title}</h1>
          </section>
          <section className="article-description">
            <p>{description}</p>
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
