import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale, scaleFontSize } from '../../assets';

export const style = StyleSheet.create({
  homeScreenContainer: {
    flexDirection: 'column',
    rowGap: verticalScale(20),
    paddingVertical: verticalScale(20), 
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerIntroText: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: scaleFontSize(16),
    lineHeight: scaleFontSize(19),
    letterSpacing: 0.5,
    color: '#636776',
    marginBottom: verticalScale(5),
  },
  profileImage: {
    width: horizontalScale(50),
    height: verticalScale(50),
    marginBottom: verticalScale(8),
  },
  highlightedBanner: {
    width: '100%',
    height: verticalScale(160),
  },
  categories: {
    flexDirection: 'column',
    rowGap: verticalScale(16),
    paddingLeft: horizontalScale(24),
  },
  categoryItem: {
    marginRight: horizontalScale(10),
  },
  donationItemsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    columnGap: horizontalScale(17),
    rowGap: verticalScale(23),
  },
});
