import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { IJobPostCard } from '../../../../common/types'
import ShortDescription from '../../../../common/components/ShortDescription'
import Tags from '../../../../common/components/Tags'
import Location from '../../../../common/components/Location'
import ButtonsContainer from './ButtonsContainer'
import { VerticalSpaceOf16 } from '../../../../common/components/VerticalSpaceOf16'
import { VerticalSpaceOf8 } from '../../../../common/components/VerticalSpaceOf8'
import { NavigationPropType } from '../../../../navigators/Navigator'

interface P {
  jobPost: IJobPostCard
}

const BottomPart = ({ jobPost }: P) => {
  const navigation = useNavigation<NavigationPropType>()

  const navigateToDetails = () => {
    navigation.navigate('DetailedJobCard', {
      jobPost,
    })
  }
  return (
    <View style={stylesheet.container}>
      <VerticalSpaceOf8 />
      <Location location={jobPost.location} />
      <VerticalSpaceOf8 />
      <Tags tags={jobPost.tags} />
      <VerticalSpaceOf16 />
      <ShortDescription
        description={jobPost.shortDescription}
        navigateToDetails={navigateToDetails}
      />
      <ButtonsContainer jobPost={jobPost} />
    </View>
  )
}

export default BottomPart

const stylesheet = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 8,
    paddingLeft: 16,
    paddingRight: 16,
  },
})
