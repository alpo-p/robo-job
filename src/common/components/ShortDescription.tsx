import React from 'react'
import { View } from 'react-native'

import ContentText from './ContentText'

interface Props {
  description: string
}

const Description: React.FC<Props> = ({ description }) => {
  return (
    <View
      style={{
        width: 280,
      }}
    >
      <ContentText>{description}</ContentText>
    </View>
  )
}

export default Description
