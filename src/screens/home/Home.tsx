import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserState, selectCategoriesState } from '../../redux';
import { globalStyle } from '../../assets';
import { style } from './style';
import { Header, Search, Tab } from '../../components';
import { 
  ScrollView, 
  SafeAreaView, 
  TouchableWithoutFeedback, 
  Keyboard, 
  View, 
  Text, 
  Image,
  Pressable,
  FlatList
} from 'react-native';

function Home() {
  const { firstName, lastName } = useSelector(selectUserState);
  const { categories, selectedCategoryId } = useSelector(selectCategoriesState);
  const dispatch = useDispatch();

  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
      accessible={false}
    >
      <SafeAreaView style={globalStyle.screenContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={style.homeScreenContainer}>
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
            <Pressable>
              <Image 
                resizeMode='stretch'
                source={require('../../assets/images/highlighted-banner.png')}
                style={style.highlightedBanner}
              />
            </Pressable>
            <View style={style.categories}>
              <Header title='Select Category' type={2} />
              <FlatList 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={categories}
                renderItem={({ item, index }) => (
                  <View style={!(index === categories.length - 1) && style.categoryItem}>
                    <Tab 
                      title={item.name} 
                      isInactive={item.categoryId !== selectedCategoryId} 
                    />
                  </View>
                )}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

export default Home;
