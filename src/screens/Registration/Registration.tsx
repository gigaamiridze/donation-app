import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BackButton, Header, Input, Button } from '../../components';
import { globalStyle } from '../../assets';
import { createUser } from '../../../api';
import { style } from './style';

function Registration() {
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
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
        <View style={style.registrationButton}>
          <Button 
            title='Register' 
            onPress={async () => await createUser(fullName, email, password)}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Registration;
