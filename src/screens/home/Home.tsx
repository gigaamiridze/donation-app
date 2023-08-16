import React from 'react';
import { SafeAreaView } from 'react-native';
import { globalStyle } from '../../assets';
import { Header, Button, Tab, Badge, Search } from '../../components';

function Home() {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <Header title='Azzahri A.' type={1} />
      <Button title='Donate' />
      <Button title='Confirm Payment' isDisabled={true} />
      <Tab title='Highlight' />
      <Tab title='Lifestyle' isInactive={true} />
      <Badge title='Environment' />
      <Search />
    </SafeAreaView>
  )
}

export default Home;
