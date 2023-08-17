import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SafeAreaView, TouchableWithoutFeedback, Keyboard, Text } from 'react-native';
import { selectUserState, setFirstName } from '../../redux';
import { globalStyle } from '../../assets';
import { Header } from '../../components';

function Home() {
  const { firstName, lastName } = useSelector(selectUserState);
  const dispatch = useDispatch();

  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
      accessible={false}
    >
      <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
        <Header title={`${firstName} ${lastName}`} type={2} />
        <Text onPress={() => dispatch(setFirstName('G'))}>Update First Name</Text>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

export default Home;
