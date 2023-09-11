import { StyleSheet } from 'react-native';
import { verticalScale, scaleFontSize } from '../../assets';

export const style = StyleSheet.create({
  label: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: scaleFontSize(12),
    lineHeight: scaleFontSize(15),
    letterSpacing: 0.5,
    color: '#36455A',
  },
  input: {
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: scaleFontSize(16),
    lineHeight: scaleFontSize(20),
    letterSpacing: 0.5,
    color: '#022150',
    paddingVertical: verticalScale(12),
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(167, 167, 167, 0.5)',
  },
});
