import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Profile from '../screens/Profile';
import RootNavigation from './RootNavigation';
import { Feather, Ionicons  } from '@expo/vector-icons'; 
import { colors } from '../theme/colors';
import Auth from './Auth';

const TabNav = () => {
    const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{
        headerShown: false,
        title: ""
    }}>
        <Tab.Screen 
            options={{tabBarIcon: ({focused}) => <Feather name="shopping-bag" size={24} color={focused ? colors.rose : colors.verdeOlivo} />}} 
            name='rootNavigation' component={RootNavigation} 
        />
        <Tab.Screen 
            options={{tabBarIcon: ({focused}) => <Ionicons name="person-circle-outline" size={33} color={focused ? colors.rose : colors.verdeOlivo} />}} 
            name='profile' component={Profile} 
        />

        <Tab.Screen name='auth' component={Auth} options={{tabBarButton: () => null}} />
    </Tab.Navigator>
  )
}

export default TabNav