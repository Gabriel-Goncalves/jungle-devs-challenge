import React from 'react';
import secondSreenImage from '../../images/secondScreenImage.png';
import './secondScreen.css';

const SecondScreen = () => {
  return (
    <div className="second-screen">
      <article className="article-second-screen">
        <section className="left-content-second-screen">
          <h3>
            Share your home, <br /> nanny and costs
          </h3>
          <p>
            You have a fantastic home, a fantastic nanny and wouldn’t cutting
            your costs in half be, well, fantastic?! If only it was easy to
            connect with other parents to share your costs? Well now it is, with
            Hapu.
            <a href="#" className="link-hapu">
              Hapu means tribe
            </a>{' '}
            and it’s our foundational 3 tribal principles that empowers you to
            create and manage your own tribe. A tribe that together has the
            power to create new affordable solutions in childcare that work for
            you and your community.
          </p>
          <a href="#" className="link-hapu">
            Ready to get started?
          </a>
        </section>
        <section className="right-content-second-screen">
          <img src={secondSreenImage} alt="exemple ongoing nanny share" />
        </section>
      </article>
      <hr />
    </div>
  );
};

export default SecondScreen;
