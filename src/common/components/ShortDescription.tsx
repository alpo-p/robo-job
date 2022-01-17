import { useTheme } from '@react-navigation/native'
import React from 'react'
import { TouchableOpacity, View } from 'react-native'

import ContentText from './ContentText'
import RoboText from './RoboText'

interface Props {
  description: string
  useWiderStyle?: boolean
  navigateToDetails?: () => void
}

const Description: React.FC<Props> = ({
  description,
  useWiderStyle,
  navigateToDetails,
}) => {
  const { colors } = useTheme()
  return (
    <View
      style={{
        width: useWiderStyle ? '100%' : 280,
      }}
    >
      <ContentText>{description}</ContentText>
      {navigateToDetails && (
        <TouchableOpacity onPress={navigateToDetails} style={{ marginTop: 8 }}>
          <RoboText color={colors.primary} weight="bold">
            Read more
          </RoboText>
        </TouchableOpacity>
      )}
    </View>
  )
}

export default Description
