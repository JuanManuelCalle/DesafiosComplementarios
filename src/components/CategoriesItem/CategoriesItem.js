import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../theme/colors'
import { setCategory } from '../../redux/slice/homeSlice'
import { useDispatch } from 'react-redux'

const CategoriesItem = ({item, navigation}) => {
  const dispatch = useDispatch();

  dispatch(setCategory(item));
  return (
    <Pressable style={styles.categoryText} onPress={() => {navigation.navigate("products", {item: item, navigation: navigation})}}>
      <Text style={styles.text}>{item}</Text>
    </Pressable>
  )
}

export default CategoriesItem

const styles = StyleSheet.create({
    categoryText: {
        margin: 10,
        borderWidth: 1,
        borderColor: colors.white,
        borderRadius: 50,
        height: 35,
        paddingLeft: 20,
        justifyContent: "center",
    },
    text: {
        fontSize: 20,
        color: colors.white,
    }
})
