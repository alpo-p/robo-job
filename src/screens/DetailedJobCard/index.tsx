// @ts-nocheck
import { RouteProp } from '@react-navigation/native'
import React from 'react'
import { ScrollView, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { IJobPostCard } from '../../common/types'
import BasicInfo from './components/BasicInfo'
import CardBreak from './components/CardBreak'
import HoveringButtons from './components/HoveringButtons'
import LongJobDescription from './components/LongJobDescription'
import PictureAndLogo from './components/PictureAndLogo'
import AboutTheCompany from './components/AboutTheCompany'

interface P {
  route: RouteProp<{ params: { jobPost: IJobPostCard } }, 'params'>
}

const DetailedJobCard: React.FC<P> = ({
  route: {
    params: { jobPost },
  },
}) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <PictureAndLogo
          pictureUrl={jobPost.pictureUrl}
          logoUrl={jobPost.logoUrl}
        />
        <View
          style={{
            paddingLeft: 16,
            paddingRight: 16,
          }}
        >
          <BasicInfo jobPost={jobPost} />
          <CardBreak />
          <LongJobDescription desc={jobPost.longDescription} />
          <CardBreak />
          <AboutTheCompany />
          <HoveringButtons id={jobPost.id} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default DetailedJobCard
