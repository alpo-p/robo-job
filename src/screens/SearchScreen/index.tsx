import { Ionicons } from '@expo/vector-icons'
import { useNavigation, useTheme } from '@react-navigation/native'
import React, { useState } from 'react'
import { useColorScheme, View, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from '../../common/styles'
import { HomeNavigationPropType } from '../../navigators/HomeScreenNavigator'

const SearchBar: React.FC = () => {
  const { colors } = useTheme()
  const scheme = useColorScheme()
  const navigation = useNavigation<HomeNavigationPropType>()
  // TODO: refactor bgColor and placeholder color to themes
  const bgColor =
    scheme === 'dark' ? styles.lightBgDarkMode : styles.lightBgLightMode
  const placeholderColor =
    scheme === 'dark' ? styles.lighterWhiteText : styles.lighterDarkText

  const [searchFilter, setSearchFilter] = useState('')

  const handleSearch = () => navigation.navigate('HomeScreen')

  const height = 5 * 8

  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: bgColor,
        margin: 16,
        borderRadius: 8,
        height,
        paddingLeft: 8 * 2,
        padding: 4,
      }}
    >
      <TextInput
        style={{
          color: colors.text,
          width: '88%',
        }}
        value={searchFilter}
        onChangeText={text => setSearchFilter(text)}
        placeholder="Search"
        placeholderTextColor={placeholderColor}
      />
      <Ionicons
        style={{
          alignSelf: 'center',
          justifyContent: 'center',
        }}
        name="search"
        color={colors.primary}
        size={height / 1.5}
        onPress={handleSearch}
      />
    </View>
  )
}

export default () => (
  <SafeAreaView>
    <SearchBar />
  </SafeAreaView>
)
