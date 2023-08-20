import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text } from 'react-native';
import { globalStyle } from '../../assets';
import { Input } from '../../components';

function Login() {
  const [email, setEmail] = useState<string>('');

  return (
    <SafeAreaView style={globalStyle.screenContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Input 
          label='Email'
          placeholder='Enter your email...'
          keyboardType='email-address'
          onChangeText={value => setEmail(value)}
        />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Login;
