import React, { useContext, useState } from 'react'
import { RouteProp, useTheme } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ChatRowsScreen from '../screens/ChatRowsScreen'
import ProfileScreen from '../screens/ProfileScreen'
import { bottomTabNavigatorOptions } from './bottomTabNavigatorOptions'
import { GlobalBooleansContext } from '../contexts/GlobalBooleansProvider'
import useLikedJobs from '../hooks/useLikedJobs'
import HomeScreenNavigator from './HomeScreenNavigator'
import styles from '../common/styles'

export type RootStackRouteProp = RouteProp<
  RootStackParamList,
  keyof RootStackParamList
>

// When adding new screens, remember to add them here
export type RootStackParamList = {
  HomeScreenNavigator: undefined
  ChatRowsScreen: undefined
  ProfileScreen: undefined
}

const RootStack = createBottomTabNavigator<RootStackParamList>()

export const BottomTabNavigator = () => {
  const { colors } = useTheme()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_s, setS] = useState(false) // eslint-disable-line no-unused-vars

  const { likedJobs } = useLikedJobs()
  // refactor these map-includes to be reusable in filtertopbar as well
  const showRedChatBadge = likedJobs.map(j => j.isUnread).includes(true)
  const showYellowChatBadge = likedJobs.map(j => j.isUnfinished).includes(true)
  const chatBadgeColor = showRedChatBadge
    ? colors.notification
    : styles.unfinishedYellow
  const showChatBadge = showRedChatBadge || showYellowChatBadge

  const {
    globalBooleans: { showProfileBadge },
  } = useContext(GlobalBooleansContext)

  return (
    <RootStack.Navigator
      initialRouteName="HomeScreenNavigator"
      screenOptions={({ route }) => bottomTabNavigatorOptions(route, colors)}
      screenListeners={{
        // This is done so the icons rerender with fresh data for badges
        focus: () => setS(s => !s),
      }}
    >
      <RootStack.Screen
        name="HomeScreenNavigator"
        component={HomeScreenNavigator}
      />
      <RootStack.Screen
        name="ChatRowsScreen"
        component={ChatRowsScreen}
        options={{
          tabBarBadge: showChatBadge ? '' : undefined,
          tabBarBadgeStyle: {
            backgroundColor: chatBadgeColor,
            minWidth: 12,
            maxHeight: 12,
            borderRadius: 7,
          },
        }}
      />
      <RootStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarBadge: showProfileBadge ? '' : undefined,
          tabBarBadgeStyle: {
            // TODO: refactor / DRY this up
            backgroundColor: colors.notification,
            minWidth: 12,
            maxHeight: 12,
            borderRadius: 7,
          },
        }}
      />
    </RootStack.Navigator>
  )
}
