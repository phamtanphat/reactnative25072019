import React, { PureComponent } from 'react'
import { Text, View } from 'react-native'

export default class Word extends PureComponent {
    render() {
        return (
            <View style={{margin : 5 , padding : 20, flexDirection : "row" , justifyContent : "space-around" ,backgroundColor : "lavender" }}>
                <Text style={{color : "green" , fontSize : 20}}>Một</Text>
                <Text style={{color : "red" , fontSize : 20}}>One</Text>
            </View>
        )
    }
}
