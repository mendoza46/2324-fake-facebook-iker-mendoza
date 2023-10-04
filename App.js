import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler'
import React from 'react';

const App =() => {
  return (
    <>
      <StatusBar 
        backgroundColor="#FFFFFF"
        barStyle="dark-content"
      />
      <ScrollView></ScrollView>
    </>
  );
}

export default App;