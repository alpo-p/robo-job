import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { HomeNavigationPropType } from '../../navigators/HomeScreenNavigator'
import InputBarWithIcon from '../../common/components/InputBarWithIcon'
import { SearchButton } from './components/SearchButton'
import SearchTags from './components/SearchTags'
import waitSeconds from '../../utils/waitSeconds'
import RecentSearches, { SearchQuery } from './components/RecentSearches'

const recent: SearchQuery[] = [
  {
    searchTags: ['marketing', 'social media'],
    locations: ['Helsinki'],
  },
  {
    searchTags: ['marketing automation'],
    locations: ['Remote', 'Helsinki'],
  },
]

export default () => {
  const navigation = useNavigation<HomeNavigationPropType>()
  const [search, setSearch] = useState('')
  const [searchTags, setSearchTags] = useState<string[]>([])
  const [location, setLocation] = useState('')
  const [locationTags, setLocationTags] = useState<string[]>([])

  const handleSearch = () => navigation.navigate('HomeScreen')

  const onEndEditingSearch = async () => {
    if (search) {
      setSearchTags(s => s.concat(search))
      setSearch('')
    }
  }

  const onEndEditingLocation = async () => {
    if (location) {
      setLocationTags(l => l.concat(location))
      setLocation('')
    }
  }

  const handleRemoveSearchTag = async (tag: string) => {
    // Looks cooler this way
    await waitSeconds(0.2)
    setSearchTags(s => s.filter(t => t !== tag))
  }

  const handleRemoveLocationTag = async (tag: string) => {
    await waitSeconds(0.2)
    setLocationTags(l => l.filter(t => t !== tag))
  }

  const handleOnPressRecentSearch = (searchQuery: SearchQuery) => {
    console.log(searchQuery)
    handleSearch()
  }

  return (
    <SafeAreaView style={{ marginTop: '65%' }}>
      <InputBarWithIcon
        value={search}
        setValue={setSearch}
        iconName="search"
        onEndEditing={onEndEditingSearch}
        style={!searchTags.length ? { marginBottom: 8 } : undefined}
      />
      <SearchTags tags={searchTags} onPressTag={handleRemoveSearchTag} />
      <InputBarWithIcon
        value={location}
        setValue={setLocation}
        iconName="location"
        placeholderText="Location"
        onEndEditing={onEndEditingLocation}
        style={!locationTags.length ? { marginBottom: 8 } : undefined}
      />
      <SearchTags tags={locationTags} onPressTag={handleRemoveLocationTag} />
      <SearchButton onPress={handleSearch} />
      <RecentSearches
        recent={recent}
        handleOnPress={handleOnPressRecentSearch}
      />
    </SafeAreaView>
  )
}
