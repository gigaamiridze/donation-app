import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale, scaleFontSize } from '../../assets';

export const style = StyleSheet.create({
  tab: {
    height: verticalScale(50),
    borderRadius: horizontalScale(50),
    backgroundColor: '#2979F2',
    justifyContent: 'center',
  },
  inactiveTab: {
    backgroundColor: '#F3F5F9',
  },
  title: {
    fontFamily: 'Inter',
    fontSize: scaleFontSize(14),
    fontWeight: '500',
    lineHeight: scaleFontSize(17),
    letterSpacing: 0.5,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  inactiveTitle: {
    color: '#79869F',
  },
});
