import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Routes } from '../constants';
import { Home } from '../screens';

const Stack = createStackNavigator();

function MainNavigation() {
  return (
    <Stack.Navigator
      initialRouteName={Routes.HOME}
      screenOptions={{ header: () => null, headerShown: false }}
    >
      <Stack.Screen name={Routes.HOME} component={Home} />
    </Stack.Navigator>
  )
}

export default MainNavigation;
