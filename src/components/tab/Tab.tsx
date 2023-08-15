import React, { useState, useRef } from 'react';
import { Pressable, Text } from 'react-native';
import { ITabProps } from '../../interfaces';
import { style } from './style';

function Tab(props: ITabProps) {
  const { title, isInactive } = props;
  const [width, setWidth] = useState<number>(0);
  const textRef = useRef<Text>(null);
  const paddingHorizontal = 33;
  const tabWidth = {
    width: paddingHorizontal * 2 + width,
  };

  return (
    <Pressable 
      disabled={isInactive}
      style={[style.tab, isInactive && style.inactiveTab, tabWidth]}
    >
      <Text 
        ref={textRef}
        onTextLayout={(event) => {
          setWidth(event.nativeEvent.lines[0].width);
        }}
        style={[style.title, isInactive && style.inactiveTitle]}
      >
        {title}
      </Text>
    </Pressable>
  )
}

export default Tab;
