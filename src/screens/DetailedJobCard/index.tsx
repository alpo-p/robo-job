import { RouteProp } from '@react-navigation/native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import RoboText from '../../common/components/RoboText'

interface P {
  route: RouteProp<{ params: { id: string } }, 'params'>
}

const DetailedJobCard: React.FC<P> = ({
  route: {
    params: { id },
  },
}) => {
  return (
    <SafeAreaView>
      <RoboText>Detailed Job Card here</RoboText>
      <RoboText>The id is {id}</RoboText>
    </SafeAreaView>
  )
}

export default DetailedJobCard
