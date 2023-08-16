import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { MainNavigation } from './navigation';
import { store } from './redux';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>      
        <MainNavigation />
      </NavigationContainer>
    </Provider>
  )
}

export default App;
