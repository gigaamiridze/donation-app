import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale } from '../../assets';

export const style = StyleSheet.create({
  container: {
    width: horizontalScale(44),
    height: verticalScale(44),
    marginTop: verticalScale(10),
    borderRadius: horizontalScale(26),
    backgroundColor: '#F3F5F9',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
