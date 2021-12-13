import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Input from './components/input/Input'


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Currency</Text>
      <Input></Input>
      <Input></Input>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    
  },
  text:{
    margin: 10,
    fontSize: 18,
    fontFamily: "TitilliumWeb-Regular",
  }
});
