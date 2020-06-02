import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import Button from '../Comman/Button'
import Header from '../Comman/Header'
import Home from './Home'
import AsyncStorage from '@react-native-community/async-storage'


class Splash extends Component {
    state = {
        skip: false
    }
   
    navigate = async () => {
        try {
            await AsyncStorage.setItem('sKip', "done");
            this.props.navigation.replace('Home')
        } catch (error) {
            alert('Something is wrong')
        }
    }
    render() {
        return (
            
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <Header Title={"Welcome"} />
                <View style={{ alignItems: 'center', marginTop: '10%' }} >
                    <Image style={{ width: 150, height: 150 }} source={require('../../next.png')} />
                    <Button title={"skip"}
                        onPress={() => this.navigate()}
                    />
                </View>

            </View>
                
            
        )


    }
}
export default Splash