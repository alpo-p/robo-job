import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { TouchableOpacity, ViewStyle } from 'react-native'
import { IoniconsIconNames } from '../types'

interface P {
  iconName: IoniconsIconNames
  color?: string
  onPress: () => void
  size?: number
  style?: ViewStyle
}
const IconButton = ({ iconName, color, onPress, size = 25, style }: P) => (
  <TouchableOpacity onPress={onPress} style={style}>
    <Ionicons name={iconName} color={color} size={size} />
  </TouchableOpacity>
)

export default IconButton
