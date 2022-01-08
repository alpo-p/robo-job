import React from 'react'
import { LogBox, StatusBar } from 'react-native'
import { initializeApp } from 'firebase/app'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Navigator from './src/Navigator'
import AuthStorage from './src/utils/authStorage'

import AuthStorageContext from './src/contexts/AuthStorageContext'
import { firebaseConfig } from './src/configs/firebaseConfig'
import { ignoreArray } from './src/configs/ignoreLogs'
import LikedJobsProvider from './src/contexts/LikedJobsProvider'

const authStorage = new AuthStorage()

initializeApp(firebaseConfig)

// TODO: Some library throws this warning. Should probably handle at some point
LogBox.ignoreLogs(ignoreArray)

// TODO: lock orientation https://reactnative.dev/docs/improvingux#screen-orientation-lock

const App: React.FC = () => {
  return (
    <>
      <StatusBar backgroundColor="transparent" translucent />
      <SafeAreaProvider>
        <LikedJobsProvider>
          <AuthStorageContext.Provider value={authStorage}>
            <Navigator />
          </AuthStorageContext.Provider>
        </LikedJobsProvider>
      </SafeAreaProvider>
    </>
  )
}

export default App
