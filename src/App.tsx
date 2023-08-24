import React, { useEffect, useRef } from 'react';
import { AppState } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigation } from './navigation';
import { store, persistor } from './redux';
import { checkToken } from '../api';

function App(): JSX.Element {
  const appState = useRef(AppState.currentState);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', async nextAppState => {
      if (appState.current.match(/inactive|background/) && nextAppState === 'active') {
        await checkToken();
      }
      appState.current = nextAppState;
    });
    checkToken();
  }, []);
  
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <NavigationContainer>      
          <RootNavigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  )
}

export default App;
