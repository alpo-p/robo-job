import { useTheme } from '@react-navigation/native'
import React from 'react'
import { TextInput, TouchableOpacity, View } from 'react-native'
import RoboText from '../../../common/components/RoboText'
import styles from '../../../common/styles'

interface P {
  value: string
  // eslint-disable-next-line no-unused-vars
  onChangeText: (s: string) => void
  handleSendAnswer: () => void
  isApplying?: boolean
}

// TODO: refactor
export default ({ value, onChangeText, handleSendAnswer, isApplying }: P) => {
  const { colors } = useTheme()
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: colors.background,
        borderWidth: 1,
        borderColor: colors.primary,
        margin: 16,
        padding: 8,
        borderRadius: 16,
        marginBottom: 16,
      }}
    >
      <TextInput
        style={{
          backgroundColor: colors.background,
          color: colors.text,
          padding: 4,
          flex: 5,
        }}
        value={value}
        onChangeText={onChangeText}
        placeholder="Write your answer here..."
        placeholderTextColor={colors.primary}
        multiline
      />
      <TouchableOpacity
        onPress={handleSendAnswer}
        style={{
          justifyContent: 'center',
          flex: 1,
          marginLeft: 8,
        }}
      >
        <RoboText
          size="medium"
          weight="bold"
          color={isApplying ? styles.successGreen : colors.primary}
        >
          {isApplying ? 'Apply' : 'Send'}
        </RoboText>
      </TouchableOpacity>
    </View>
  )
}
