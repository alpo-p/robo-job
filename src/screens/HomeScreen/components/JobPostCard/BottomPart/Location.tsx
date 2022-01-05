import { Ionicons } from '@expo/vector-icons'
import { useTheme } from '@react-navigation/native'
import React from 'react'
import { View } from 'react-native'

import RoboText from '../../../../../common/components/RoboText'

interface Props {
  location: string
}

const Location: React.FC<Props> = ({ location }) => {
  const { colors } = useTheme()
  return (
    <View style={{ flexDirection: 'row', marginTop: 8 }}>
      <Ionicons
        style={{ marginTop: -3, marginRight: 2 }}
        name="location"
        color={colors.icon}
        size={20}
      />
      <RoboText weight="light" size="small">
        {location}
      </RoboText>
    </View>
  )
}

export default Location
