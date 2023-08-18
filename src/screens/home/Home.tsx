import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Header, Search, Tab } from '../../components';
import { globalStyle } from '../../assets';
import { style } from './style';
import { 
  selectUserState, 
  selectCategoriesState, 
  updateSelectedCategoryId 
} from '../../redux';
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
      <SafeAreaView style={[globalStyle.flex, globalStyle.backgroundWhite]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={style.homeScreenContainer}>
            <View style={[style.header, globalStyle.paddingHorizontal]}>
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
            <View style={globalStyle.paddingHorizontal}>
              <Search 
                placeholder='Search'
                onSearch={() => {}}
              />
            </View>
            <Pressable style={globalStyle.paddingHorizontal}>
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
                  <View
                    key={item.categoryId} 
                    style={!(index === categories.length - 1) && style.categoryItem}
                  >
                    <Tab 
                      tabId={item.categoryId}
                      title={item.name} 
                      isInactive={item.categoryId !== selectedCategoryId} 
                      onPress={(value) => dispatch(updateSelectedCategoryId(value))}
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
