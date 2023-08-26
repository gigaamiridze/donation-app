import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Payment, DonationItem } from '../screens';
import { Routes } from '../constants';

const Stack = createStackNavigator();

function Authenticated() {
  return (
    <Stack.Navigator
      initialRouteName={Routes.HOME}
      screenOptions={{ header: () => null, headerShown: false }}
    >
      <Stack.Screen name={Routes.HOME} component={Home} />
      <Stack.Screen name={Routes.PAYMENT} component={Payment} />
      <Stack.Screen name={Routes.DONATION_ITEM} component={DonationItem} />
    </Stack.Navigator>
  )
}

export default Authenticated;
