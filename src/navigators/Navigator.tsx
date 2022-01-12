import React from 'react'
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack'
import {
  CompositeNavigationProp,
  NavigationContainer,
} from '@react-navigation/native'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { useColorScheme } from 'react-native'
import AuthScreen from '../screens/AuthScreen'
import { DarkTheme, LightTheme } from '../common/themes'
import DetailedJobCard from '../screens/DetailedJobPost'
import { IJobPostCard } from '../common/types'
import ChatScreen from '../screens/ChatScreen'
import { BottomTabNavigator, RootStackParamList } from './BottomTabNavigator'

type MainStackParamList = {
  AuthScreen: undefined
  RootNavigator: undefined
  DetailedJobCard: { jobPost: IJobPostCard }
  ChatScreen: { jobPost: IJobPostCard }
}

// This is used as type parameter for useNavigation
export type NavigationPropType = CompositeNavigationProp<
  NativeStackNavigationProp<MainStackParamList>,
  BottomTabNavigationProp<RootStackParamList>
>

const MainStack = createNativeStackNavigator<MainStackParamList>()

const Navigator = () => {
  const scheme = useColorScheme()
  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : LightTheme}>
      <MainStack.Navigator
        initialRouteName="AuthScreen"
        screenOptions={{ headerShown: false }}
      >
        <MainStack.Screen name="AuthScreen" component={AuthScreen} />
        <MainStack.Screen name="RootNavigator" component={BottomTabNavigator} />
        <MainStack.Screen name="DetailedJobCard" component={DetailedJobCard} />
        <MainStack.Screen name="ChatScreen" component={ChatScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator
