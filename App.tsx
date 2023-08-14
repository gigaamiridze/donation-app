import React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from './src/screens';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <SafeAreaView>
        <Home />
      </SafeAreaView>
    </NavigationContainer>
  )
}

export default App;
