import React from 'react';
import { View, Text } from 'react-native';
import { IBadgeProps } from '../../interfaces';
import { verticalScale, scaleFontSize } from '../../assets';
import { style } from './style';

function Badge(props: IBadgeProps) {
  const { title, fontSize, lineHeight, height } = props;

  return (
    <View style={[style.badge, height ? { height: verticalScale(height) } : null]}>
      <Text 
        style={
          [
            style.title, 
            fontSize && lineHeight ? { 
              fontSize: scaleFontSize(fontSize), 
              lineHeight: scaleFontSize(lineHeight) 
            } : null
          ]
        }
      >
        {title}
      </Text>
    </View>
  )
}

export default Badge;
