import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

export const signUp = async (fullName: string, email: string, password: string) => {
  try {
    const userCredential = await auth().createUserWithEmailAndPassword(email, password);
    const user = userCredential.user;
    await user.updateProfile({ displayName: fullName });
    return {success: true};
  } catch (error) {
    const authError = error as FirebaseAuthTypes.NativeFirebaseAuthError;
    if (authError.code === 'auth/email-already-in-use') {
      return {error: 'The email you entered is already in use.'};
    } else if (authError.code === 'auth/invalid-email') {
      return {error: 'Please enter a valid email address.'};
    }
    return {error: 'Something went wrong with your request.'};
  }
}
