import React, { Component } from 'react';
import { StatusBar, View } from 'react-native'

import Routes from './src/Navigations/Routes';
import AsyncStorage from '@react-native-community/async-storage'
import NavigationService from './src/Navigations/NavigationService'
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? 40 : 0;

export default class App extends Component {
  constructor(props) {
    super(props);
   
  }
  // async componentDidMount() {
  //   try {
  //      await AsyncStorage.getItem("sKip").then(val=>{
  //       if(val !== null){
  //         NavigationService.replace("Home")
  //       }
  //     })
      
  //   } catch (error) {
  //     console.log(error);

  //     alert('Something is wrong')
  //   }
  // }
 

  render() {
    return (
      <>
        <View style={{
          width: "100%",
          height: STATUS_BAR_HEIGHT,
          backgroundColor:'#0f997e'
         
        }}>
          <StatusBar
            barStyle="light-content"
          />
        </View>
        <Routes />
      </>

    )
  }
};

