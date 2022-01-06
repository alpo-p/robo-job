import { useTheme } from '@react-navigation/native'
import React from 'react'
import { View } from 'react-native'
import styles from '../styles'
import RoboText from './RoboText'

interface P {
  companyName: string
  jobTitle: string
  editStylesForDetailedView?: boolean
}
export default ({ companyName, jobTitle, editStylesForDetailedView }: P) => {
  const { colors } = useTheme()
  const b = editStylesForDetailedView

  return (
    <View
      style={{
        alignItems: b ? undefined : 'center',
      }}
    >
      <RoboText
        uppercase={!b}
        color={b ? colors.primary : styles.white}
        size="large"
        weight="bold"
      >
        {companyName}
      </RoboText>
      {editStylesForDetailedView && (
        <View
          style={{
            marginTop: 4,
          }}
        />
      )}
      <RoboText color={b ? colors.text : styles.white} size="large">
        {jobTitle}
      </RoboText>
    </View>
  )
}
