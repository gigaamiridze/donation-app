import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale, scaleFontSize } from '../../assets';

export const style = StyleSheet.create({
  itemInfo: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  image: {
    width: '100%',
    height: verticalScale(240),
    marginTop: verticalScale(12),
    marginBottom: verticalScale(24),
    borderRadius: horizontalScale(5),
  },
  title: {
    marginTop: verticalScale(16),
    marginBottom: verticalScale(7),
  },
  description: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: scaleFontSize(14),
    lineHeight: scaleFontSize(20),
    letterSpacing: 0.5,
    color: '#000000',
    marginBottom: verticalScale(10),
    paddingHorizontal: 7,
  },
  button: {
    paddingBottom: verticalScale(20),
  },
});
