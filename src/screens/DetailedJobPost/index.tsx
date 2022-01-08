import { RouteProp, useNavigation } from '@react-navigation/native'
import React from 'react'
import { ScrollView, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { IJobPostCard } from '../../common/types'
import BasicInfo from './components/BasicInfo'
import BottomButtons from './components/BottomButtons'
import AboutThePosition from './components/AbouThePosition'
import PictureAndLogo from './components/PictureAndLogo'
import AboutTheCompany from './components/AboutTheCompany'
import GoBackButton from '../../common/components/GoBackButton'
import { VerticalSpaceOf24 } from '../../common/components/VerticalSpaceOf24'

interface P {
  route: RouteProp<{ params: { jobPost: IJobPostCard } }, 'params'>
}

const DetailedJobCard: React.FC<P> = ({
  route: {
    params: { jobPost },
  },
}) => {
  const navigation = useNavigation()
  const navigateBackToSearch = () => navigation.goBack()
  // TODO: maybe don't pass on the whole jobPost but instead fetch from context/etc.?

  return (
    <SafeAreaView>
      <GoBackButton onPress={navigateBackToSearch} />
      <ScrollView>
        <PictureAndLogo
          pictureUrl={jobPost.pictureUrl}
          logoUrl={jobPost.logoUrl}
        />
        <View
          style={{
            marginTop: 64,
            marginBottom: 50,
            paddingLeft: 16,
            paddingRight: 24,
          }}
        >
          <BasicInfo jobPost={jobPost} />
          <VerticalSpaceOf24 />
          <AboutThePosition description={jobPost.longDescription} />
          <VerticalSpaceOf24 />
          <AboutTheCompany jobPost={jobPost} />
        </View>
      </ScrollView>
      <BottomButtons id={jobPost.id} />
    </SafeAreaView>
  )
}

export default DetailedJobCard
