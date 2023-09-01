import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { SafeAreaView, ScrollView, View, Pressable, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Header, Input, Button } from '../../components';
import { globalStyle } from '../../assets';
import { Routes } from '../../constants';
import { signIn } from '../../../api';
import { logIn } from '../../redux';
import { style } from './style';

function Login() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | undefined>('');
  const navigation = useNavigation();
  const dispatch = useDispatch();

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
        {error && error.length > 0 && <Text style={style.error}>{error}</Text>}
        <View style={style.loginButton}>
          <Button 
            title='Login'
            isDisabled={email.length < 5 || password.length < 8}
            onPress={async () => {
              const result = await signIn(email, password);
              if (result.status) {
                if (result.data) {
                  dispatch(logIn(result.data));
                }
                setError('');
                navigation.navigate(Routes.HOME);
              } else {
                setError(result.error);
              }
            }}
          />
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
