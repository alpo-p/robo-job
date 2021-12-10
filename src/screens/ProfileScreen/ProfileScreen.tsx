import { getAuth } from '@firebase/auth'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text } from 'react-native'
import useAuthStorage from '../../hooks/useAuthStorage'
import { NavigationPropType } from '../../Navigator'
import { RoboButton } from '../../common/components/RoboButton'
import { SafeContainer } from '../../common/components/SafeContainer'

const ProfileScreen: React.FC = () => {
  const authStorage = useAuthStorage()
  const auth = getAuth()
  const navigation = useNavigation<NavigationPropType>()

  const handleLogout = () => {
    auth.signOut()
    authStorage.removeAccessToken()
    navigation.navigate('HomeScreen')
  }
  return (
    <SafeContainer>
      <Text>Profile is rendered here</Text>
      <RoboButton onPress={handleLogout} title="Logout" />
    </SafeContainer>
  )
}
export default ProfileScreen
