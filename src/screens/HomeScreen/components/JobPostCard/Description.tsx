import React from 'react'
import { View } from 'react-native'

import RoboText from '../../../../common/components/RoboText'

interface Props {
  description: string
}

const Description: React.FC<Props> = ({ description }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 10,
        width: 300,
      }}
    >
      <RoboText weight="light" size="small">
        {description}
      </RoboText>
    </View>
  )
}

export default Description
