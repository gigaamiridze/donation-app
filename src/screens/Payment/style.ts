import { StyleSheet } from 'react-native';
import { verticalScale } from '../../assets';

export const style = StyleSheet.create({
  paymentTitle: {
    marginTop: verticalScale(15),
    marginBottom: verticalScale(10),
  },
  button: {
    paddingBottom: verticalScale(20),
  },
  cardForm: {
    height: verticalScale(190),
    marginTop: verticalScale(20),
  },
});
