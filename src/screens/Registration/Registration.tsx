import React from 'react';
import { SafeAreaView, ScrollView, Text } from 'react-native';
import { globalStyle } from '../../assets';
import { style } from './style';

function Registration() {
  return (
    <SafeAreaView style={globalStyle.screenContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text>Registration</Text>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Registration;
