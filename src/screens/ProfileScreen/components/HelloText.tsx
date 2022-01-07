import React from 'react'
import { View } from 'react-native'
import RoboText from '../../../common/components/RoboText'

export default () => (
  <View
    style={{
      alignSelf: 'center',
    }}
  >
    <RoboText weight="bold" size="largest" color="white" uppercase>
      HELLO
    </RoboText>
  </View>
)
