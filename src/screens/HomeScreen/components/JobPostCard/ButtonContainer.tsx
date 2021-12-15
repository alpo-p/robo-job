import React from 'react'
import { View } from 'react-native'

import { RoboButton } from '../../../../common/components/RoboButton'

const ButtonContainer: React.FC = () => {
  const handleShowFullInfo = () => console.log('showing full info')
  const handleClickLike = () => console.log('Liking')
  const handleApplyNow = () => console.log('Applying!')

  return (
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 4,
        marginTop: 'auto',
        maxHeight: 150,
        alignContent: 'space-between',
      }}
    >
      <RoboButton onPress={handleShowFullInfo} title="i" />
      <RoboButton onPress={handleClickLike} title="<3" />
      <RoboButton onPress={handleApplyNow} title="APPLY" />
    </View>
  )
}

export default ButtonContainer
