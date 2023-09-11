import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale, scaleFontSize } from '../../assets';

export const style = StyleSheet.create({
  button: {
    height: verticalScale(55),
    borderRadius: horizontalScale(50),
    backgroundColor: '#2979F2',
    justifyContent: 'center',
  },
  disabled: {
    opacity: 0.5,
  },
  title: {
    fontFamily: 'Inter',
    fontSize: scaleFontSize(16),
    fontWeight: '500',
    lineHeight: scaleFontSize(19),
    letterSpacing: 0.5,
    color: '#FFFFFF',
    textAlign: 'center',
  },
});
