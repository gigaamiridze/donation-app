import React, { useRef } from 'react';
import { Pressable, TextInput, Image } from 'react-native';
import { style } from './style';

function Search() {
  const textInputRef = useRef<TextInput>(null);

  const handleFocus = () => {
    textInputRef.current?.focus();
  }

  return (
    <Pressable 
      style={style.searchInputContainer}
      onPress={handleFocus}
    >
      <Image source={require('../../assets/images/search-icon.png')} />
      <TextInput 
        ref={textInputRef}
        placeholder='Search'
        style={style.searchInput}
      />
    </Pressable>
  )
}

export default Search;
