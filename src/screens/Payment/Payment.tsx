import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, ScrollView, Text } from 'react-native';
import { BackButton } from '../../components';
import { globalStyle } from '../../assets';
import { style } from './style';

function Payment() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={globalStyle.screenContainer}>
      <ScrollView>
        <BackButton onPress={() => navigation.goBack()} />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Payment;
