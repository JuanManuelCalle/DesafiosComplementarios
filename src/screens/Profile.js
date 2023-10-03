import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderComponente from '../components/Header/HeaderComponente'
import { Entypo } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { colors } from '../theme/colors';
import * as ImagePicker from 'expo-image-picker';
import { usePutImageMutation } from '../services/ecomercecApi';
import { useGetImageQuery } from '../services/ecomercecApi';

const Profile = () => {

  const [putImage, result] = usePutImageMutation();

  const {data, isLoading, error, refetch } = useGetImageQuery()

  const defaulImage = "https://cdn-icons-png.flaticon.com/512/147/147144.png"

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
      base64: true
    });

    if (!result.canceled) {
      await putImage({
        image: `data:image/jpeg;base64,${result.assets[0].base64}`
      });
      refetch();
    }
  };

  const openCamera = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if(permissionResult.granted === false){
      alert("No se dio permiso");
      return;
    } else {
      const result = ImagePicker.launchCameraAsync();
      console.log(result);
    }
  }

  console.log("Imagen guardada en base", result);
  return (
    <SafeAreaView>
      <HeaderComponente title={"Mi perfil"} />
      <View style={{alignItems: 'center'}}>
        <Image style={styles.image} source={{
          uri: data ? data.image : defaulImage
        }} />
        <View>
          <Pressable style={styles.btn} onPress={() => openCamera()}>
            <Text style={styles.textoBTN}><Entypo name="camera" size={24} color="white" /> Abrir camara</Text>
          </Pressable>
          <Pressable onPress={() =>  pickImage()} style={styles.btn}>
            <Text style={styles.textoBTN}><FontAwesome name="file-photo-o" size={24} color="white" /> Abrir Galeria</Text>
          </Pressable>
          <Pressable style={styles.btn} onPress={() => alert('Abrir Mapa')}>
            <Text style={styles.textoBTN}><FontAwesome name="map-marker" size={24} color="white" /> Abrir mapa</Text>
          </Pressable>
      </View>
      </View>
    </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
    marginTop: 20,
    borderRadius: 100
  },
  btn: {
    width: 200,
    height: 50,
    borderWidth: 1,
    borderColor: colors.rose,
    borderRadius: 10,
    alignContent: 'center',
    justifyContent: 'center',
    paddingLeft: 20,
    backgroundColor: colors.rose,
    marginBottom: 20
  },
  textoBTN:{
    fontSize: 20,
    color: colors.white
  }
})