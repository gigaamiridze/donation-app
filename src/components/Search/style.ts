import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale, scaleFontSize } from '../../assets';

export const style = StyleSheet.create({
  searchInputContainer: {
    height: verticalScale(50),
    borderRadius: horizontalScale(15),
    paddingHorizontal: 16,
    backgroundColor: '#F3F5F9',
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 5,
  },
  searchInput: {
    flex: 1,
    height: '100%',
    fontFamily: 'Inter',
    fontSize: scaleFontSize(14),
    lineHeight: scaleFontSize(14),
    letterSpacing: 0.5,
  },
});
