import React from 'react';
import { Pressable, Text } from 'react-native';
import { IButtonProps } from '../../interfaces';
import { style } from './style';

function Button(props: IButtonProps) {
  const { title, isDisabled, onPress } = props;

  return (
    <Pressable 
      disabled={isDisabled}
      onPress={onPress ? () => onPress() : () => {}}
      style={[style.button, isDisabled && style.disabled]}
    >
      <Text style={style.title}>{title}</Text>
    </Pressable>
  )
}

export default Button;
