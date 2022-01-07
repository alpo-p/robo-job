import { useNavigation, useTheme } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import ChatButton from '../../../../common/components/ChatButton'
import HeartButton from '../../../../common/components/HeartButton'
import IconButton from '../../../../common/components/IconButton'
import ShareButton from '../../../../common/components/ShareButton'
import { IJobPostCard } from '../../../../common/types'
import { NavigationPropType } from '../../../../Navigator'
import { VerticalSpaceOf24 } from '../../../../common/components/VerticalSpaceOf24'
import useLikedJobs from '../../../../hooks/useLikedJobs'

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
    setLikedJobs(jobs => {
      if (jobs.includes(id)) {
        return jobs.filter(likedJobId => likedJobId !== id)
      }
      return jobs.concat(id)
    })
  }
  const handleStartChat = () => console.log('Applying!')
  const handleShare = () => console.log('Sharing!')

  const { colors } = useTheme()

  return (
    <View
      style={{
        marginLeft: 'auto',
        left: 0,
        bottom: '30%',
      }}
    >
      <IconButton
        iconName="ios-information-circle-outline"
        onPress={navigateToDetails}
        color={colors.primary}
      />
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
