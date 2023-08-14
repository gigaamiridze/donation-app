import React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { globalStyle } from './src/assets';
import { Home } from './src/screens';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
        <Home />
      </SafeAreaView>
    </NavigationContainer>
  )
}

export default App;
