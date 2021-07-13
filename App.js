import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import MainScreen from './Screens/main_screen/MainScreen';
import { colors, styles } from './Style';

export default class App extends React.Component {
  
  render(){
    return (
      <ScrollView style={styles.container}>
        <MainScreen />
      </ScrollView>
    );
  }
}
