import React, { useContext, useState } from 'react'
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
import ChatRowsScreen from './screens/ChatRowsScreen'
import ProfileScreen from './screens/ProfileScreen'
import { bottomTabNavigatorOptions } from './configs/bottomTabNavigatorOptions'
import { DarkTheme, LightTheme } from './common/themes'
import DetailedJobCard from './screens/DetailedJobPost'
import { IJobPostCard } from './common/types'
import ChatScreen from './screens/ChatScreen'
import { GlobalBooleansContext } from './contexts/GlobalBooleansProvider'
import useLikedJobs from './hooks/useLikedJobs'

type MainStackParamList = {
  AuthScreen: undefined
  RootNavigator: undefined
  DetailedJobCard: { jobPost: IJobPostCard }
  ChatScreen: { jobPost: IJobPostCard }
}

// When adding new screens, remember to add them here
type RootStackParamList = {
  HomeScreen: undefined
  ChatRowsScreen: undefined
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_s, setS] = useState(false) // eslint-disable-line no-unused-vars

  const { likedJobs } = useLikedJobs()
  const showChatBadge = likedJobs.map(j => j.isUnread).includes(true)

  const {
    globalBooleans: { showProfileBadge },
  } = useContext(GlobalBooleansContext)

  return (
    <RootStack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={({ route }) => bottomTabNavigatorOptions(route, colors)}
      screenListeners={{
        // This is done so the icons rerender with fresh data for badges
        focus: () => setS(s => !s),
      }}
    >
      <RootStack.Screen name="HomeScreen" component={HomeScreen} />
      <RootStack.Screen
        name="ChatRowsScreen"
        component={ChatRowsScreen}
        options={{
          tabBarBadge: showChatBadge ? '' : undefined,
        }}
      />
      <RootStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarBadge: showProfileBadge ? '' : undefined,
        }}
      />
    </RootStack.Navigator>
  )
}

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
