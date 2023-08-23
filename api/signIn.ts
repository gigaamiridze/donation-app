import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

export const signIn = async (email: string, password: string) => {
  try {
    const { user } = await auth().signInWithEmailAndPassword(email, password);
    const token = user.getIdToken();

    return {
      status: true,
      data: {
        displayName: user.displayName,
        email: user.email,
        token,
      },
    }
  } catch (error) {
    const authError = error as FirebaseAuthTypes.NativeFirebaseAuthError;

    if (authError.code === 'auth/wrong-password') {
      return {
        status: false, 
        error: 'Please enter a correct password.'
      }
    } else if (authError.code === 'auth/user-not-found') {
      return {
        status: false,
        error: 'The email you entered does not exist. Please create a new account.',
      }
    }

    return {
      status: false,
      error: 'Something went wrong.',
    }
  }
}
