import React from 'react'
import { View } from 'react-native'
import IconButton from '../../../../../common/components/IconButton'

const ButtonContainer: React.FC = () => {
  const handleShowFullInfo = () => console.log('showing full info')
  const handleClickLike = () => console.log('Liking')
  const handleApplyNow = () => console.log('Applying!')

  return (
    <View
      style={{
        marginLeft: 'auto',
        bottom: 100,
      }}
    >
      <IconButton
        iconName="information-circle-outline"
        onPress={handleShowFullInfo}
        color="white"
      />
      <IconButton
        iconName="heart-circle-outline"
        onPress={handleClickLike}
        color="white"
      />
      <IconButton
        iconName="chatbubbles-outline"
        onPress={handleApplyNow}
        color="white"
      />
    </View>
  )
}

export default ButtonContainer
