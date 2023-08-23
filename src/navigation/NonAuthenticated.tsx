import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Login, Registration } from '../screens';
import { Routes } from '../constants';

const Stack = createStackNavigator();

function NonAuthenticated() {
  return (
    <Stack.Navigator
      initialRouteName={Routes.LOGIN}
      screenOptions={{ header: () => null, headerShown: false }}
    >
      <Stack.Screen name={Routes.LOGIN} component={Login} />
      <Stack.Screen name={Routes.REGISTRATION} component={Registration} />
    </Stack.Navigator>
  )
}

export default NonAuthenticated;
