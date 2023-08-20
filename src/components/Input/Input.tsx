import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { IInputProps } from '../../interfaces';
import { style } from './style';

function Input(props: IInputProps) {
  const { label, placeholder, keyboardType, secureTextEntry, onChangeText } = props;
  const [value, setValue] = useState<string>('');

  return (
    <View>
      <Text style={style.label}>{label}</Text>
      <TextInput 
        placeholder={placeholder}
        placeholderTextColor='#969AA8'
        keyboardType={keyboardType ? keyboardType : 'default'}
        secureTextEntry={secureTextEntry ? secureTextEntry : false}
        style={style.input}
        value={value}
        onChangeText={value => {
          setValue(value);
          onChangeText(value);
        }}
      />
    </View>
  )
}

export default Input;
