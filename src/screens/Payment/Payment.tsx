import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { BackButton, Header, Button } from '../../components';
import { selectDonationsState } from '../../redux';
import { globalStyle } from '../../assets';
import { style } from './style';

function Payment() {
  const { selectedDonationInformation } = useSelector(selectDonationsState);
  const navigation = useNavigation();

  return (
    <SafeAreaView style={globalStyle.screenContainer}>
      <ScrollView>
        <BackButton onPress={() => navigation.goBack()} />
        <View style={style.paymentTitle}>
          <Header title='My Card Payment' type={1} />
        </View>
        <Header 
          title={`You are about to donate $${selectedDonationInformation?.price}`}
          type={3}
        />
      </ScrollView>
      <View style={style.button}>
        <Button title='Confirm Payment' />
      </View>
    </SafeAreaView>
  )
}

export default Payment;
