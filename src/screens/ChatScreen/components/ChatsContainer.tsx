import React from 'react'
import { View } from 'react-native'
import { StateFilter } from '..'
import RoboText from '../../../common/components/RoboText'

interface P {
  searchFilter: string
  stateFilter: StateFilter
}
export default ({ searchFilter, stateFilter }: P) => (
  <View>
    <RoboText>All chat rows here</RoboText>
  </View>
)
