import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons'; 
import { colors } from '../../theme/colors';

const Search = ({text, setText}) => {
    console.log(text);
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder='Busca un producto aca' onChangeText={(value) => setText(value)} value={text}/>
      <Pressable onPress={() => {setText('')}}>
        <AntDesign name="close" size={24} color="black" />
      </Pressable>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 15,
        marginTop: 50
    },
    input: {
        width: "78%",
        borderColor: colors.rose,
        borderWidth: 1,
        borderRadius: 8,
        padding: 10,
        fontSize: 20,
        marginRight: 15
    }
})