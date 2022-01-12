import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { JobPostCardProps } from '..'
import CompanyLogo from '../../../../common/components/CompanyLogo'
import CompanyNameAndTitle from '../../../../common/components/CompanyNameAndTitle'
import GoBackButton from '../../../../common/components/GoBackButton'
import JobPostImageBackground from '../../../../common/components/JobPostImageBackground'
import { HomeNavigationPropType } from '../../../../navigators/HomeScreenNavigator'
import LinearGradientForPicture from './LinearGradientForPicture'

const TopPart = ({
  jobPost,
}: Omit<JobPostCardProps, 'height' | 'likedJobs'>) => {
  const navigation = useNavigation<HomeNavigationPropType>()
  const navigateBackToSearch = () => navigation.navigate('SearchScreen')

  return (
    <View style={stylesheet.container}>
      <JobPostImageBackground pictureUrl={jobPost.pictureUrl}>
        <GoBackButton onPress={navigateBackToSearch} />
        <CompanyLogo url={jobPost.logoUrl} />
        <LinearGradientForPicture>
          <CompanyNameAndTitle
            companyName={jobPost.companyName}
            jobTitle={jobPost.jobTitle}
          />
        </LinearGradientForPicture>
      </JobPostImageBackground>
    </View>
  )
}

export default TopPart

const stylesheet = StyleSheet.create({
  container: {
    height: 280,
  },
})
