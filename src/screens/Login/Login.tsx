import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Header, Input, Button } from '../../components';
import { globalStyle } from '../../assets';
import { Routes } from '../../constants';
import { style } from './style';

function Login() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigation = useNavigation();

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
        <Pressable 
          style={style.registrationButton}
          onPress={() => navigation.navigate(Routes.REGISTRATION)}
        >
          <Header title='Don’t have an account?' type={3} color='#156CF7' />
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Login;
