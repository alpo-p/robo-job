import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { IoniconsIconNames } from '../common/types'
import sharedStyles from '../common/styles'

// TODO: fix white line/padding above tabbar https://stackoverflow.com/questions/46814791/tabnavigator-extra-padding
// TODO: properly type this file

// @ts-ignore
export const rootNavigatorScreenOptions = ({ route }) => ({
  // @ts-ignore
  tabBarIcon: ({ focused, color, size }) => {
    let iconName: IoniconsIconNames
    if (route.name === 'HomeScreen') {
      iconName = focused ? 'home' : 'home-outline'
    } else if (route.name === 'ChatScreen') {
      iconName = focused ? 'chatbox-ellipses' : 'chatbox-ellipses-outline'
    } else if (route.name === 'ProfileScreen') {
      iconName = focused ? 'clipboard' : 'clipboard-outline'
    }

    // @ts-ignore
    return <Ionicons name={iconName} size={size} color={color} />
  },
  tabBarActiveTintColor: sharedStyles.primaryColor,
  tabBarInactiveTintColor: 'gray',
  tabBarShowLabel: false,
  tabBarHideOnKeyboard: true,
  tabBarStyle: { backgroundColor: 'black' },
  headerShown: false,
})