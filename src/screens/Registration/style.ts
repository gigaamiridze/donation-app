import { StyleSheet } from 'react-native';
import { verticalScale, scaleFontSize } from '../../assets';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    rowGap: verticalScale(24),
  },
  registrationButton: {
    marginTop: verticalScale(13),
  },
  success: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: scaleFontSize(16),
    color: '#28a745',
  },
  error: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: scaleFontSize(16),
    color: '#FF0000',
  },
});
