import React from 'react';
import {Text, View, StyleSheet,Dimensions} from 'react-native';


const {width,height} =Dimensions.get('window')

const Header = props => (
  <View style={[styles.NavContainer, props.containerStyle]}>
     <Text style={[styles.Title, props.titleStyle]}>{props.Title}</Text>
  </View>
);

const styles = StyleSheet.create({
  NavContainer: {
    width: '100%',
    height: height*0.05,
    alignItems: 'flex-start',
    backgroundColor: '#0f997e',
  },
  Title: {
    color: '#fff',
    fontSize: 22,
   // fontWeight: 'bold',
    textAlign: 'center',
    alignSelf:'center',
  },
  NavIconContainer: {
    width: 24,
    height: 24,
    marginLeft: width*0.05,
    marginTop:height*.05
  },
});
export default Header
