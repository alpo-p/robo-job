/* eslint-disable react/no-unstable-nested-components */
import React from 'react'
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack'
import {
  CompositeNavigationProp,
  NavigationContainer,
} from '@react-navigation/native'
import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs'
import HomeScreen from './screens/HomeScreen'
import AuthScreen from './screens/AuthScreen'
import ChatScreen from './screens/ChatScreen/ChatScreen'
import ProfileScreen from './screens/ProfileScreen/ProfileScreen'
import { rootNavigatorScreenOptions } from './configs/rootNavigatorScreenOptions'

type MainStackParamList = {
  AuthScreen: undefined
  RootNavigator: undefined
}

// When adding new screens, remember to add them here
type RootStackParamList = {
  HomeScreen: undefined
  ChatScreen: undefined
  ProfileScreen: undefined
}

// This is used as type parameter for useNavigation
export type NavigationPropType = CompositeNavigationProp<
  NativeStackNavigationProp<MainStackParamList>,
  BottomTabNavigationProp<RootStackParamList>
>

const MainStack = createNativeStackNavigator<MainStackParamList>()
const RootStack = createBottomTabNavigator<RootStackParamList>()

const RootNavigator = () => (
  <RootStack.Navigator
    initialRouteName="HomeScreen"
    screenOptions={rootNavigatorScreenOptions}
  >
    <RootStack.Screen name="HomeScreen" component={HomeScreen} />
    <RootStack.Screen name="ChatScreen" component={ChatScreen} />
    <RootStack.Screen name="ProfileScreen" component={ProfileScreen} />
  </RootStack.Navigator>
)

const Navigator = () => (
  <NavigationContainer>
    <MainStack.Navigator
      initialRouteName="AuthScreen"
      screenOptions={{ headerShown: false }}
    >
      <MainStack.Screen name="AuthScreen" component={AuthScreen} />
      <MainStack.Screen name="RootNavigator" component={RootNavigator} />
    </MainStack.Navigator>
  </NavigationContainer>
)

export default Navigator
