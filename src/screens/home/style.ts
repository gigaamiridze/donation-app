import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  homeScreenContainer: {
    flexDirection: 'column',
    rowGap: 20,
    paddingVertical: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerIntroText: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
    letterSpacing: 1,
    color: '#636776',
    marginBottom: 5,
  },
  profileImage: {
    width: 50,
    height: 50,
  },
  highlightedBanner: {
    width: '100%',
    height: 160,
  },
  categories: {
    flexDirection: 'column',
    rowGap: 16,
    paddingLeft: 24,
  },
  categoryItem: {
    marginRight: 10,
  },
  donationItemsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    columnGap: 17,
    rowGap: 23,
  },
});
