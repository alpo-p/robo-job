import React from 'react'
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack'
import {
  CompositeNavigationProp,
  NavigationContainer,
  RouteProp,
  useTheme,
} from '@react-navigation/native'
import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs'
import { useColorScheme } from 'react-native'
import HomeScreen from './screens/HomeScreen'
import AuthScreen from './screens/AuthScreen'
import ChatScreen from './screens/ChatScreen/ChatScreen'
import ProfileScreen from './screens/ProfileScreen/ProfileScreen'
import { bottomTabNavigatorOptions } from './configs/bottomTabNavigatorOptions'
import { DarkTheme, LightTheme } from './common/themes'
import DetailedJobCard from './screens/DetailedJobPost'
import { IJobPostCard } from './common/types'

type MainStackParamList = {
  AuthScreen: undefined
  RootNavigator: undefined
  DetailedJobCard: { jobPost: IJobPostCard }
}

// When adding new screens, remember to add them here
type RootStackParamList = {
  HomeScreen: undefined
  ChatScreen: undefined
  ProfileScreen: undefined
}

export type RootStackRouteProp = RouteProp<
  RootStackParamList,
  keyof RootStackParamList
>

// This is used as type parameter for useNavigation
export type NavigationPropType = CompositeNavigationProp<
  NativeStackNavigationProp<MainStackParamList>,
  BottomTabNavigationProp<RootStackParamList>
>

const RootStack = createBottomTabNavigator<RootStackParamList>()
const BottomTabNavigator = () => {
  const { colors } = useTheme()

  return (
    <RootStack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={({ route }) => bottomTabNavigatorOptions(route, colors)}
    >
      <RootStack.Screen name="HomeScreen" component={HomeScreen} />
      <RootStack.Screen name="ChatScreen" component={ChatScreen} />
      <RootStack.Screen name="ProfileScreen" component={ProfileScreen} />
    </RootStack.Navigator>
  )
}

const MainStack = createNativeStackNavigator<MainStackParamList>()
const Navigator = () => {
  const scheme = useColorScheme()
  // const scheme = 'dark'

  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : LightTheme}>
      <MainStack.Navigator
        initialRouteName="AuthScreen"
        screenOptions={{ headerShown: false }}
      >
        <MainStack.Screen name="AuthScreen" component={AuthScreen} />
        <MainStack.Screen name="RootNavigator" component={BottomTabNavigator} />
        <MainStack.Screen name="DetailedJobCard" component={DetailedJobCard} />
      </MainStack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator
