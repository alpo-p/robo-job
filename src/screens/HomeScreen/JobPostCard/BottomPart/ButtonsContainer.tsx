import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import ChatButton from '../../../../common/components/ChatButton'
import HeartButton from '../../../../common/components/HeartButton'
import ShareButton from '../../../../common/components/ShareButton'
import { IJobPostCard } from '../../../../common/types'
import { NavigationPropType } from '../../../../Navigator'
import { VerticalSpaceOf24 } from '../../../../common/components/VerticalSpaceOf24'
import useLikedJobs, { likeOrDislikeJob } from '../../../../hooks/useLikedJobs'
import InfoButton from '../../../../common/components/InfoButton'

interface Props {
  jobPost: IJobPostCard
}

const ButtonsContainer: React.FC<Props> = ({ jobPost }) => {
  const { likedJobs, setLikedJobs } = useLikedJobs()

  const [isHeartPressed, setIsHeartPressed] = useState(false)

  const navigation = useNavigation<NavigationPropType>()

  const { id } = jobPost

  useEffect(() => {
    const isLiked = likedJobs.includes(jobPost.id)
    setIsHeartPressed(isLiked)
  }, [likedJobs, jobPost.id])

  const navigateToDetails = () => {
    navigation.navigate('DetailedJobCard', {
      jobPost,
    })
  }

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

  const handleShare = () => console.log('Sharing!')

  return (
    <View
      style={{
        marginLeft: 'auto',
        left: 0,
        bottom: '30%',
      }}
    >
      <InfoButton onPress={navigateToDetails} />
      <VerticalSpaceOf24 />
      <HeartButton isPressed={isHeartPressed} onPress={handleClickLike} />
      <VerticalSpaceOf24 />
      <ChatButton onPress={handleStartChat} />
      <VerticalSpaceOf24 />
      <ShareButton onPress={handleShare} />
    </View>
  )
}

export default ButtonsContainer
