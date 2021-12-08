import React from 'react'
import { LogBox, Text } from 'react-native'

import styled from 'styled-components/native'
import * as Google from 'expo-google-app-auth'

import { IOS_CLIENT_ID } from '@env'
import { initializeApp } from 'firebase/app'
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithRedirect,
} from 'firebase/auth'

import sharedStyles from './src/sharedStyles'

const Container = styled.View`
  flex: 1;
  background-color: ${sharedStyles.backgroundColor};
  align-items: center;
  justify-content: center;
`

const SignInWithGoogleButton = styled.Button`
  color: green;
`

const firebaseConfig = {
  apiKey: 'AIzaSyAvDZNaDpKLz_ej2mnUeGwLmrE2Ozik5zE',
  authDomain: 'robo-job-334508.firebaseapp.com',
  projectId: 'robo-job-334508',
  storageBucket: 'robo-job-334508.appspot.com',
  messagingSenderId: '831162647835',
  appId: '1:831162647835:web:5f11688cb00df78e56ffbe',
}

// init firebase
initializeApp(firebaseConfig)

const App: React.FC = () => {
  const signInWithGoogle = async () => {
    LogBox.ignoreLogs(['/Deprecated: Native Google Sign-In.*/'])
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
  }

  return (
    <Container>
      <Text>Sign in by clicking below</Text>
      <SignInWithGoogleButton
        onPress={() => handleButtonPress()}
        title="Continue with Google"
      />
    </Container>
  )
}

export default App
