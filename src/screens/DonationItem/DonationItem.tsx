import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { selectDonationsState } from '../../redux';
import { globalStyle } from '../../assets';
import { BackButton } from '../../components';
import { style } from './style';

function DonationItem() {
  const { selectedDonationInformation } = useSelector(selectDonationsState);
  const navigation = useNavigation();

  return (
    <SafeAreaView style={globalStyle.screenContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <BackButton onPress={() => navigation.goBack()} />
      </ScrollView>
    </SafeAreaView>
  )
}

export default DonationItem;
