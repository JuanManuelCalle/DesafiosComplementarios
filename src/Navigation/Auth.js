import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../screens/Login';
import Register from '../screens/Register';

const Stack = createNativeStackNavigator();

const Auth = () => {
  return (
    <Stack.Navigator independent={true} screenOptions={{
        headerShown: false
    }}>
      <Stack.Screen name='login' component={Login} />
      <Stack.Screen name='register' component={Register} />
    </Stack.Navigator>
  )
}

export default Auth