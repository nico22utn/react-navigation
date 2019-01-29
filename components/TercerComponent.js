import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class TercerComponent extends Component {

  render() {
    return (
      <View style = {styles.container}>
        <Text style = {styles.textStyle}> Tercer Componente </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'tomato',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyle: {
        fontWeight: 'bold',
        fontSize: 22,
        color: 'white'
    }
})