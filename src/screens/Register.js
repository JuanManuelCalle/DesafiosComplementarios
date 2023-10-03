import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Pressable } from 'react-native';
import { firebaseAuth } from '../firebase/firebaseAuth';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Register = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const response = await createUserWithEmailAndPassword(firebaseAuth, email, password);
      console.log(response);
      navigation.navigate("login");
    } catch (e) {
      console.log("Error en registro", e);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Registro</Text>
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
      <Pressable onPress={() => navigation.navigate("login")}>
        <Text style={{ marginBottom: 10 }}>No tienes una cuenta? Inicia aquí</Text>
      </Pressable>
      <Button style={styles.btn} title="Registrarme" onPress={handleRegister} />
    </View>
  );
};

export default Register;

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
  btn: {
    marginTop: 20,
  },
});
