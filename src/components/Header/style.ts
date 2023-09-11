import { StyleSheet } from 'react-native';
import { scaleFontSize } from '../../assets';

export const style = StyleSheet.create({
  title: {
    fontFamily: 'Inter',
    fontWeight: '700',
    color: '#0A043C',
    letterSpacing: 0.5,
  },
  title1: {
    fontSize: scaleFontSize(24),
    lineHeight: scaleFontSize(29),
  },
  title2: {
    fontSize: scaleFontSize(18),
    lineHeight: scaleFontSize(22),
  },
  title3: {
    fontSize: scaleFontSize(16),
    lineHeight: scaleFontSize(19),
  },
});
