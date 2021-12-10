import React from 'react'
import { LogBox } from 'react-native'
import { initializeApp } from 'firebase/app'
import Navigator from './src/Navigator'
import AuthStorage from './src/utils/authStorage'

import AuthStorageContext from './src/contexts/AuthStorageContext'
import { firebaseConfig } from './src/configs/firebaseConfig'

const authStorage = new AuthStorage()

initializeApp(firebaseConfig)

// Some library throws this warning. Should probably handle at some point
LogBox.ignoreLogs(['AsyncStorage has been extracted '])

const App: React.FC = () => {
  return (
    <AuthStorageContext.Provider value={authStorage}>
      <Navigator />
    </AuthStorageContext.Provider>
  )
}

export default App
