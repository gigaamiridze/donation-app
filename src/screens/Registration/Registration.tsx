import React from 'react';
import { SafeAreaView, ScrollView, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BackButton } from '../../components';
import { globalStyle } from '../../assets';
import { style } from './style';

function Registration() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={globalStyle.screenContainer}>
      <BackButton onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text>Registration</Text>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Registration;
