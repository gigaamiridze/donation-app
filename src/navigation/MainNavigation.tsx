import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, DonationItem } from '../screens';
import { Routes } from '../constants';

const Stack = createStackNavigator();

function MainNavigation() {
  return (
    <Stack.Navigator
      initialRouteName={Routes.HOME}
      screenOptions={{ header: () => null, headerShown: false }}
    >
      <Stack.Screen name={Routes.HOME} component={Home} />
      <Stack.Screen name={Routes.DONATION_ITEM} component={DonationItem} />
    </Stack.Navigator>
  )
}

export default MainNavigation;
