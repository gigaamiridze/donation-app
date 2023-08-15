import React, { useState, useRef } from 'react';
import { View, Text } from 'react-native';
import { IBadgeProps } from '../../interfaces';
import { style } from './style';

function Badge({ title }: IBadgeProps) {
  const [width, setWidth] = useState<number>(0);
  const textRef = useRef<Text>(null);
  const paddingHorizontal = 10;
  const badgeWidth = {
    width: paddingHorizontal * 2 + width,
  };

  return (
    <View style={[style.badge, badgeWidth]}>
      <Text 
        ref={textRef}
        onTextLayout={(event) => {
          setWidth(event.nativeEvent.lines[0].width);
        }}
        style={style.title}
      >
        {title}
      </Text>
    </View>
  )
}

export default Badge;
