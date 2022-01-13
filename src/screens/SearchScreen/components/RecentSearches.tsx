import { useTheme } from '@react-navigation/native'
import React from 'react'
import { ScrollView, View } from 'react-native'
import IconButton from '../../../common/components/IconButton'
import RoboText from '../../../common/components/RoboText'
import { Tag } from '../../../common/components/Tags'

export type SearchQuery = {
  searchTags: string[]
  locations: string[]
}

interface P {
  recent: SearchQuery[]
  // eslint-disable-next-line no-unused-vars
  handleOnPress: (search: SearchQuery) => void
}

interface RecentSearchInterface {
  search: SearchQuery
  // eslint-disable-next-line no-unused-vars
  handleOnPress: (search: SearchQuery) => void
}

const RecentSearch: React.FC<RecentSearchInterface> = ({
  search,
  handleOnPress,
}) => {
  const { colors } = useTheme()
  return (
    <View style={{ flexDirection: 'row', marginTop: 8 }}>
      <ScrollView horizontal>
        {search.searchTags.map(tag => (
          <Tag tag={tag} key={tag} />
        ))}
        {search.locations.map(location => (
          <Tag tag={location} key={location} />
        ))}
      </ScrollView>
      <IconButton
        iconName="chevron-forward"
        onPress={() => handleOnPress(search)}
        style={{
          top: 3,
          position: 'absolute',
          right: 2 * 8,
          backgroundColor: colors.background,
        }}
        color={colors.primary}
        size={30}
      />
    </View>
  )
}

export default ({ recent, handleOnPress }: P) => (
  <View
    style={{
      marginTop: 8 * 10,
      marginLeft: 8 * 2,
    }}
  >
    <RoboText size="large">Recent searches</RoboText>
    {recent.map((search, i) => (
      // eslint-disable-next-line react/no-array-index-key
      <RecentSearch search={search} handleOnPress={handleOnPress} key={i} />
    ))}
  </View>
)
