import { useTheme } from '@react-navigation/native'
import React, { useState } from 'react'
import { View } from 'react-native'
import IconButton from '../../../../../common/components/IconButton'

const ButtonContainer: React.FC = () => {
  // get this actually from the data/context/something
  const [isHeartPressed, setIsHeartPressed] = useState(false)

  const handleShowFullInfo = () => console.log('showing full info')
  const handleClickLike = () => {
    console.log('Liking')
    setIsHeartPressed(b => !b)
  }
  const handleApplyNow = () => console.log('Applying!')

  const heartIconName = isHeartPressed ? 'heart' : 'heart-outline'

  const { colors } = useTheme()

  return (
    <View
      style={{
        marginLeft: 'auto',
        bottom: 100,
      }}
    >
      <IconButton
        iconName="ios-information-circle-outline"
        onPress={handleShowFullInfo}
        color={colors.primary}
      />
      <IconButton
        iconName={heartIconName}
        onPress={handleClickLike}
        color={colors.primary}
      />
      <IconButton
        iconName="chatbox-ellipses"
        onPress={handleApplyNow}
        color={colors.primary}
      />
    </View>
  )
}

export default ButtonContainer
