import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import SmallCompanyLogo from './SmallCompanyLogo'
import { Row } from './ChatsContainer'
import SmallCompanyNameAndTitle from './SmallCompanyNameAndTitle'
import InfoButton from '../../../common/components/InfoButton'
import { NavigationPropType } from '../../../Navigator'
import ChatButton from '../../../common/components/ChatButton'

export const ChatRow: React.FC<Row> = ({ onPress, jobPost }) => {
  const navigation = useNavigation<NavigationPropType>()
  const navigateToDetails = () => {
    navigation.navigate('DetailedJobCard', {
      jobPost,
    })
  }
  const navigateToChat = () => {
    console.log('opening chat')
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
        onPress={onPress}
      >
        <SmallCompanyLogo url={jobPost.logoUrl} />
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
          alignContent: 'flex-end',
          alignItems: 'center',
        }}
      >
        <InfoButton onPress={navigateToDetails} smaller />
        <View
          style={{
            marginRight: 8,
          }}
        />
        <ChatButton onPress={navigateToChat} smaller />
      </View>
    </View>
  )
}
