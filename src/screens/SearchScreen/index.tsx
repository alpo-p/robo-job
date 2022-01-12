import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { HomeNavigationPropType } from '../../navigators/HomeScreenNavigator'
import InputBarWithIcon from '../../common/InputBarWithIcon'
import { SearchButton } from './components/SearchButton'
import SearchTags from './components/SearchTags'

export default () => {
  const navigation = useNavigation<HomeNavigationPropType>()
  const [search, setSearch] = useState('')
  const [searchTags, setSearchTags] = useState<string[]>([])
  const [location, setLocation] = useState('')
  const [locationTags, setLocationTags] = useState([])

  const handleSearch = () => navigation.navigate('HomeScreen')

  const onEndEditingSearch = () => {
    if (search) {
      setSearchTags(s => s.concat(search))
      setSearch('')
    }
  }

  return (
    <SafeAreaView
      style={{
        justifyContent: 'center',
        flex: 1,
      }}
    >
      <InputBarWithIcon
        value={search}
        setValue={setSearch}
        iconName="search"
        onEndEditing={onEndEditingSearch}
      />
      <SearchTags tags={searchTags} />
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
