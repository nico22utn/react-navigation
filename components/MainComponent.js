import React, { Component } from 'react'
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native'
import Button from 'react-native-button';

export default class MainComponent extends Component {
  
    static navigationOptions = ({navigation}) => {
        const { params = {}} = navigation.state;
        let headerTitle = "Main";
        let headerTitleStyle = { color: 'blue', alignSelf: 'center',};
        let headerRight = (
          <Button 
            containerStyle= {{margin:5, padding: 10, borderRadius: 10, backgroundColor: 'darkviolet'}}
            style = {{ fontSize: 15, color: 'white'}}
            onPress = { ()=>{
              params.onSave();
            }}> Guardar </Button>);
        let headerBackTitle = "Nico";
        return { headerTitle,headerTitleStyle,headerRight,headerBackTitle };
      }
    onSave(){
        if (this.props.navigation.state.params.isSaving ==true){
            return;
        }  
        this.props.navigation.setParams({ isSaving: true});
        setInterval( () => {
            this.props.navigation.setParams({isSaving: false});
        },3000)
    }
    componentDidMount(){
      this.props.navigation.setParams({ onSave: this.onSave.bind(this), isSaving: false})
    }
    render() {
        const { navigation } = this.props;
        let datosAEnviar = {
            name: "Star Wars",
            release: 1977
        };
        let mainView = (navigation.state.params && navigation.state.params.isSaving == true) ? <ActivityIndicator/>: 
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
        </View>;
        return mainView;
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