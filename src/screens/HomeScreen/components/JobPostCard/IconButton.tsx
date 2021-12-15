import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { TouchableHighlight } from 'react-native'
import { IoniconsIconNames } from '../../../../common/types'

interface P {
  iconName: IoniconsIconNames
  color?: string
  onPress: () => void
}
const IconButton = ({ iconName, color, onPress }: P) => (
  <TouchableHighlight onPress={onPress}>
    <Ionicons name={iconName} color={color} size={50} />
  </TouchableHighlight>
)

export default IconButton
