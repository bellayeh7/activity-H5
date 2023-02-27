import React from 'react';
import FirstSection from './sections/FirstSection/index'
import SecondSection from './sections/SecondSection/index'
import ThirdSection from './sections/ThirdSection/index'
import styles from './styles.module.scss'

function App() {
  return (
    <div className={styles.app}>
      <FirstSection></FirstSection>
      <SecondSection></SecondSection>
      <ThirdSection></ThirdSection>
    </div>
  );
}

export default App;
