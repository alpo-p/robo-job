import { Ionicons } from '@expo/vector-icons'
import { useTheme } from '@react-navigation/native'
import React from 'react'
import { TextInput, useColorScheme, View } from 'react-native'
import styles from '../../../common/styles'

interface P {
  searchFilter: string
  // eslint-disable-next-line no-unused-vars
  setSearchFilter: (term: string) => void
}

// TODO: refactor
export default ({ searchFilter, setSearchFilter }: P) => {
  const { colors } = useTheme()
  const scheme = useColorScheme()
  // TODO: refactor bgColor and placeholder color to themes
  const bgColor =
    scheme === 'dark' ? styles.lightBgDarkMode : styles.lightBgLightMode
  const placeholderColor =
    scheme === 'dark' ? styles.lighterWhiteText : styles.lighterDarkText
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: bgColor,
        margin: 16,
        borderRadius: 8,
        height: 8 * 4,
      }}
    >
      <Ionicons
        style={{
          padding: 8,
        }}
        name="search"
        color={colors.primary}
        size={15}
      />
      <TextInput
        style={{
          color: colors.text,
          width: '70%',
        }}
        value={searchFilter}
        onChangeText={setSearchFilter}
        placeholder="Search"
        placeholderTextColor={placeholderColor}
      />
    </View>
  )
}
