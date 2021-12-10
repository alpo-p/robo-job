import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from './screens/HomeScreen/HomeScreen'
import AuthScreen from './screens/AuthScreen/AuthScreen'
import ChatScreen from './screens/ChatScreen/ChatScreen'
import ProfileScreen from './screens/ProfileScreen/ProfileScreen'

const MainStack = createNativeStackNavigator()
const RootStack = createBottomTabNavigator()

const RootNavigator = () => (
  <RootStack.Navigator initialRouteName="HomeScreen">
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
