import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  donationItem: {
    width: '47%',
  },
  image: {
    width: '100%',
    height: 170,
    borderRadius: 20,
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
