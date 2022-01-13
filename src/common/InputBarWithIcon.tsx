import { Ionicons } from '@expo/vector-icons'
import { useTheme } from '@react-navigation/native'
import React from 'react'
import { TextInput, useColorScheme, View, ViewStyle } from 'react-native'
import styles from './styles'
import { IoniconsIconNames } from './types/utilTypes'

interface P {
  value: string
  // eslint-disable-next-line no-unused-vars
  setValue: (v: string) => void
  iconName: IoniconsIconNames
  placeholderText?: string
  onEndEditing?: () => void
  style?: ViewStyle
}

// TODO: refactor
export default ({
  value,
  setValue,
  iconName,
  placeholderText = 'Search',
  onEndEditing,
  style,
}: P) => {
  const { colors } = useTheme()
  const scheme = useColorScheme()
  // TODO: refactor bgColor and placeholder color to themes
  const bgColor =
    scheme === 'dark' ? styles.lightBgDarkMode : styles.lightBgLightMode
  const placeholderColor =
    scheme === 'dark' ? styles.lighterWhiteText : styles.lighterDarkText
  return (
    <View
      style={[
        {
          flexDirection: 'row',
          backgroundColor: bgColor,
          margin: 16,
          borderRadius: 8,
          height: 8 * 4,
        },
        { ...style },
      ]}
    >
      <Ionicons
        style={{
          padding: 8,
        }}
        name={iconName}
        color={colors.primary}
        size={15}
      />
      <TextInput
        style={{
          color: colors.text,
          width: '70%',
        }}
        value={value}
        onChangeText={setValue}
        placeholder={placeholderText}
        placeholderTextColor={placeholderColor}
        onEndEditing={onEndEditing}
        returnKeyType="done"
      />
    </View>
  )
}
