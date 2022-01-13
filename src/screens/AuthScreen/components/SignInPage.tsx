import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { useColorScheme, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { SignInButton } from '../../../common/components/RoboButton'
import RoboText from '../../../common/components/RoboText'
import { VerticalSpaceOf8 } from '../../../common/components/VerticalSpaceOf8'
import { NavigationPropType } from '../../../navigators/Navigator'
import RoboAvatar from '../../ChatScreen/components/RoboAvatar'

const LOGO_SIZE = 100

interface P {
  width: number
  hideSignInButton?: boolean
}
export default ({ width, hideSignInButton }: P) => {
  const scheme = useColorScheme()
  const navigation = useNavigation<NavigationPropType>()
  const signInAsDemo = () => navigation.navigate('RootNavigator')

  return (
    <SafeAreaView
      style={{ width, flex: 1, alignItems: 'center', justifyContent: 'center' }}
    >
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
      {hideSignInButton && (
        <RoboText weight="light" size="large">
          The easiest way to find your dream job
        </RoboText>
      )}
      <View
        style={{
          position: 'absolute',
          bottom: 8 * 10,
          width: '90%',
        }}
      >
        {!hideSignInButton && (
          <SignInButton
            onPress={() => signInAsDemo()}
            title="Sign in as demo"
          />
        )}
      </View>
    </SafeAreaView>
  )
}
