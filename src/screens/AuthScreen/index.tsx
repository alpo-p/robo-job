import React, { useEffect } from 'react'
import { Text } from 'react-native'
import * as Google from 'expo-google-app-auth'
import { IOS_CLIENT_ID } from '@env'
import {
  getAuth,
  GoogleAuthProvider,
  signInWithCredential,
} from '@firebase/auth'
import { useNavigation } from '@react-navigation/native'
import { SignInWithGoogleButton } from './components/SignInWithGoogleButton'

import AuthStorage from '../../utils/authStorage'
import useAuthStorage from '../../hooks/useAuthStorage'
import { SafeContainer } from '../../common/components/SafeContainer'

const AuthScreen: React.FC = () => {
  const auth = getAuth()
  const authStorage: AuthStorage = useAuthStorage()
  const navigation = useNavigation()

  const signInWithTokenAndNavigateToRoot = async (token: string) => {
    const credential = GoogleAuthProvider.credential(null, token)

    // TODO: This throws an error Firebase: Unsuccessful check authorization response from Google: {]
    // when have waited for a while an come back
    // The token is still the same, but for some reason it doens't work
    // maybe Google.logInAsync() is needed for some reason again..?
    // https://stackoverflow.com/questions/40450850/error-google-id-token-is-not-allowed-to-be-used-with-this-application-firebase
    await signInWithCredential(auth, credential)
    // @ts-ignore
    navigation.navigate('RootNavigator')
  }

  useEffect(() => {
    const tryToSignInUserFromAuthStorage = async () => {
      const token = await authStorage.getAccessToken()
      if (token) {
        signInWithTokenAndNavigateToRoot(token)
      }
    }
    tryToSignInUserFromAuthStorage()
  })

  const signInWithGoogleAndReturnAccessToken = async () => {
    try {
      const result = await Google.logInAsync({
        iosClientId: IOS_CLIENT_ID,
        scopes: ['email'],
      })

      if (result.type === 'success') {
        return result.accessToken
      }
    } catch (e) {
      console.error('Error signing in with Google')
    }
    return null
  }

  const handleSignIn = async () => {
    const token = await signInWithGoogleAndReturnAccessToken()
    if (token) {
      await authStorage.setAccessToken(token)
      signInWithTokenAndNavigateToRoot(token)
    }
  }

  return (
    <SafeContainer>
      <Text>Sign in by clicking below</Text>
      <SignInWithGoogleButton onPress={() => handleSignIn()} />
    </SafeContainer>
  )
}

export default AuthScreen