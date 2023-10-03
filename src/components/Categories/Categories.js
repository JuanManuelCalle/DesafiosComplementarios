import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CategoriesItem from '../CategoriesItem/CategoriesItem'
import { colors } from '../../theme/colors'
import { useSelector } from 'react-redux'

const Categories = ({navigation}) => {
  
  const categories = useSelector((state) => state.homeSlice.allCategories)

  return (
    <View style={styles.container}>
        <FlatList data={categories} keyExtractor={key => key} renderItem={({item}) => <CategoriesItem item={item} navigation={navigation}/>} />
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.verdeOlivo,
    }
})