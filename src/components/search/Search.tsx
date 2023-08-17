import React, { useRef, useState } from 'react';
import { Pressable, TextInput, Image } from 'react-native';
import { ISearchProps } from '../../interfaces';
import { style } from './style';

function Search(props: ISearchProps) {
  const { placeholder, onSearch } = props;
  const textInputRef = useRef<TextInput>(null);
  const [search, setSearch] = useState<string>('');

  const handleFocus = () => {
    textInputRef.current?.focus();
  }

  const handleSearch = (searchValue: string) => {
    setSearch(searchValue);
    onSearch(searchValue);
  }

  return (
    <Pressable 
      style={style.searchInputContainer}
      onPress={handleFocus}
    >
      <Image source={require('../../assets/images/search-icon.png')} />
      <TextInput 
        ref={textInputRef}
        placeholder={placeholder}
        value={search}
        onChangeText={(value) => handleSearch(value)}
        style={style.searchInput}
      />
    </Pressable>
  )
}

export default Search;
