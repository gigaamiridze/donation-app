import React from 'react';
import { Pressable, Text } from 'react-native';
import { ITabProps } from '../../interfaces';
import { style } from './style';

function Tab(props: ITabProps) {
  const { title, isInactive } = props;

  return (
    <Pressable 
      disabled={isInactive}
      style={[style.tab, isInactive && style.inactiveTab]}
    >
      <Text 
        style={[style.title, isInactive && style.inactiveTitle]}
      >
        {title}
      </Text>
    </Pressable>
  )
}

export default Tab;
