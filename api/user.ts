import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

export const createUser = async (fullName: string, email: string, password: string) => {
  try {
    const userCredential = await auth().createUserWithEmailAndPassword(email, password);
    const user = userCredential.user;
    await user.updateProfile({ displayName: fullName });
  } catch (error) {
    const authError = error as FirebaseAuthTypes.NativeFirebaseAuthError;
    if (authError.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    } else if (authError.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }
  }
}
