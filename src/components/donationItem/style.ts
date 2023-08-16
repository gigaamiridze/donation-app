import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  image: {
    width: 155,
    height: 170,
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
    marginTop: 16,
  },
});
