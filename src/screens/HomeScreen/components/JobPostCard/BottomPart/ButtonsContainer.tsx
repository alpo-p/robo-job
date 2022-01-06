import { useNavigation, useTheme } from '@react-navigation/native'
import React, { useState } from 'react'
import { View } from 'react-native'
import IconButton from '../../../../../common/components/IconButton'
import styles from '../../../../../common/styles'
import { IJobPostCard } from '../../../../../common/types'
import { NavigationPropType } from '../../../../../Navigator'

interface Props {
  jobPost: IJobPostCard
}

const ButtonsContainer: React.FC<Props> = ({ jobPost }) => {
  // get this actually from the data/context/something
  const [isHeartPressed, setIsHeartPressed] = useState(false)
  const navigation = useNavigation<NavigationPropType>()

  const navigateToDetails = () => {
    navigation.navigate('DetailedJobCard', {
      jobPost,
    })
  }

  const handleClickLike = () => {
    console.log('Liking')
    setIsHeartPressed(b => !b)
  }
  const handleApplyNow = () => console.log('Applying!')
  const handleShare = () => console.log('Sharing!')

  const heartIconName = isHeartPressed ? 'heart' : 'heart-outline'

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
      <View style={{ marginTop: styles.commonSize }} />
      <IconButton
        iconName={heartIconName}
        onPress={handleClickLike}
        color={colors.primary}
      />
      <View style={{ marginTop: styles.commonSize }} />
      <IconButton
        iconName="chatbox-ellipses"
        onPress={handleApplyNow}
        color={colors.primary}
      />
      <View style={{ marginTop: styles.commonSize }} />
      <IconButton
        iconName="share-social-outline"
        onPress={handleShare}
        color={colors.primary}
      />
    </View>
  )
}

export default ButtonsContainer
