import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DetailComponent from './components/DetailComponent';
import TercerComponent from './components/TercerComponent';
import MainComponent from './components/MainComponent';
import { createStackNavigator, createAppContainer } from "react-navigation";

const AppNavigator = createStackNavigator({
  Main: {
    screen: MainComponent,
    navigationOptions: {
      headerTitle: "Main"
    }
  },
  Detail: {
    screen: DetailComponent,
    navigationOptions: {
      headerTitle: "Detail"
    }
  },
  Tercer: {
    screen: TercerComponent,
    navigationOptions: {
      headerTitle: "Tercer"
    }
  }
});
const AppContainer = createAppContainer(AppNavigator);
export default class App extends React.Component {
  render() {
    return (
      <AppContainer/>    
    );
  }
}