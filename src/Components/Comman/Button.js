import React from 'react'
import {TouchableOpacity , Text ,Dimensions} from 'react-native'

let Height = Dimensions.get('window').height
const Button = (props) => {
    const {TextStyle , ContainerStyle} = style
    return(
        <TouchableOpacity onPress={props.onPress} style={ContainerStyle} >
            <Text style={TextStyle}>{props.title}</Text>
        </TouchableOpacity>
    )
}
export default Button;

const style = {
    ContainerStyle:{
        marginHorizontal:46,
        backgroundColor:'#0f997e',
        height:45,
        borderRadius:25,
        justifyContent:'center',
        alignItems:'center',
        marginTop: Height * 0.15,
        width:'40%'
    },
    TextStyle:{
        color:'#fff',
        fontSize:17,
        lineHeight:31,
    }
}