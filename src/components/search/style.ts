import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  searchInputContainer: {
    height: 50,
    borderRadius: 15,
    paddingHorizontal: 16,
    backgroundColor: '#F3F5F9',
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 5,
  },
  searchInput: {
    flex: 1,
    height: '100%',
    fontFamily: 'Inter',
    fontSize: 14,
    lineHeight: 14,
    letterSpacing: 1,
  },
});
