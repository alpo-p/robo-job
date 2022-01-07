import { useTheme } from '@react-navigation/native'
import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { StateFilter } from '..'
import RoboText from '../../../common/components/RoboText'

interface Wrapper {
  filter: StateFilter
  // eslint-disable-next-line no-unused-vars
  setStateFilter: (filter: StateFilter) => void
}

interface Button {
  onPress: () => void
  title: string
  filter: StateFilter
}
const TopBarButton: React.FC<Button> = ({ onPress, title, filter }) => {
  const { colors } = useTheme()
  const selected = filter === title.toLowerCase()
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        borderBottomColor: selected ? colors.primary : colors.border,
        borderBottomWidth: 1,
        width: '33%',
      }}
    >
      <RoboText
        weight={selected ? 'bold' : 'normal'}
        style={{
          alignSelf: 'center',
          marginBottom: 8,
        }}
      >
        {title}
      </RoboText>
    </TouchableOpacity>
  )
}

export default ({ filter, setStateFilter }: Wrapper) => (
  <View
    style={{
      flexDirection: 'row',
    }}
  >
    <TopBarButton
      filter={filter}
      onPress={() => setStateFilter('all')}
      title="All"
    />
    <TopBarButton
      filter={filter}
      onPress={() => setStateFilter('unread')}
      title="Unread"
    />
    <TopBarButton
      filter={filter}
      onPress={() => setStateFilter('unfinished')}
      title="Unfinished"
    />
  </View>
)
