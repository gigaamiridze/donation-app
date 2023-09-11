import { StyleSheet } from 'react-native';
import { verticalScale, scaleFontSize } from '../../assets';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    rowGap: verticalScale(24),
  },
  loginButton: {
    marginTop: verticalScale(13),
  },
  registrationButton: {
    alignItems: 'center',
  },
  error: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: scaleFontSize(16),
    color: '#FF0000',
  },
});
