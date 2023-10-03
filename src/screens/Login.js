import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Pressable } from 'react-native';
import { firebaseAuth } from '../firebase/firebaseAuth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { setIdToken, setUser } from '../redux/slice/authSlice';

const Login = () => {

  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      const response = await signInWithEmailAndPassword( firebaseAuth, email, password);
      dispatch(setUser(response.user.email));
      dispatch(setIdToken(response._tokenResponse.idToken))
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Iniciar sesión</Text>
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Pressable onPress={() => navigation.navigate("register")}>
        <Text style={{marginBottom: 10}}>No tienes una cuenta? Registrate aca</Text>
      </Pressable>
      <Button title="Iniciar sesión" onPress={handleLogin} />
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
    },
    input: {
      width: '100%',
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 16,
      paddingHorizontal: 10,
    },
  });
  