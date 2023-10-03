import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Search from '../components/Search'
import HeaderComponente from '../components/Header/HeaderComponente'
import ProductItem from '../components/ProductItem/ProductItem'
import { useWindowDimensions } from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 
import { useSelector } from 'react-redux'

const Products = ({route}) => {
/*   const {height, width}  = useWindowDimensions();

  console.log(height, width); */

  const [categoryProd, setCategoryProd] = useState([]);
  const [text, setText] = useState(null);

  const {item, navigation} = route.params;

  const products = useSelector((state) => state.homeSlice.allProducts);

    useEffect(() => {
      const categoryProducts = products.filter((el) => el.category === item);
      setCategoryProd(categoryProducts);
  
      if (text) {
        const titleProduct = products.filter((el) => el.title.toLowerCase() === text.toLowerCase());
        setCategoryProd(titleProduct);
      }
    }, [text, item]);
    
  return (
    <View>
        <HeaderComponente title={item} />
        <Pressable onPress={() => {navigation.goBack()}}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </Pressable>
        <Search text={text} setText={setText} />
        <FlatList data={categoryProd} keyExtractor={products.id}  renderItem={({item}) => <ProductItem item={item} navigation={navigation} /> }/>

    </View>
  )
}

export default Products

const styles = StyleSheet.create({})