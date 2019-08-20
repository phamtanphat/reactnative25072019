import React, { PureComponent } from 'react'
import { Text, View , TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'

class Child extends PureComponent {
    render() {
       
        return (
            <View style={{flexDirection : "row"}}>
                <TouchableOpacity
                        onPress={() => this.props.dispatch({type : "INCREASE"})}
                    >
                        <View style={{backgroundColor : "green" , padding : 5 , borderRadius : 5 }}>
                            <Text style={{color : "white", fontSize : 30}} >Cộng</Text>
                        </View>                                                
                </TouchableOpacity>
                <TouchableOpacity
                        onPress={() => this.props.dispatch({type : "DESCREASE"})}
                    >
                        <View style={{backgroundColor : "red" , padding : 5 , borderRadius : 5 }}>
                            <Text style={{color : "white", fontSize : 30}} >Trừ</Text>
                        </View>                                                
                </TouchableOpacity>
                <TouchableOpacity
                        onPress={() => this.props.dispatch({type : "RESET"})}
                    >
                        <View style={{backgroundColor : "orange" , padding : 5 , borderRadius : 5 }}>
                            <Text style={{color : "white", fontSize : 30}} >Reset</Text>
                        </View>                                                
                </TouchableOpacity>
            </View>
        )
    }
}

export default connect()(Child)
