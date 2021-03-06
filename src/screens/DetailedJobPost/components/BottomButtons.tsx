import { useNavigation, useTheme } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { Alert, View } from 'react-native'
import ChatButton from '../../../common/components/ChatIconButton'
import HeartButton from '../../../common/components/HeartIconButton'
import ShareButton from '../../../common/components/ShareIconButton'
import styles from '../../../common/styles'
import { IJobPostCard } from '../../../common/types'
import useLikedJobs, { likeOrDislikeJob } from '../../../hooks/useLikedJobs'
import { NavigationPropType } from '../../../navigators/Navigator'

const HorizontalSpaceOf24 = () => (
  <View style={{ marginLeft: styles.commonSize }} />
)

interface P {
  jobPost: IJobPostCard
}

export default ({ jobPost }: P) => {
  const navigation = useNavigation<NavigationPropType>()

  const { likedJobs, setLikedJobs } = useLikedJobs()
  const [isHeartPressed, setIsHeartPressed] = useState(false)
  const { colors } = useTheme()
  const { id } = jobPost

  useEffect(() => {
    const isLiked = likedJobs.map(job => job.id).includes(id)
    setIsHeartPressed(isLiked)
  }, [likedJobs, id])

  const handleClickLike = () => {
    setIsHeartPressed(b => !b)
    likeOrDislikeJob(id, setLikedJobs)
  }

  const handleStartChat = () => {
    // Starting a chat means here the user likes the job
    // TODO: Maybe in the future this should be triggered only when user starts answering
    if (!isHeartPressed) {
      handleClickLike()
    }
    navigation.navigate('ChatScreen', {
      jobPost,
    })
  }

  const handleShare = () =>
    Alert.alert(
      'Pressing this button will trigger sharing this job to your friends',
    )

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
