import React from 'react';
import { Pressable, View, Image } from 'react-native';
import { Badge, Header } from '..';
import { IDonationItemProps } from '../../interfaces';
import { style } from './style';

function DonationItem(props: IDonationItemProps) {
  const { donationItemId, uri, badgeTitle, donationTitle, price, onPress } = props;

  return (
    <Pressable 
      style={style.donationItem}
      onPress={() => onPress(donationItemId)}
    >
      <View>
        <View style={style.badge}>
          <Badge title={badgeTitle} />
        </View>
        <Image 
          resizeMode='cover'
          source={{ uri: uri }}
          style={style.image}
        />
      </View>
      <View style={style.donationInfo}>
        <Header title={donationTitle} type={3} numberOfLines={1} />
        <Header 
          title={`$${price.toFixed(2)}`} 
          type={3} 
          color='#156CF7' 
        />
      </View>
    </Pressable>
  )
}

export default DonationItem;
