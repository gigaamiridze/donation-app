import React from 'react';
import { SafeAreaView, ScrollView, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BackButton, Header } from '../../components';
import { globalStyle } from '../../assets';
import { style } from './style';

function Registration() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={globalStyle.screenContainer}>
      <BackButton onPress={() => navigation.goBack()} />
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.container}
      >
        <Header title='Hello and Welcome!' type={1} />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Registration;
