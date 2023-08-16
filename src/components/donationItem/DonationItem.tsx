import React from 'react';
import { View, Image } from 'react-native';
import { Badge, Header } from '../../components';
import { IDonationItemProps } from '../../interfaces';
import { style } from './style';

function DonationItem(props: IDonationItemProps) {
  const { uri, badgeTitle, donationTitle, price } = props;

  return (
    <View>
      <View>
        <Badge title={badgeTitle} />
        <Image 
          resizeMode='contain'
          source={{ uri: uri }}
          style={style.image}
        />
      </View>
      <Header title={donationTitle} type={3} />
      <Header 
        title={`$${price.toFixed(2)}`} 
        type={3} 
        color='#156CF7' 
      />
    </View>
  )
}

export default DonationItem;
