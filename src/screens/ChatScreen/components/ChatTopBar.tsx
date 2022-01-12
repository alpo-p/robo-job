import { useNavigation, useTheme } from '@react-navigation/native'
import React from 'react'
import { View } from 'react-native'
import GoBackButton from '../../../common/components/GoBackButton'
import { HorizontalSpaceOf8 } from '../../../common/components/HorizontalSpaceOf8'
import InfoButton from '../../../common/components/InfoButton'
import { IJobPostCard } from '../../../common/types'
import { NavigationPropType } from '../../../navigators/Navigator'
import SmallCompanyLogo from '../../ChatRowsScreen/components/SmallCompanyLogo'
import SmallCompanyNameAndTitle from '../../ChatRowsScreen/components/SmallCompanyNameAndTitle'

interface P {
  jobPost: IJobPostCard
}

// TODO: make SmallCompanyNameAndTitle clickable and navigate to details
export default ({ jobPost }: P) => {
  const { colors } = useTheme()
  const navigation = useNavigation<NavigationPropType>()

  const navigateBack = () => navigation.goBack()

  const navigateToDetails = () => {
    navigation.navigate('DetailedJobCard', {
      jobPost,
    })
  }

  return (
    <View
      style={{
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: colors.border,
        height: 64,
        alignItems: 'center',
      }}
    >
      <GoBackButton onPress={navigateBack} editStylesForChatScreen />
      <HorizontalSpaceOf8 />
      <SmallCompanyLogo url={jobPost.logoUrl} size="small" />

      <SmallCompanyNameAndTitle
        name={jobPost.companyName}
        title={jobPost.jobTitle}
      />
      <View
        style={{
          marginLeft: 'auto',
          justifyContent: 'center',
          marginRight: 8,
        }}
      >
        <InfoButton onPress={navigateToDetails} smaller />
      </View>
    </View>
  )
}
