import React from 'react'
import IconButton from './IconButton'

interface P {
  onPress: () => void
  editStylesForDetailedView?: boolean
}
export default ({ onPress, editStylesForDetailedView }: P) => (
  <IconButton
    iconName="chevron-back-circle"
    onPress={onPress}
    color="white"
    style={{
      alignSelf: 'flex-start',
      marginTop: editStylesForDetailedView ? 0 : 40,
      marginLeft: 8,
      marginBottom: 6,
      position: 'absolute',
      top: 0,
    }}
    size={50}
  />
)
