import { Ionicons } from '@expo/vector-icons'
import { useTheme } from '@react-navigation/native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import RoboText from '../../../common/components/RoboText'
import { IoniconsIconNames } from '../../../common/types/utilTypes'

export interface OnboaringPageProps {
  width: number
  title: string
  text: string
  iconName?: IoniconsIconNames
}

export const OnboardingPage: React.FC<OnboaringPageProps> = ({
  width,
  title,
  text,
  iconName,
}) => {
  const { colors } = useTheme()
  return (
    <SafeAreaView
      style={{
        width,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        padding: 5 * 8,
      }}
    >
      <Ionicons name={iconName} size={125} color={colors.primary} />
      <RoboText size="large" weight="bold">
        {title}
      </RoboText>
      <RoboText
        size="medium"
        weight="light"
        style={{ textAlign: 'center', marginTop: 0 }}
      >
        {text}
      </RoboText>
    </SafeAreaView>
  )
}
