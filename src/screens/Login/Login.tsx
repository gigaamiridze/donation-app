import React, { useState } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { globalStyle } from '../../assets';
import { Header, Input } from '../../components';
import { style } from './style';

function Login() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <SafeAreaView style={globalStyle.screenContainer}>
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.container}
      >
        <Header title='Welcome Back' type={1} />
        <Input 
          label='Email'
          placeholder='Enter your email...'
          keyboardType='email-address'
          onChangeText={value => setEmail(value)}
        />
        <Input 
          label='Password'
          placeholder='******'
          secureTextEntry={true}
          onChangeText={value => setPassword(value)}
        />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Login;
