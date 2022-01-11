import React from 'react'
import { Image, useColorScheme, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { SafeContainer } from '../../common/components/SafeContainer'
import { SignInButton } from '../../common/components/RoboButton'
import { NavigationPropType } from '../../Navigator'
import RoboText from '../../common/components/RoboText'
import { ROBO_COP_URL } from '../ChatScreen/components/RoboAvatar'
import { VerticalSpaceOf8 } from '../../common/components/VerticalSpaceOf8'

const logoSize = 100

const BigLogo: React.FC = () => {
  const scheme = useColorScheme()
  return (
    <Image
      style={{
        height: logoSize,
        width: logoSize,
        tintColor: scheme === 'dark' ? 'white' : undefined,
      }}
      source={{
        uri: ROBO_COP_URL,
      }}
    />
  )
}

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
        <BigLogo />
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
          width: '88%',
        }}
      >
        <SignInButton
          onPress={() => signInAsDemo()}
          title="Sign in with demo account"
        />
      </View>
    </SafeContainer>
  )
}

export default AuthScreen
