import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home';
import Products from '../screens/Products';
import ProductDetail from '../screens/ProductDetail';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="home" screenOptions={{
        headerShown: false,
    }} >
        <Stack.Screen name="home" component={Home}/>
        <Stack.Screen name="products" component={Products} />
        <Stack.Screen name="productDetail" component={ProductDetail} />
    </Stack.Navigator>
  )
}

export default RootNavigation