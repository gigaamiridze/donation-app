import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BackButton, Header, Input, Button } from '../../components';
import { globalStyle } from '../../assets';
import { signUp } from '../../../api';
import { style } from './style';

function Registration() {
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [success, setSuccess] = useState<string>('');
  const [error, setError] = useState<string | undefined>('');
  const navigation = useNavigation();

  return (
    <SafeAreaView style={globalStyle.screenContainer}>
      <BackButton onPress={() => navigation.goBack()} />
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.container}
      >
        <Header title='Hello and Welcome!' type={1} />
        <Input 
          label='First & Last Name'
          placeholder='Enter your full name...'
          onChangeText={value => setFullName(value)}
        />
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
        {success.length > 0 && <Text style={style.success}>{success}</Text>}
        <View style={style.registrationButton}>
          <Button 
            title='Register' 
            isDisabled={fullName.length <= 5 || email.length <= 5 || password.length <= 8}
            onPress={async () => {
              const result = await signUp(fullName, email, password);
              if (result.success) {
                setError('');
                setSuccess('You have successfully registered.')
                setTimeout(() => navigation.goBack(), 3000);
              } else {
                setError(result.error);
              }
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Registration;
