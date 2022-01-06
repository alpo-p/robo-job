import React from 'react'
import { View } from 'react-native'

import ContentText from './ContentText'

interface Props {
  description: string
  useWiderStyle?: boolean
}

const Description: React.FC<Props> = ({ description, useWiderStyle }) => {
  return (
    <View
      style={{
        width: useWiderStyle ? '100%' : 280,
      }}
    >
      <ContentText>{description}</ContentText>
    </View>
  )
}

export default Description
