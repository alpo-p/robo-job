import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import SmallCompanyLogo from './SmallCompanyLogo'
import SmallCompanyNameAndTitle from './SmallCompanyNameAndTitle'
import InfoButton from '../../../common/components/InfoButton'
import { NavigationPropType } from '../../../navigators/Navigator'
import { IJobPostCard } from '../../../common/types'
import { HorizontalSpaceOf8 } from '../../../common/components/HorizontalSpaceOf8'
import Indicator from './Indicator'

interface Row {
  jobPost: IJobPostCard
  isUnread?: boolean
  isUnfinished?: boolean
}

export const ChatRow: React.FC<Row> = ({ jobPost, isUnread, isUnfinished }) => {
  const navigation = useNavigation<NavigationPropType>()
  console.log(isUnfinished)

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
          flexDirection: 'row',
          marginLeft: 'auto',
          justifyContent: 'center',
        }}
      >
        {isUnread && <Indicator type="unread" />}
        {isUnfinished && <Indicator type="unfinished" />}
        <InfoButton onPress={navigateToDetails} smaller />
      </View>
    </View>
  )
}
