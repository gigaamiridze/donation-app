import React from 'react';
import { View, Text } from 'react-native';
import { IBadgeProps } from '../../interfaces';
import { style } from './style';

function Badge({ title }: IBadgeProps) {
  return (
    <View style={style.badge}>
      <Text style={style.title}>{title}</Text>
    </View>
  )
}

export default Badge;
