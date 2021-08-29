import FirstScreen from './screens/firstScreen/FirstScreen';
import FirstScreenFooter from './components/firstScreenFooter/FirstScreenFooter';
import SecondScreen from './screens/secondScreen/SecondScreen';
import ThirdScreen from './screens/thirdScreen/ThirdScreen';
import FourthScreen from './screens/fourthScreen/FourthScreen';
import FifthScreen from './screens/fifthScreen/FifthScreen';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      <FirstScreen />
      <FirstScreenFooter />
      <SecondScreen />
      <ThirdScreen />
      <FourthScreen />
      <FifthScreen />
      <Footer />
    </div>
  );
}

export default App;
