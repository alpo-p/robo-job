import { Ionicons } from '@expo/vector-icons'
import { useTheme } from '@react-navigation/native'
import React from 'react'
import { Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import RoboText from '../../../common/components/RoboText'
import { IoniconsIconNames } from '../../../common/types/utilTypes'

export interface OnboaringPageProps {
  width: number
  title: string
  text: string
  imageUrl?: string
  iconName?: IoniconsIconNames
}

export const OnboardingPage: React.FC<OnboaringPageProps> = ({
  width,
  title,
  text,
  imageUrl,
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
      {imageUrl && <Image source={{ uri: imageUrl }} />}
      {iconName && (
        <Ionicons name={iconName} size={125} color={colors.primary} />
      )}
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
