import React from 'react'
import { View } from 'react-native'
import RoboText from '../../../common/components/RoboText'

interface P {
  name: string
  title: string
}
export default ({ name, title }: P) => (
  <View
    style={{
      marginLeft: 8,
    }}
  >
    <RoboText size="small" weight="normal">
      {name}
    </RoboText>
    <RoboText size="small" weight="light">
      {title}
    </RoboText>
  </View>
)
