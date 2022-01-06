import React from 'react'
import { View } from 'react-native'
import ContentText from '../../../common/components/ContentText'
import RoboText from '../../../common/components/RoboText'

interface P {
  description: string
}
export default ({ description }: P) => (
  <View>
    <RoboText size="medium">About the job</RoboText>
    <View style={{ marginBottom: 8 }} />
    <ContentText>{description}</ContentText>
  </View>
)
