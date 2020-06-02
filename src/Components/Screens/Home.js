import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'

import Header from '../Comman/Header'



class Home extends Component {
   
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <Header Title={"Home"} />
                

            </View>

        )


    }
}
export default Home