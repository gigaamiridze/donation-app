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
        <View style={style.badge}>
          <Badge title={badgeTitle} />
        </View>
        <Image 
          resizeMode='contain'
          source={{ uri: uri }}
          style={style.image}
        />
      </View>
      <View style={style.donationInfo}>
        <Header title={donationTitle} type={3} />
        <Header 
          title={`$${price.toFixed(2)}`} 
          type={3} 
          color='#156CF7' 
        />
      </View>
    </View>
  )
}

export default DonationItem;
