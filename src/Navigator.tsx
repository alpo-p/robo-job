import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from './screens/HomeScreen/HomeScreen'
import AuthScreen from './screens/AuthScreen/AuthScreen'

const MainStack = createNativeStackNavigator()
const RootStack = createNativeStackNavigator()

const RootNavigator = () => (
  <RootStack.Navigator initialRouteName="HomeScreen">
    <RootStack.Screen name="HomeScreen" component={HomeScreen} />
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
