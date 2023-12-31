import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Header, Search, Tab, DonationItem } from '../../components';
import { ICategory, IDonation } from '../../interfaces';
import { globalStyle } from '../../assets';
import { Routes } from '../../constants';
import { resetUser } from '../../redux';
import { signOut } from '../../../api';
import { style } from './style';
import {
  selectUserState,
  selectCategoriesState,
  selectDonationsState,
  updateSelectedCategoryId,
  updateSelectedDonationId,
  updateSelectedDonationInformation
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
  const { displayName } = useSelector(selectUserState);
  const { categories, selectedCategoryId } = useSelector(selectCategoriesState);
  const { donations } = useSelector(selectDonationsState);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [donationItems, setDonationItems] = useState<IDonation[]>([]);
  const [categoryPage, setCategoryPage] = useState<number>(1);
  const [categoryList, setCategoryList] = useState<ICategory[]>([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState<boolean>(false);
  const categoryPageSize = 4;

  useEffect(() => {
    setIsLoadingCategories(true);
    setCategoryList(pagination(categories, categoryPage, categoryPageSize));
    setCategoryPage(prev => prev + 1);
    setIsLoadingCategories(false);
  }, []);

  useEffect(() => {
    const filteredDonations = donations.filter(item => item.categoryIds.includes(selectedCategoryId));
    setDonationItems(filteredDonations);
  }, [selectedCategoryId]);

  const pagination = (items: ICategory[], pageNumber: number, pageSize: number) => {
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= items.length) {
      return [];
    }
    return items.slice(startIndex, endIndex);
  };

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
                  title={`${displayName} 👋`}
                  type={1}
                />
              </View>
              <View>
                <Image
                  resizeMode='contain'
                  source={require('../../assets/images/profile.png')}
                  style={style.profileImage}
                />
                <Pressable
                  onPress={async () => {
                    dispatch(resetUser());
                    await signOut();
                  }}
                >
                  <Header title='Logout' type={3} color={'#156CF7'} />
                </Pressable>
              </View>
            </View>
            <View style={globalStyle.paddingHorizontal}>
              <Search
                placeholder='Search'
                onSearch={() => { }}
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
                onEndReachedThreshold={0.5}
                onEndReached={() => {
                  if (isLoadingCategories) return true;
                  setIsLoadingCategories(true);
                  let newData = pagination(categories, categoryPage, categoryPageSize);
                  if (newData.length > 0) {
                    setCategoryList(prevState => [...prevState, ...newData]);
                    setCategoryPage(prevState => prevState + 1);
                  }
                  setIsLoadingCategories(false);
                }}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={categoryList}
                keyExtractor={(item) => item.categoryId.toString()}
                renderItem={({ item, index }) => (
                  <View
                    key={item.categoryId}
                    style={style.categoryItem}
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
            {donationItems.length > 0 && (
              <View style={[style.donationItemsContainer, globalStyle.paddingHorizontal]}>
                {donationItems.map(item => {
                  const categoryInformation = categories.find(
                    item => item.categoryId === selectedCategoryId,
                  );

                  return (
                    <DonationItem
                      key={item.donationItemId}
                      donationItemId={item.donationItemId}
                      uri={item.image}
                      badgeTitle={categoryInformation?.name}
                      donationTitle={item.name}
                      price={parseFloat(item.price)}
                      onPress={donationItemId => {
                        dispatch(updateSelectedDonationId(donationItemId));
                        dispatch(updateSelectedDonationInformation(donationItemId));
                        navigation.navigate(Routes.DONATION_ITEM, { categoryInformation });
                      }}
                    />
                  )
                })}
              </View>
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

export default Home;
