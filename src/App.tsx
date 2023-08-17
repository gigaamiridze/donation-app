import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';
import { MainNavigation } from './navigation';
import { store, persistor } from './redux';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <NavigationContainer>      
          <MainNavigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  )
}

export default App;
