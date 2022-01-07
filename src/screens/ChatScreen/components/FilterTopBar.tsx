import React from 'react'
import { View } from 'react-native'
import { StateFilter } from '..'
import RoboText from '../../../common/components/RoboText'

interface P {
  filter: string
  // eslint-disable-next-line no-unused-vars
  setStateFilter: (filter: StateFilter) => void
}
export default ({ filter, setStateFilter }: P) => (
  <View>
    <RoboText>FILTERISH TOP BAR HERE LIKE IG</RoboText>
  </View>
)
