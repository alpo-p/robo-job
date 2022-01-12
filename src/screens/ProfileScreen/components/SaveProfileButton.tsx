import React from 'react'
import { TouchableOpacity } from 'react-native'
import RoboText from '../../../common/components/RoboText'
import styles from '../../../common/styles'

interface P {
  onPress: () => void
}

// TODO: refactor button and use the same in authscreen and here
export default ({ onPress }: P) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        alignSelf: 'center',
        width: '91%',
        backgroundColor: styles.successGreen,
        padding: 16,
        borderRadius: 8 * 1,
        alignItems: 'center',
      }}
    >
      <RoboText size="medium" weight="bold" color="white" uppercase>
        Save
      </RoboText>
    </TouchableOpacity>
  )
}
