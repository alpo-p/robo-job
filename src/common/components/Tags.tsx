import { useTheme } from '@react-navigation/native'
import React from 'react'
import { View } from 'react-native'

import { Ionicons } from '@expo/vector-icons'
import RoboText from './RoboText'
import styles from '../styles'
import { TagType } from '../types'

interface Props {
  tags: TagType[]
}

interface TagPropProps {
  tag: TagType
  editStylesForSearchScreen?: boolean
}

export const Tag: React.FC<TagPropProps> = ({
  tag,
  editStylesForSearchScreen,
}) => {
  const { colors } = useTheme()
  const b = editStylesForSearchScreen

  return (
    <View
      style={{
        flexDirection: 'row',
        alignContent: 'center',
        borderWidth: 0.5,
        borderColor: colors.primary,
        borderRadius: 4,
        padding: 4,
        marginRight: 6,
        marginTop: b ? undefined : 8,
        height: styles.commonSize,
      }}
    >
      {editStylesForSearchScreen && (
        <Ionicons name="remove-circle" size={14} color={colors.primary} />
      )}
      <RoboText color={colors.primary} uppercase weight="light" size="tiny">
        {!editStylesForSearchScreen && '#'} {tag.text}
      </RoboText>
    </View>
  )
}

const Tags: React.FC<Props> = ({ tags }) => (
  <View
    style={{
      flexDirection: 'row',
      flexWrap: 'wrap',
    }}
  >
    {tags.map(tag => (
      <Tag tag={tag} key={tag.id} />
    ))}
  </View>
)

export default Tags
