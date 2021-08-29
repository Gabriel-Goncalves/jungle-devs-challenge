import React from 'react';
import ArticleSecondScreen from '../../components/articleSecondScreen/ArticleSecondScreen';
import FormSecondScreen from '../../components/formSecondScreen/FormSecondScreen';
import './secondScreen.css';

const SecondScreen = () => {
  return (
    <div className="second-screen">
      <ArticleSecondScreen />
      <hr />
      <FormSecondScreen />
      <hr />
    </div>
  );
};

export default SecondScreen;
