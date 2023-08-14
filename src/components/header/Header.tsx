import React from 'react';
import { Text } from 'react-native';
import { IHeaderProps } from '../../interfaces';
import { style } from './style';

function Header(props: IHeaderProps) {
  const { title, type } = props;

  const styleToApply = () => {
    switch (type) {
      case 1:
        return style.title1;
      case 2:
        return style.title2;
      case 3:
        return style.title3;
      default:
        return style.title1;
    }
  }

  return (
    <Text style={[style.title, styleToApply()]}>{title}</Text>
  )
}

export default Header;
