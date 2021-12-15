import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { View } from 'react-native'

import RoboText from '../../../../../common/components/RoboText'

interface Props {
  location: string
}

const Location: React.FC<Props> = ({ location }) => (
  <View style={{ flexDirection: 'row', marginBottom: 8 }}>
    <Ionicons name="location" color="white" size={20} />
    <RoboText weight="light" size="small">
      {location}
    </RoboText>
  </View>
)

export default Location
