import { useTheme } from '@react-navigation/native'
import React, { useState } from 'react'
import { View } from 'react-native'
import ChatButton from '../../../common/components/ChatButton'
import HeartButton from '../../../common/components/HeartButton'
import ShareButton from '../../../common/components/ShareButton'
import styles from '../../../common/styles'

const HorizontalSpaceOf24 = () => (
  <View style={{ marginLeft: styles.commonSize }} />
)

export default () => {
  // get this actually from the data/context/something
  const [isHeartPressed, setIsHeartPressed] = useState(false)
  const { colors } = useTheme()

  const handleClickLike = () => {
    console.log('Liking')
    setIsHeartPressed(b => !b)
  }
  const handleStartChat = () => console.log('Applying!')
  const handleShare = () => console.log('Sharing!')

  return (
    <View
      style={{
        bottom: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: colors.background,
        width: '100%',
      }}
    >
      <ShareButton onPress={handleShare} />
      <HorizontalSpaceOf24 />
      <ChatButton onPress={handleStartChat} />
      <HorizontalSpaceOf24 />
      <HeartButton isPressed={isHeartPressed} onPress={handleClickLike} />
    </View>
  )
}
