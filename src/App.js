// App.js
import React from 'react';
import ClickButton from './componants/ClickButton';
import ClickCounterComponent from './componants/ClickCounterComponent';
import ClickCounterComponent2 from './componants/ClickCounterComponent2';
import UseMemoComponent from './componants/UseMemoComponent';  
import { ButtonProvider } from './componants/ButtonContext';



function App() {
  return (
    <ButtonProvider>
      <div>
        <h1>Exemples Hook</h1>
        <ClickCounterComponent />
        <ClickCounterComponent2 />
        <ClickButton />
        <UseMemoComponent /> 
      </div>
    </ButtonProvider>
  );
}

export default App;
