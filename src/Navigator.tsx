/* eslint-disable react/no-unstable-nested-components */
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import HomeScreen from './screens/HomeScreen/HomeScreen'
import AuthScreen from './screens/AuthScreen/AuthScreen'
import ChatScreen from './screens/ChatScreen/ChatScreen'
import ProfileScreen from './screens/ProfileScreen/ProfileScreen'
import { IoniconsIconNames } from './sharedTypes'

const MainStack = createNativeStackNavigator()
const RootStack = createBottomTabNavigator()

const RootNavigator = () => {
  // @ts-ignore
  const screenOptions = ({ route }) => ({
    // @ts-ignore
    tabBarIcon: ({ focused, color, size }) => {
      let iconName: IoniconsIconNames
      if (route.name === 'HomeScreen') {
        iconName = focused ? 'home' : 'home-outline'
      } else if (route.name === 'ChatScreen') {
        iconName = focused ? 'chatbox-ellipses' : 'chatbox-ellipses-outline'
      } else if (route.name === 'ProfileScreen') {
        iconName = focused ? 'man' : 'man-outline'
      }

      // @ts-ignore
      return <Ionicons name={iconName} size={size} color={color} />
    },
    tabBarActiveTintColor: 'tomato',
    tabBarInactiveTintColor: 'gray',
  })
  return (
    <RootStack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={screenOptions}
    >
      <RootStack.Screen name="HomeScreen" component={HomeScreen} />
      <RootStack.Screen name="ChatScreen" component={ChatScreen} />
      <RootStack.Screen name="ProfileScreen" component={ProfileScreen} />
    </RootStack.Navigator>
  )
}

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
