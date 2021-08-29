import React from 'react';
import axios from 'axios';
import { useState } from 'react';

const FormSecondScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [shouldShowWarning, setShouldShowWarning] = useState(false);

  const handleChangeName = ({ target: { value } }) => {
    setName(value);
  };

  const handleChangeEmail = ({ target: { value } }) => {
    setEmail(value);
  };

  const validateEmail = () => {
    const re = /.+@[A-z]+[.]com/;
    const isValidEmail = re.test(email);
    return isValidEmail
  };

  const handleClickSubmit = async () => {
    if(!validateEmail()) {
      setShouldShowWarning(true);
      setTimeout(() => setShouldShowWarning(false), 4500);
    } else {
      try {
        const response = await axios({
          method: 'post',
          url: 'https://api.jungledevs.com/api/v1/challenge-newsletter/',
          data: {
            name,
            email,
          },
        });
        console.log('response', response);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <article>
      <section className="form-second-screen">
        <h4>Are you a parent without a nanny and looking to share?</h4>
        <p>
          Leave us your name and email and we’ll update you as soon as a share
          becomes available in your area!
        </p>
        <form action="submit" className="form-to-newsletter">
          <input
            type="text"
            placeholder="Your name"
            id="input-name"
            onChange={handleChangeName}
          />
          <input
            type="text"
            placeholder="Your email"
            id="input-email"
            onChange={handleChangeEmail}
          />
          <button type="button" onClick={handleClickSubmit}>
            Send
          </button>
        </form>
      </section>
      {shouldShowWarning ? <p className="warning-invalid-email">Invalid email</p> : ''}
    </article>
  );
};

export default FormSecondScreen;
