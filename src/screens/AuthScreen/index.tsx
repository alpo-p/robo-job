import React from 'react'
import { useColorScheme, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { SafeContainer } from '../../common/components/SafeContainer'
import { SignInButton } from '../../common/components/RoboButton'
import { NavigationPropType } from '../../navigators/Navigator'
import RoboText from '../../common/components/RoboText'
import RoboAvatar from '../ChatScreen/components/RoboAvatar'
import { VerticalSpaceOf8 } from '../../common/components/VerticalSpaceOf8'

const LOGO_SIZE = 100

const AuthScreen: React.FC = () => {
  const scheme = useColorScheme()
  const navigation = useNavigation<NavigationPropType>()
  const signInAsDemo = () => navigation.navigate('RootNavigator')

  return (
    <SafeContainer>
      <View
        style={{
          alignItems: 'center',
        }}
      >
        <RoboAvatar size={LOGO_SIZE} />
        <RoboText
          size="largest"
          weight="bold"
          color={scheme === 'dark' ? 'white' : 'black'}
        >
          robo job
        </RoboText>
      </View>
      <VerticalSpaceOf8 />
      <View
        style={{
          position: 'absolute',
          bottom: 8 * 4,
          width: '90%',
        }}
      >
        <SignInButton onPress={() => signInAsDemo()} title="Sign in as demo" />
      </View>
    </SafeContainer>
  )
}

export default AuthScreen
