import React, { Component } from 'react'
import { createStackNavigator, createAppContainer,  createDrawerNavigator} from 'react-navigation'
import NavigationService from './NavigationService'
import SplashScreen from '../Components/Screens/Splash'
import HomeScreen from '../Components/Screens/Home'


const MainNavigator = createStackNavigator({

  Splash: { screen: SplashScreen },
  Home: { screen: HomeScreen },
},
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  })

const AppContainer = createAppContainer(MainNavigator)

class Routes extends Component {
 
  render() {
    return (
      <AppContainer ref={navigatorRef => {
        NavigationService.setTopLevelNavigator(navigatorRef);
      }} />
    )
  }
};
export default Routes;
