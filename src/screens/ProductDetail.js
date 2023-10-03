import { StyleSheet, Text, View, Image, Dimensions, Button, Pressable } from 'react-native'
import React from 'react'
import HeaderComponente from '../components/Header/HeaderComponente'
import { products } from '../data/products'
import { colors } from '../theme/colors'
import { AntDesign } from '@expo/vector-icons'; 

const ProductDetail = ({route}) => {
    const producto = products[1];
    const {navigation, item} = route.params
  return (
    <View>
      <HeaderComponente title={"Producto detalle"} />
        <Pressable onPress={() => {navigation.goBack()}}>
            <AntDesign name="arrowleft" size={24} color="black" />
        </Pressable>
      <View style={styles.containerImage}>
        <Image 
        style={styles.image}
        source={{
            uri: item.images[2] ? item.images[2] : item.images[0]
        }} 
        />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.rating}><AntDesign name="star" size={20} color="black" />{item.rating}</Text>
        <Text>{item.price}</Text>
      </View>
      <Pressable onPress={() => {console.log("Presione el boton");}} style={styles.boton}>
        <Text style={styles.textBoton}>Comprar</Text>
      </Pressable>
    </View>
  )
}

export default ProductDetail

const styles = StyleSheet.create({
    image: {
        height: 350,
        width: Dimensions.get("screen").width
    },
    containerImage: {
        alignItems: "center"
    },
    title: {
        fontSize: 30,
        fontFamily: "RalewayBlack"
    },
    description: {
        fontSize: 20,
        marginVertical: 15
    },
    boton:{
        backgroundColor: colors.rose,
        marginHorizontal: 20,
        marginVertical: 10,
        alignItems: "center",
        justifyContent: "center",
        height: 30,
        borderWidth: 1,
        borderColor: colors.rose,
        borderRadius: 2
    },
    textBoton:{
        color: colors.white
    },
    rating:{
        fontSize: 20,
    },
    containerRating: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    }
})