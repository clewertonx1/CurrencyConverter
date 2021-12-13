import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';



export default function Input() {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>Currency</Text>
   
      
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    width: '100%',
    height: '10%',
    backgroundColor: 'black',
    alignItems: 'center',
    
  },
  text:{
    margin: 10,
    fontSize: 18,
    fontFamily: "TitilliumWeb-Regular",
  }
});
