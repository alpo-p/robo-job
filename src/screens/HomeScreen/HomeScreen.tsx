import { getAuth } from '@firebase/auth'
import React from 'react'
import { Text } from 'react-native'
import {
  collection,
  addDoc,
  updateDoc,
  getFirestore,
  doc,
} from 'firebase/firestore'
import { RoboButton } from '../../common/components/RoboButton'
import { SafeContainer } from '../../common/components/SafeContainer'

const HomeScreen: React.FC = () => {
  const auth = getAuth()
  const user = auth.currentUser
  const displayName = user?.displayName

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
      <RoboButton onPress={handleSetUserName} title="Set user name" />
      <RoboButton onPress={handleEditUserName} title="Edit user name" />
    </SafeContainer>
  )
}

export default HomeScreen
