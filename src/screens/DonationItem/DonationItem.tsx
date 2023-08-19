import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView, ScrollView, Image, View } from 'react-native';
import { useSelector } from 'react-redux';
import { selectDonationsState } from '../../redux';
import { globalStyle } from '../../assets';
import { BackButton, Badge, Header } from '../../components';
import { style } from './style';

function DonationItem() {
  const { selectedDonationInformation } = useSelector(selectDonationsState);
  const navigation = useNavigation();
  const route = useRoute();
  const { categoryInformation } = route.params;

  return (
    <SafeAreaView style={globalStyle.screenContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <BackButton onPress={() => navigation.goBack()} />
        <Image 
          resizeMode='cover'
          source={{ uri: selectedDonationInformation?.image }}
          style={style.image}
        />
        <Badge title={categoryInformation.name} />
        <View style={style.title}>
          <Header title={selectedDonationInformation?.name} type={1} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default DonationItem;
