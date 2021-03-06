import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs'
import { IoniconsIconNames } from '../common/types/utilTypes'
import { ThemeColors } from '../common/themes'
import { RootStackRouteProp } from './BottomTabNavigator'

export const bottomTabNavigatorOptions = (
  route: RootStackRouteProp,
  colors: ThemeColors,
): BottomTabNavigationOptions => ({
  // @ts-ignore
  tabBarIcon: ({ focused, color, size }) => {
    let iconName: IoniconsIconNames
    if (route.name === 'HomeScreenNavigator') {
      iconName = focused ? 'home' : 'home-outline'
    } else if (route.name === 'ChatRowsScreen') {
      iconName = focused ? 'chatbox' : 'chatbox-outline'
    } else if (route.name === 'ProfileScreen') {
      iconName = focused ? 'person' : 'person-outline'
    }

    // @ts-ignore
    return <Ionicons name={iconName} size={size} color={color} />
  },
  tabBarActiveTintColor: colors.primary,
  tabBarInactiveTintColor: 'gray',
  tabBarStyle: {
    backgroundColor: colors.background,
    borderTopWidth: 1,
    borderColor: colors.border,
    height: 70,
  },
  headerShown: false,
  tabBarShowLabel: false,
  tabBarHideOnKeyboard: true,
})
