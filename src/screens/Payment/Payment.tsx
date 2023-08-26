import React from 'react';
import { SafeAreaView, ScrollView, Text } from 'react-native';
import { globalStyle } from '../../assets';
import { style } from './style';

function Payment() {
  return (
    <SafeAreaView style={globalStyle.screenContainer}>
      <ScrollView>
        <Text>Payment Screen</Text>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Payment;
