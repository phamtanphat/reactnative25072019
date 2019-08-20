import React, { PureComponent } from 'react'
import { Text, View  } from 'react-native'
import Child from './Child';
import {connect} from 'react-redux'

class Box extends PureComponent {

    render() {
        return (
            <View style={{flex : 1 , flexDirection : "column" , justifyContent : "center" , alignItems : "center"}}>
                <Text style={{fontSize : 30 , color : "red"}}> Value = {this.props.count}</Text>
                <Child />
            </View>
        )
    }
}
export default connect(state => {return {count : state.count}})(Box)
