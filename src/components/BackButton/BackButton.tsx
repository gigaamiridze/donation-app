import React from 'react';
import { Pressable, Image } from 'react-native';
import { IBackButtonProps } from '../../interfaces';
import { style } from './style';

function BackButton(props: IBackButtonProps) {
  return (
    <Pressable 
      onPress={() => props.onPress()}
      style={style.container}
    >
      <Image
        resizeMode='contain'
        source={require('../../assets/images/left-arrow.png')} 
      />
    </Pressable>
  )
}

export default BackButton;
