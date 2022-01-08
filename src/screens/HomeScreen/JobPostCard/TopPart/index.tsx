import React from 'react'
import { StyleSheet, View } from 'react-native'
import { JobPostCardProps } from '..'
import CompanyLogo from '../../../../common/components/CompanyLogo'
import CompanyNameAndTitle from '../../../../common/components/CompanyNameAndTitle'
import GoBackButton from '../../../../common/components/GoBackButton'
import JobPostImageBackground from '../../../../common/components/JobPostImageBackground'
import LinearGradientForPicture from './LinearGradientForPicture'

const TopPart = ({
  jobPost,
}: Omit<JobPostCardProps, 'height' | 'likedJobs'>) => {
  const navigateBackToSearch = () => console.log('going back to search')

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