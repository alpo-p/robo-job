import { useTheme } from '@react-navigation/native'
import React from 'react'
import { View } from 'react-native'

import RoboText from '../../../../../common/components/RoboText'

interface Props {
  tags: string[]
}

const Tag: React.FC<{ tag: string }> = ({ tag }) => {
  const { colors } = useTheme()
  return (
    <View
      style={{
        borderWidth: 0.5,
        borderColor: colors.primary,
        borderRadius: 4,
        padding: 3,
        paddingTop: 5,
        marginRight: 6,
        marginTop: 8,
      }}
    >
      <RoboText uppercase weight="light" size="tiny">
        {tag}
      </RoboText>
    </View>
  )
}

const Tags: React.FC<Props> = ({ tags }) => (
  <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 8 }}>
    {tags.map((tag, i) => (
      // eslint-disable-next-line react/no-array-index-key
      <Tag key={i} tag={tag} />
    ))}
  </View>
)

export default Tags
