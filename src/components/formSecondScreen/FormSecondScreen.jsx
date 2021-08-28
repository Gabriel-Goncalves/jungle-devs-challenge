import React from 'react';

const FormSecondScreen = () => {
  return (
    <section className="form-second-screen">
      <h4>Are you a parent without a nanny and looking to share?</h4>
      <p>
        Leave us your name and email and we’ll update you as soon as a share
        becomes available in your area!
      </p>
      <form action="submit" className="form-to-newsletter">
        <input type="text" placeholder="Your name" />
        <input type="text" placeholder="Your email" />
        <button type="button">Send</button>
      </form>
    </section>
  );
};

export default FormSecondScreen;
