import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native'

import TabNav from './TabNav';
import Auth from './Auth';
import { useSelector } from 'react-redux';

const MainNav = () => {
    //const user = useSelector( (state) => state.authSlice.user)
    const user = useSelector((state) => state.authSlice.user)
  return (
    <NavigationContainer>
        {user ? <TabNav /> : <Auth />}
    </NavigationContainer>
  )
}

export default MainNav