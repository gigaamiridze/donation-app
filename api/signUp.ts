import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

export const signUp = async (fullName: string, email: string, password: string) => {
  try {
    const { user } = await auth().createUserWithEmailAndPassword(email, password);
    await user.updateProfile({ displayName: fullName });

    return {
      status: true,
      success: 'You have successfully registered.',
    }
  } catch (error) {
    const authError = error as FirebaseAuthTypes.NativeFirebaseAuthError;

    if (authError.code === 'auth/email-already-in-use') {
      return {
        status: false,
        error: 'The email you entered is already in use.',
      }
    } else if (authError.code === 'auth/invalid-email') {
      return {
        status: false,
        error: 'Please enter a valid email address.',
      }
    }

    return {
      status: false,
      error: 'Something went wrong.',
    }
  }
}
