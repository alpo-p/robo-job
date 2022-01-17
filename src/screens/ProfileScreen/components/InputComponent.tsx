import React from 'react'
import { TextInput, View } from 'react-native'
import RoboText from '../../../common/components/RoboText'
import styles from '../../../common/styles'

interface P {
  title: string
  placeholder: string
  height: number
  value: string
  // eslint-disable-next-line no-unused-vars
  onChangeText: (text: string) => void
  multiline?: boolean
  optional?: boolean
}
export default ({
  title,
  placeholder,
  height,
  value,
  onChangeText,
  multiline,
  optional,
}: P) => {
  return (
    <View
      style={{
        marginLeft: 16,
        marginRight: 16,
        alignItems: 'center',
      }}
    >
      <RoboText color="white" size="large">
        {title}
      </RoboText>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={styles.mediumDarkGrey}
        textAlign="center"
        textAlignVertical="top"
        style={{
          height,
          width: '100%',
          padding: 12,
          backgroundColor: 'white',
          borderRadius: 2,
          color: styles.darkText,
          fontSize: 16,
          textAlign: multiline ? 'left' : 'center',
        }}
        value={value}
        onChangeText={onChangeText}
        multiline={multiline}
      />
      <RoboText color="white" weight="light">
        {optional ? '(optional)' : 'recommended to fill'}
      </RoboText>
    </View>
  )
}
