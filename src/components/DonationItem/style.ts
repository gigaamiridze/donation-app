import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale } from '../../assets';

export const style = StyleSheet.create({
  donationItem: {
    width: '47%',
  },
  image: {
    width: '100%',
    height: verticalScale(170),
    borderRadius: horizontalScale(20),
  },
  badge: {
    position: 'absolute',
    zIndex: 1,
    top: 13,
    left: 10,
  },
  donationInfo: {
    flexDirection: 'column',
    rowGap: 5,
    marginTop: verticalScale(16),
  },
});
