import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Pressable } from 'react-native';
import { globalStyle } from '../../assets';
import { Header, Input, Button } from '../../components';
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
        <View style={style.loginButton}>
          <Button title='Login' />
        </View>
        <Pressable style={style.registrationButton}>
          <Header title='Don’t have an account?' type={3} color='#156CF7' />
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Login;
