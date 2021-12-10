import React from 'react'

import { initializeApp } from 'firebase/app'
import Navigator from './src/Navigator'
import AuthStorage from './src/utils/authStorage'

import AuthStorageContext from './src/contexts/AuthStorageContext'
const authStorage = new AuthStorage()

const firebaseConfig = {
  apiKey: 'AIzaSyAvDZNaDpKLz_ej2mnUeGwLmrE2Ozik5zE',
  authDomain: 'robo-job-334508.firebaseapp.com',
  projectId: 'robo-job-334508',
  storageBucket: 'robo-job-334508.appspot.com',
  messagingSenderId: '831162647835',
  appId: '1:831162647835:web:5f11688cb00df78e56ffbe',
}

initializeApp(firebaseConfig)

const App: React.FC = () => {
  return (
    <AuthStorageContext.Provider value={authStorage}>
      <Navigator />
    </AuthStorageContext.Provider>
  )
}

export default App
