import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <SafeAreaView>
        <Text>Donation App</Text>
      </SafeAreaView>
    </NavigationContainer>
  )
}

export default App;
