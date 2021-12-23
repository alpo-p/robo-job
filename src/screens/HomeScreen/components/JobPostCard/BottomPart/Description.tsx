import React from 'react'
import { View } from 'react-native'

import ContentText from '../../../../../common/components/ContentText'

interface Props {
  description: string
}

const Description: React.FC<Props> = ({ description }) => {
  return (
    <View
      style={{
        width: 280,
        marginTop: 24,
      }}
    >
      <ContentText>{description}</ContentText>
    </View>
  )
}

export default Description
