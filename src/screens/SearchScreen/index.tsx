import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { HomeNavigationPropType } from '../../navigators/HomeScreenNavigator'
import SearchBar from '../ChatRowsScreen/components/SearchBar'
import { SearchButton } from './SearchButton'

export default () => {
  const navigation = useNavigation<HomeNavigationPropType>()
  const [searchFilter, setSearchFilter] = useState('')
  const handleSearch = () => navigation.navigate('HomeScreen')
  return (
    <SafeAreaView
      style={{
        justifyContent: 'center',
        flex: 1,
      }}
    >
      <SearchBar
        searchFilter={searchFilter}
        setSearchFilter={setSearchFilter}
      />
      <SearchButton onPress={handleSearch} />
    </SafeAreaView>
  )
}
