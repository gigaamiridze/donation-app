import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale, scaleFontSize } from '../../assets';

export const style = StyleSheet.create({
  badge: {
    height: verticalScale(22),
    borderRadius: horizontalScale(50),
    paddingHorizontal: horizontalScale(10),
    backgroundColor: '#145855',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Inter',
    fontSize: scaleFontSize(10),
    fontWeight: '600',
    lineHeight: scaleFontSize(12),
    letterSpacing: 0.5,
    color: '#FFFFFF',
    textAlign: 'center',
  },
});
