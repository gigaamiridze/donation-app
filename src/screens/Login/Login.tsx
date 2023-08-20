import React from 'react';
import { SafeAreaView, ScrollView, Text } from 'react-native';
import { globalStyle } from '../../assets';

function Login() {
  return (
    <SafeAreaView style={globalStyle.screenContainer}>
      <ScrollView>
        <Text>Login</Text>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Login;
