import React from 'react';
import { Pressable, TextInput, Image } from 'react-native';
import { style } from './style';

function Search() {
  return (
    <Pressable style={style.searchInputContainer}>
      <Image source={require('../../assets/images/search-icon.png')} />
      <TextInput 
        placeholder='Search'
        style={style.searchInput}
      />
    </Pressable>
  )
}

export default Search;
