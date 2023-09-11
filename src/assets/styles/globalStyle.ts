import { StyleSheet } from 'react-native';
import { horizontalScale } from './scaling';

export const globalStyle = StyleSheet.create({
  backgroundWhite: {
    backgroundColor: '#FFFFFF',
  },
  flex: {
    flex: 1,
  },
  paddingHorizontal: {
    paddingHorizontal: horizontalScale(24),
  },
  screenContainer: {
    flex: 1,
    paddingHorizontal: horizontalScale(24),
    backgroundColor: '#FFFFFF',
  },
});
