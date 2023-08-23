import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    rowGap: 24,
  },
  loginButton: {
    marginTop: 13,
  },
  registrationButton: {
    alignItems: 'center',
  },
  error: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 16,
    color: '#FF0000',
  },
});
