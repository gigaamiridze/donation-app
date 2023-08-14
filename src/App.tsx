import React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { MainNavigation } from './navigation';
import { globalStyle } from './assets';

function App(): JSX.Element {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <NavigationContainer>      
        <MainNavigation />
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default App;
