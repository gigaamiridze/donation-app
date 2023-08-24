import auth from '@react-native-firebase/auth';
import { store, updateToken } from '../src/redux';

export const checkToken = () => {
  try {
    const response = auth().currentUser?.getIdToken(true);
    store.dispatch(updateToken(response));
    return response;
  } catch (error) {
    return error;
  }
}
