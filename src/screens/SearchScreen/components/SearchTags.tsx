import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { Tag } from '../../../common/components/Tags'
import { TagType } from '../../../common/types'

interface P {
  tags: TagType[]
  // eslint-disable-next-line no-unused-vars
  onPressTag: (id: string) => void
}

interface TagProp {
  tag: TagType
  // eslint-disable-next-line no-unused-vars
  onPressTag: (id: string) => void
}

const PressableTag: React.FC<TagProp> = ({ tag, onPressTag }) => (
  <TouchableOpacity onPress={() => onPressTag(tag.id)}>
    <Tag tag={tag} editStylesForSearchScreen />
  </TouchableOpacity>
)

export default ({ tags, onPressTag }: P) => (
  <View
    style={{
      flexDirection: 'row',
      height: 1 * 8,
      marginLeft: 2 * 8,
      marginTop: 8,
      marginBottom: 8,
      alignItems: 'center',
    }}
  >
    {tags.map(tag => (
      <PressableTag key={tag.id} tag={tag} onPressTag={onPressTag} />
    ))}
  </View>
)
