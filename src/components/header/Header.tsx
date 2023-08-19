import React from 'react';
import { Text } from 'react-native';
import { IHeaderProps } from '../../interfaces';
import { style } from './style';

function Header(props: IHeaderProps) {
  const { title, type, color, numberOfLines } = props;

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
    <Text 
      numberOfLines={numberOfLines && numberOfLines}
      style={
        [
          style.title,
          styleToApply(),
          color ? { color: color } : null, 
        ]
      }
    >
      {title}
    </Text>
  )
}

export default Header;
