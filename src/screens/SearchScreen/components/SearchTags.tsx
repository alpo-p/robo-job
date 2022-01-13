import React from 'react'
import { ScrollView, TouchableOpacity } from 'react-native'
import { Tag } from '../../../common/components/Tags'

interface P {
  tags: string[]
  // eslint-disable-next-line no-unused-vars
  onPressTag: (t: string) => void
}

interface TagProp {
  tag: string
  // eslint-disable-next-line no-unused-vars
  onPressTag: (t: string) => void
}

const PressableTag: React.FC<TagProp> = ({ tag, onPressTag }) => (
  <TouchableOpacity onPress={() => onPressTag(tag)}>
    <Tag tag={tag} editStylesForSearchScreen />
  </TouchableOpacity>
)

export default ({ tags, onPressTag }: P) => (
  <ScrollView
    showsHorizontalScrollIndicator={false}
    horizontal
    contentContainerStyle={{
      flexDirection: 'row',
      marginLeft: 2 * 8,
      alignItems: 'center',
    }}
  >
    {tags.map(tag => (
      <PressableTag key={tag} tag={tag} onPressTag={onPressTag} />
    ))}
  </ScrollView>
)
