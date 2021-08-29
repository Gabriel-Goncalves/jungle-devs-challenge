import React from 'react';
import './firstScreenFooter.css';
import ProfileImage from '../../images/ProfileImage.png';
import { useSelector } from 'react-redux';

const FirstScreenFooter = () => {
  const nannys = useSelector(state => state.nannys);
  const { nannyName, local, daysWorking, workTimeFinish, workTimeStart } =
    nannys[0];
  const daysWorkingAsString = daysWorking.join(', ');

  return (
    <section className="first-screen-footer">
      <img src={ProfileImage} alt="profile random user" />
      <p>
        <a href="#" className="link-profile">
          {nannyName}'s day care available <br className="break-line" /> now in{' '}
          {local}
        </a>{' '}
        <br className="break-line" /> {daysWorkingAsString} - {workTimeStart} -{' '}
        {workTimeFinish}
      </p>
    </section>
  );
};

export default FirstScreenFooter;
