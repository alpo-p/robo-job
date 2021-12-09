import React from 'react'

import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

import { AuthScreen } from './src/screens/AuthScreen/AuthScreen'

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
  const auth = getAuth()

  return <AuthScreen auth={auth} />
}

export default App
