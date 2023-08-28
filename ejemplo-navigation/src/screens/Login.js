import { View, Text, TextInput, TouchableOpacity, Alert, Image } from 'react-native'
import { useState } from 'react';
import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import messi from '../../assets/messi.jpg'

export default function BlueScreen({navigation}) {

  const [email, setEmail] = useState('')
  const [clave, setClave] = useState(0)

  const handleLogin = () => {
    // console.log(email, contraseña)
    if (email.toLowerCase() == 'nano' && clave == 123){
      navigation.navigate('GreenScreen');
    }else{
      Alert.alert('Usuario o contraseña incorrectos');
    }
  }

  return (
    <SafeAreaView style={[styles.container]}>
      <Image source={messi} style={styles.logo}/>
      <Text style={[styles.textLabel]}>Email</Text>
      <TextInput
        editable
        maxLength={20}
        style={styles.input}
        placeholder="Ingrese su email"
        value={email}
        onChangeText={input => setEmail(input)}
      />
      <Text style={[styles.textLabel]}>Contraseña</Text>
      <TextInput
        editable
        maxLength={20}
        style={styles.input}
        keyboardType="numeric"
        placeholder="Ingrese su contraseña"
        onChangeText={input => setClave(input)}
      />
      <TouchableOpacity style={[styles.button1]} onPress={() => handleLogin()}><Text style={[styles.textButton]}>Log In</Text></TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  logo: {
    width: '75%',
    height: '40%',
    marginBottom: 20
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button1: {
    marginTop: 10,
    width: '90%',
    height: 60,
    backgroundColor: 'black',
    borderRadius: 15
  },
  button2: {
    marginTop: 10,
    marginBottom: 10,
    width: '90%',
    height: 60,
    backgroundColor: 'white',
    borderRadius: 15,
    borderWidth: 5,
    borderColor: 'black'
  },
  textButton: {
    color: 'white',
    width: '100%',
    textAlign: 'center',
    marginTop: 18,
    fontSize: 15,
  },
  textPressable: {
    color: 'black',
    width: '100%',
    textAlign: 'center',
    marginTop: 13,
    fontSize: 15,
  },
  input: {
    height: 40,
    width: '90%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  textLabel:{
    alignSelf: 'flex-start',
    marginLeft: '5%',
    marginTop: 5,
    fontWeight: 'bold'
  }
});