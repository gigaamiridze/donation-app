import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  headerIntroText: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
    letterSpacing: 1,
    color: '#636776',
    marginBottom: 5,
  },
  profileImage: {
    width: 50,
    height: 50,
  },
});
