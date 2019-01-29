import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Button from 'react-native-button';

export default class DetailComponent extends Component {
  render() {
    const { navigation } = this.props;
    let {params} = this.props.navigation.state;
    return (
      <View style = {styles.container}>
        <Text style = {styles.textStyles}> Detalle del componente </Text>
        <Text>Nombre de la pelicula:{params.name}</Text>
        <Text>Año de la pelicula:{params.release}</Text>
        <Button containerStyle = {{ padding: 10, margin: 20, width: 200, height: 45, borderRadius: 10, backgroundColor: 'darkviolet'}}
            style = {{fontSize: 18, color: 'white'}}
            onPress = { () => {
                navigation.navigate("Tercer");
            }}>Ir al TercerComponente</Button> 
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'mediumseagreen',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyle: {
        fontWeight: 'bold',
        fontSize: 22,
        color: 'white'
    }
})