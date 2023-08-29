import React from 'react';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { SafeAreaView, ScrollView, Image, View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { IDonationScreenParams } from '../../interfaces';
import { selectDonationsState } from '../../redux';
import { globalStyle } from '../../assets';
import { Routes } from '../../constants';
import { BackButton, Badge, Header, Button } from '../../components';
import { style } from './style';

function DonationItem() {
  const { selectedDonationInformation } = useSelector(selectDonationsState);
  const navigation = useNavigation();  
  const route = useRoute<RouteProp<Record<string, IDonationScreenParams>, string>>();
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
        <Badge 
          title={categoryInformation.name}
          fontSize={14}
          lineHeight={17}
          height={27}
        />
        <View style={style.title}>
          <Header title={selectedDonationInformation?.name} type={1} />
        </View>
        <Text style={style.description}>{selectedDonationInformation?.description}</Text>
      </ScrollView>
      <View style={style.button}>
        <Button 
          title='Donate' 
          onPress={() => navigation.navigate(Routes.PAYMENT)} 
        />
      </View>
    </SafeAreaView>
  )
}

export default DonationItem;
