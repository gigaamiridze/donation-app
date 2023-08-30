import React from 'react';
import { View, Text } from 'react-native';
import { IBadgeProps } from '../../interfaces';
import { style } from './style';

function Badge(props: IBadgeProps) {
  const { title, fontSize, lineHeight, height } = props;

  return (
    <View style={[style.badge, height ? { height } : null]}>
      <Text 
        style={
          [
            style.title, 
            fontSize && lineHeight ? { fontSize, lineHeight } : null
          ]
        }
      >
        {title}
      </Text>
    </View>
  )
}

export default Badge;
