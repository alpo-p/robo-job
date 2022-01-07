import React from 'react'
import { View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useTheme } from '@react-navigation/native'
import RoboText from '../../../common/components/RoboText'

export const Deadline: React.FC<{ dl: string }> = ({ dl }) => {
  const { colors } = useTheme()
  return (
    <View
      style={{
        flexDirection: 'row',
      }}
    >
      <Ionicons
        style={{ marginTop: -3, marginRight: 2 }}
        name="timer-outline"
        color={colors.text}
        size={20}
      />
      <RoboText weight="light" size="small">
        Deadline: {dl}
      </RoboText>
    </View>
  )
}
