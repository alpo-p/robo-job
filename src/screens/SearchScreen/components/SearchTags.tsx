import React from 'react'
import { View } from 'react-native'
import RoboText from '../../../common/components/RoboText'

interface P {
  tags: string[]
}
export default ({ tags }: P) => (
  <View>
    {tags &&
      tags.map(tag => {
        return <RoboText>{tag}</RoboText>
      })}
  </View>
)
