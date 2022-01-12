import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { HomeNavigationPropType } from '../../navigators/HomeScreenNavigator'
import InputBarWithIcon from '../../common/InputBarWithIcon'
import { SearchButton } from './SearchButton'

export default () => {
  const navigation = useNavigation<HomeNavigationPropType>()
  const [search, setSearch] = useState('')
  const [location, setLocation] = useState('')
  const handleSearch = () => navigation.navigate('HomeScreen')
  return (
    <SafeAreaView
      style={{
        justifyContent: 'center',
        flex: 1,
      }}
    >
      <InputBarWithIcon value={search} setValue={setSearch} iconName="search" />
      <InputBarWithIcon
        value={location}
        setValue={setLocation}
        iconName="location"
        placeholderText="Location"
      />
      <SearchButton onPress={handleSearch} />
    </SafeAreaView>
  )
}
