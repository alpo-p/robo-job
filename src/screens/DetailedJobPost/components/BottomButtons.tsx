import { useTheme } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import ChatButton from '../../../common/components/ChatButton'
import HeartButton from '../../../common/components/HeartButton'
import ShareButton from '../../../common/components/ShareButton'
import styles from '../../../common/styles'
import useLikedJobs, { likeOrDislikeJob } from '../../../hooks/useLikedJobs'

const HorizontalSpaceOf24 = () => (
  <View style={{ marginLeft: styles.commonSize }} />
)

interface P {
  id: string
}

export default ({ id }: P) => {
  const { likedJobs, setLikedJobs } = useLikedJobs()
  const [isHeartPressed, setIsHeartPressed] = useState(false)
  const { colors } = useTheme()

  useEffect(() => {
    const isLiked = likedJobs.includes(id)
    setIsHeartPressed(isLiked)
  }, [likedJobs, id])

  const handleClickLike = () => {
    setIsHeartPressed(b => !b)
    likeOrDislikeJob(id, setLikedJobs)
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
