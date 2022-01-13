import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { HomeNavigationPropType } from '../../navigators/HomeScreenNavigator'
import InputBarWithIcon from '../../common/InputBarWithIcon'
import { SearchButton } from './components/SearchButton'
import SearchTags from './components/SearchTags'
import { getRandomId } from '../../utils/utils'
import { TagType } from '../../common/types'
import waitSeconds from '../../utils/waitSeconds'

export default () => {
  const navigation = useNavigation<HomeNavigationPropType>()
  const [search, setSearch] = useState('')
  const [searchTags, setSearchTags] = useState<TagType[]>([])
  const [location, setLocation] = useState('')
  const [locationTags, setLocationTags] = useState<TagType[]>([])

  const handleSearch = () => navigation.navigate('HomeScreen')

  const onEndEditingSearch = () => {
    if (search) {
      const tag: TagType = {
        id: getRandomId(),
        text: search,
      }
      setSearchTags(s => s.concat(tag))
      setSearch('')
    }
  }

  const onEndEditingLocation = () => {
    if (location) {
      const tag: TagType = {
        id: getRandomId(),
        text: location,
      }
      setLocationTags(l => l.concat(tag))
      setLocation('')
    }
  }

  const handleRemoveSearchTag = async (id: string) => {
    // Looks cooler this way
    await waitSeconds(0.2)
    setSearchTags(s => s.filter(tag => tag.id !== id))
  }

  const handleRemoveLocationTag = async (id: string) => {
    await waitSeconds(0.2)
    setLocationTags(l => l.filter(tag => tag.id !== id))
  }

  return (
    <SafeAreaView style={{ marginTop: '50%' }}>
      <InputBarWithIcon
        value={search}
        setValue={setSearch}
        iconName="search"
        onEndEditing={onEndEditingSearch}
      />
      <SearchTags tags={searchTags} onPressTag={handleRemoveSearchTag} />
      <InputBarWithIcon
        value={location}
        setValue={setLocation}
        iconName="location"
        placeholderText="Location"
        onEndEditing={onEndEditingLocation}
      />
      <SearchTags tags={locationTags} onPressTag={handleRemoveLocationTag} />
      <SearchButton onPress={handleSearch} />
    </SafeAreaView>
  )
}
