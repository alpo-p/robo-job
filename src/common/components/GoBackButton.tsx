import { useTheme } from '@react-navigation/native'
import React from 'react'
import IconButton from './IconButton'

interface P {
  onPress: () => void
  editStylesForChatScreen?: boolean
}

export default ({ onPress, editStylesForChatScreen }: P) => {
  const { colors } = useTheme()
  return (
    <IconButton
      iconName={
        editStylesForChatScreen ? 'chevron-back' : 'md-arrow-back-circle'
      }
      onPress={onPress}
      color={editStylesForChatScreen ? colors.text : colors.primary}
      style={{
        alignSelf: editStylesForChatScreen ? undefined : 'flex-start',
        marginLeft: 8,
        position: editStylesForChatScreen ? 'relative' : 'absolute',
        zIndex: 1,
        top: editStylesForChatScreen ? undefined : 48,
      }}
    />
  )
}
