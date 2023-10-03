import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CategoriesItem from '../components/CategoriesItem/CategoriesItem'
import HeaderComponente from '../components/Header/HeaderComponente'
import Categories from '../components/Categories/Categories'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { useGetCategoriesQuery } from '../services/ecomercecApi'

const Home = (/* {navigation} */) => { //Se puede de estas 2 maneras
  const navigation = useNavigation();
  const datos = useGetCategoriesQuery();
  const categories = datos.data;

  console.log(categories);
  return (
    <SafeAreaView>
      <HeaderComponente title={"DogCenter"}/>
      <Categories navigation={navigation} />
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})