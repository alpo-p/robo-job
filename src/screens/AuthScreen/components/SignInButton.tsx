import { FontAwesome5 } from '@expo/vector-icons'
import { useTheme } from '@react-navigation/native'
import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import RoboText from '../../../common/components/RoboText'

interface Props {
  onPress: () => void
}

export const SignInButton: React.FC<Props> = ({ onPress }) => {
  const { colors } = useTheme()
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: colors.primary,
        padding: 16,
        borderRadius: 8 * 1,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            flex: 2,
          }}
        >
          <FontAwesome5 color="white" size={8 * 3} name="phone-alt" />
        </View>
        <RoboText size="medium" weight="bold" color="white" style={{ flex: 5 }}>
          Sign in with phone
        </RoboText>
      </View>
    </TouchableOpacity>
  )
}
