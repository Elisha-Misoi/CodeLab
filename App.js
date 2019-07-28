import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/components/Login/login';
import { createStackNavigator } from 'react-navigation';

export default function App() {
  return (
    <Login />
    // <View style={styles.container}>
    //   <Text>CodeLab</Text>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
