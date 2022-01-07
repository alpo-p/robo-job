import { Ionicons } from '@expo/vector-icons'
import { useTheme } from '@react-navigation/native'
import React from 'react'
import { TextInput, View } from 'react-native'

interface P {
  searchFilter: string
  // eslint-disable-next-line no-unused-vars
  setSearchFilter: (term: string) => void
}

export default ({ searchFilter, setSearchFilter }: P) => {
  const { colors } = useTheme()
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: colors.card,
        margin: 16,
        borderRadius: 8,
      }}
    >
      <Ionicons
        style={{
          padding: 10,
        }}
        name="search"
        color={colors.primary}
        size={15}
      />
      <TextInput
        style={{
          backgroundColor: colors.card,
          color: colors.text,
          width: '70%',
        }}
        value={searchFilter}
        onChangeText={setSearchFilter}
        placeholder="Search"
      />
    </View>
  )
}
