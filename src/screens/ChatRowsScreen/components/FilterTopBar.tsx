import { useTheme } from '@react-navigation/native'
import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { StateFilter } from '..'
import RoboText from '../../../common/components/RoboText'
import useLikedJobs from '../../../hooks/useLikedJobs'
import Indicator from './Indicator'

interface Wrapper {
  filter: StateFilter
  // eslint-disable-next-line no-unused-vars
  setStateFilter: (filter: StateFilter) => void
}

interface Button {
  onPress: () => void
  title: string
  filter: StateFilter
  showRedBadge?: boolean
  showYellowBadge?: boolean
}
const TopBarButton: React.FC<Button> = ({
  onPress,
  title,
  filter,
  showRedBadge,
  showYellowBadge,
}) => {
  const { colors } = useTheme()
  const selected = filter === title.toLowerCase()
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
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
          marginRight: 8,
        }}
      >
        {title}
      </RoboText>
      {showYellowBadge && <Indicator type="unfinished" />}
      {showRedBadge && <Indicator type="unread" />}
    </TouchableOpacity>
  )
}

export default ({ filter, setStateFilter }: Wrapper) => {
  const { likedJobs } = useLikedJobs()
  const showRedBadge = likedJobs.map(j => j.isUnread).includes(true)
  const showYellowBadge = likedJobs.map(j => j.isUnfinished).includes(true)
  return (
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
        showRedBadge={showRedBadge}
      />
      <TopBarButton
        filter={filter}
        onPress={() => setStateFilter('unfinished')}
        title="Unfinished"
        showYellowBadge={showYellowBadge}
      />
    </View>
  )
}
