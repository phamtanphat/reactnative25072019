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
const mapStateToProps = function(state){
    return {count : state.count}
}
export default connect(mapStateToProps)(Box)
