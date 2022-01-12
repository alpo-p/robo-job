import React from 'react'
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack'
import SearchScreen from '../screens/SearchScreen'
import HomeScreen from '../screens/HomeScreen'

export type HomeStackParamList = {
  SearchScreen: undefined
  HomeScreen: undefined
}

export type HomeNavigationPropType =
  NativeStackNavigationProp<HomeStackParamList>

const HomeScreenStack = createNativeStackNavigator<HomeStackParamList>()

const HomeScreenNavigator = () => {
  return (
    <HomeScreenStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="SearchScreen"
    >
      <HomeScreenStack.Screen name="SearchScreen" component={SearchScreen} />
      <HomeScreenStack.Screen name="HomeScreen" component={HomeScreen} />
    </HomeScreenStack.Navigator>
  )
}

export default HomeScreenNavigator
