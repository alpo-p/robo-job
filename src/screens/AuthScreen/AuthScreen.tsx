import React from 'react'
import { Text } from 'react-native'
import * as Google from 'expo-google-app-auth'
import { IOS_CLIENT_ID } from '@env'
import { Auth, GoogleAuthProvider, signInWithCredential } from 'firebase/auth'
import { SignInWithGoogleButton } from './components/SignInWithGoogleButton'

import styled from 'styled-components/native'

interface AuthScreenProps {
  auth: Auth
}

const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const AuthScreen: React.FC<AuthScreenProps> = ({ auth }) => {
  const signInWithGoogle = async () => {
    try {
      const result = await Google.logInAsync({
        iosClientId: IOS_CLIENT_ID,
        scopes: ['email'],
      })

      if (result.type === 'success') {
        return { status: 'success', token: result.accessToken }
      }
      return { status: 'cancelled', token: null }
    } catch (e) {
      return { status: 'error', token: null }
    }
  }

  const handleButtonPress = async () => {
    const { status, token } = await signInWithGoogle()
    const credential = GoogleAuthProvider.credential(null, token)
    await signInWithCredential(auth, credential)
  }

  return (
    <Container>
      <Text>Sign in by clicking below</Text>
      <SignInWithGoogleButton onPress={() => handleButtonPress()} />
      <Text>{auth?.currentUser && auth.currentUser.email}</Text>
    </Container>
  )
}
