import React, { useState } from 'react';
import Onboard from './components/onboardScreen';
import Home from './components/home';

const App = () => {

  const [ showOnboard, setShowonboard ] = useState(true);
  
  const handleOnboardFinish = () => {
    setShowonboard(false);
  }

  return (
    <>
      {showOnboard ? <Onboard handleDone={handleOnboardFinish}/> : <Home />}
    </>
  );
};

export default App;