import React from 'react'
import { View, StyleSheet } from 'react-native'

import RoboText from '../../../../../common/components/RoboText'
import styles from '../../../../../common/styles'

interface Props {
  tags: string[]
}

const Tag: React.FC<{ tag: string }> = ({ tag }) => (
  <View style={stylesheet.tag}>
    <RoboText uppercase weight="light" size="tiny">
      {tag}
    </RoboText>
  </View>
)

const Tags: React.FC<Props> = ({ tags }) => (
  <View style={stylesheet.container}>
    {tags.map((tag, i) => (
      // eslint-disable-next-line react/no-array-index-key
      <Tag key={i} tag={tag} />
    ))}
  </View>
)

const stylesheet = StyleSheet.create({
  tag: {
    borderWidth: 0.5,
    borderColor: styles.lightGrey,
    borderRadius: 10,
    padding: 5,
    margin: 2,
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 5,
  },
})

export default Tags
