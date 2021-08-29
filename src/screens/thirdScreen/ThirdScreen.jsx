import React from 'react';
import thirdScreenImage from '../../images/thirdScreenImage.png';
import './thirdScreen.css';

const ThirdScreen = () => {
  return (
    <article className="article-third-screen">
      <section className="third-screen">
        <img
          src={thirdScreenImage}
          alt="example how it's shared payments simple"
          className="third-screen-image-left-content"
        />
        <section className="third-screen-right-content">
          <h2>Shared payments made simple</h2>
          <p>
            Sometimes it’s hard enough just sharing a restaurant bill. Try
            sharing that bill week in, week out and you might encounter more
            than a few snares. But not with Hapu. Simply set your rates and our
            automated payment system takes care of the rest. You need never talk
            money or who owes what.
          </p>
          <a href="#">Read how Bridget’s share (without Hapu) ended over $15</a>
        </section>
      </section>
      <hr />
    </article>
  );
};

export default ThirdScreen;
