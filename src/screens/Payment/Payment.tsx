import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { StripeProvider, CardForm, useConfirmPayment } from '@stripe/stripe-react-native';
import { SafeAreaView, ScrollView, View, Alert } from 'react-native';
import { selectDonationsState, selectUserState } from '../../redux';
import { BackButton, Header, Button } from '../../components';
import { globalStyle } from '../../assets';
import { Stripe } from '../../constants';
import { style } from './style';

function Payment() {
  const [isReady, setIsReady] = useState<boolean>(false);
  const { confirmPayment, loading } = useConfirmPayment();
  const { selectedDonationInformation } = useSelector(selectDonationsState);
  const { email } = useSelector(selectUserState);
  const navigation = useNavigation();
  const API_URL = 'https://stripepayment-bdgvffysyq-uc.a.run.app';

  const getPaymentIntentClientSecret = async () => {
    const response = await fetch(`${API_URL}/create-payment-intent`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        currency: 'usd',
        amount: selectedDonationInformation?.price && Number(selectedDonationInformation.price) * 100,
      }),
    });

    const { clientSecret } = await response.json();
    return clientSecret;
  }

  const handlePayment = async () => {
    const clientSecret = await getPaymentIntentClientSecret();
    const { error, paymentIntent } = await confirmPayment(clientSecret, {
      paymentMethodType: 'Card',
    });

    if (error) {
      Alert.alert('Error has occured with your payment', error.localizedMessage);
    } else if (paymentIntent) {
      Alert.alert('Successful', 'The payment was confirmed successfully!');
      setTimeout(() => navigation.goBack(), 2000);
    }
  }

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
        <StripeProvider publishableKey={Stripe.PUBLISHABLE_KEY}>
          <CardForm 
            style={style.cardForm} 
            onFormComplete={() => {
              setIsReady(true);
            }}
          />
        </StripeProvider>
      </ScrollView>
      <View style={style.button}>
        <Button 
          title='Confirm Payment' 
          isDisabled={!isReady || loading}
          onPress={async () => await handlePayment()}
        />
      </View>
    </SafeAreaView>
  )
}

export default Payment;
