import { getAuth } from '@firebase/auth'
import React from 'react'
import { Text } from 'react-native'
import useAuthStorage from '../../hooks/useAuthStorage'
import { RoboButton } from '../../sharedComponents/RoboButton'
import { SafeContainer } from '../../sharedComponents/SafeContainer'

import {
  collection,
  addDoc,
  updateDoc,
  getFirestore,
  doc,
} from 'firebase/firestore'

const HomeScreen: React.FC = () => {
  const auth = getAuth()
  const user = auth.currentUser
  const displayName = user?.displayName
  const authStorage = useAuthStorage()

  const handleLogout = () => {
    auth.signOut()
    authStorage.removeAccessToken()
  }

  const db = getFirestore()
  const col = collection(db, 'users')

  const handleSetUserName = async () => {
    const object = { first: 'test', second: 'also test' }
    await addDoc(col, object)
  }

  const handleEditUserName = async () => {
    const ref = doc(db, 'users', 'rVPAj7vI3s9dUKK3P1hq')
    await updateDoc(ref, {
      first: 'muutettu!',
    })
  }

  return (
    <SafeContainer>
      <Text>Current authorized user: {displayName}</Text>
      <RoboButton onPress={handleLogout}>
        <Text>Logout</Text>
      </RoboButton>
      <RoboButton onPress={handleSetUserName} title="Set user name" />
      <RoboButton onPress={handleEditUserName} title="Edit user name" />
    </SafeContainer>
  )
}

export default HomeScreen
