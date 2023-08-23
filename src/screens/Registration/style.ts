import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    rowGap: 24,
  },
  registrationButton: {
    marginTop: 13,
  },
  success: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 16,
    color: '#28a745',
  },
  error: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 16,
    color: '#FF0000',
  },
});
