import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Button from 'react-native-button';

export default class MainComponent extends Component {
  render() {
    const { navigation } = this.props;
    let datosAEnviar = {
        name: "Star Wars",
        release: 1977
    }
    return (
      <View style = { styles.container }>
        <Text style = {styles.textStyle }> Menú Principal </Text>
        <Button containerStyle = {{ padding: 10, margin: 20, width: 200, height: 45, borderRadius: 10, backgroundColor: 'darkviolet'}}
            style = {{fontSize: 10, color: 'white'}}
            onPress = { () => {
                navigation.navigate("Detail",datosAEnviar);
            }}>Ir al Detalle</Button> 
        <Button containerStyle = {{ padding: 10, margin: 20, width: 200, height: 45, borderRadius: 10, backgroundColor: 'darkviolet'}}
            style = {{fontSize: 10, color: 'white'}}
            onPress = { () => {
                navigation.navigate("Tercer");
            }}>Ir al TercerComponente</Button> 
      </View>
    )
  }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'dodgerblue',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyle: {
        fontWeight: 'bold',
        fontSize: 22,
        color: 'white'
    }
})