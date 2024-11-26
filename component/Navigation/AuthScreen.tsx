import { View, Text } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../Screen/SplashScreen';
import OnBoardScreen from '../Screen/OnBoardScreen';
import SignIn from '../Screen/SignIn';
import ForgotPassword from '../Screen/ForgotPassword';
import ReserPassword from '../Screen/ReserPassword';
import Dashboard from './Dashboard';


const Stack = createStackNavigator();
export default function AuthStack() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false, gestureEnabled: true}}>
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="OnBoardScreen" component={OnBoardScreen} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="ReserPassword" component={ReserPassword} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}