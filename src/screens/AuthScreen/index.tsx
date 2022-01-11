import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { SafeContainer } from '../../common/components/SafeContainer'
import { RoboButton } from '../../common/components/RoboButton'
import { NavigationPropType } from '../../Navigator'
import RoboText from '../../common/components/RoboText'

const AuthScreen: React.FC = () => {
  const navigation = useNavigation<NavigationPropType>()
  const signInAsDemo = () => navigation.navigate('RootNavigator')

  return (
    <SafeContainer>
      <RoboText size="largest" weight="bold">
        robo job
      </RoboText>
      <RoboButton onPress={() => signInAsDemo()} title="Sign in as demo" />
    </SafeContainer>
  )
}

export default AuthScreen
