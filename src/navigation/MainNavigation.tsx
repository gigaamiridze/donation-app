import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Login, DonationItem } from '../screens';
import { Routes } from '../constants';

const Stack = createStackNavigator();

function MainNavigation() {
  return (
    <Stack.Navigator
      initialRouteName={Routes.LOGIN}
      screenOptions={{ header: () => null, headerShown: false }}
    >
      <Stack.Screen name={Routes.HOME} component={Home} />
      <Stack.Screen name={Routes.LOGIN} component={Login} />
      <Stack.Screen name={Routes.DONATION_ITEM} component={DonationItem} />
    </Stack.Navigator>
  )
}

export default MainNavigation;
