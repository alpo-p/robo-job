// @ts-nocheck
import { RouteProp } from '@react-navigation/native'
import React from 'react'
import { ScrollView, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { IJobPostCard } from '../../common/types'
import BasicInfo from './components/BasicInfo'
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
            marginTop: 50,
            paddingLeft: 16,
            paddingRight: 16,
          }}
        >
          <BasicInfo jobPost={jobPost} />
          <LongJobDescription description={jobPost.longDescription} />
          <AboutTheCompany jobPost={jobPost} />
          <HoveringButtons id={jobPost.id} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default DetailedJobCard
