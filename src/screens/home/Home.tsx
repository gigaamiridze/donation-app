import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserState } from '../../redux';
import { globalStyle } from '../../assets';
import { style } from './style';
import { Header, Search } from '../../components';
import { 
  ScrollView, 
  SafeAreaView, 
  TouchableWithoutFeedback, 
  Keyboard, 
  View, 
  Text, 
  Image 
} from 'react-native';

function Home() {
  const { firstName, lastName } = useSelector(selectUserState);
  const dispatch = useDispatch();

  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
      accessible={false}
    >
      <SafeAreaView style={globalStyle.screenContainer}>
        <ScrollView>
          <View style={style.header}>
            <View>
              <Text style={style.headerIntroText}>Hello,</Text>
              <Header 
                title={`${firstName} ${lastName[0]}.👋`}
                type={1} 
              />
            </View>
            <Image 
              resizeMode='contain'
              source={require('../../assets/images/profile.png')}
              style={style.profileImage}
            />
          </View>
          <Search 
            placeholder='Search'
            onSearch={() => {}}
          />
        </ScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

export default Home;
