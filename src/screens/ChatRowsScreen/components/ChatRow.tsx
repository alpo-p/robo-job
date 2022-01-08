import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import SmallCompanyLogo from './SmallCompanyLogo'
import SmallCompanyNameAndTitle from './SmallCompanyNameAndTitle'
import InfoButton from '../../../common/components/InfoButton'
import { NavigationPropType } from '../../../Navigator'
import { IJobPostCard } from '../../../common/types'
import { HorizontalSpaceOf8 } from '../../../common/components/HorizontalSpaceOf8'

interface Row {
  jobPost: IJobPostCard
}

export const ChatRow: React.FC<Row> = ({ jobPost }) => {
  const navigation = useNavigation<NavigationPropType>()

  const navigateToDetails = () => {
    navigation.navigate('DetailedJobCard', {
      jobPost,
    })
  }

  const navigateToChatScreen = () => {
    navigation.navigate('ChatScreen', {
      jobPost,
    })
  }

  return (
    <View
      style={{
        flexDirection: 'row',
        margin: 16,
      }}
    >
      <TouchableOpacity
        style={{
          height: 40,
          flexDirection: 'row',
          alignSelf: 'flex-start',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={navigateToChatScreen}
      >
        <SmallCompanyLogo url={jobPost.logoUrl} />
        <HorizontalSpaceOf8 />
        <SmallCompanyNameAndTitle
          name={jobPost.companyName}
          title={jobPost.jobTitle}
        />
      </TouchableOpacity>
      <View
        style={{
          marginLeft: 'auto',
          justifyContent: 'center',
        }}
      >
        <InfoButton onPress={navigateToDetails} smaller />
      </View>
    </View>
  )
}
