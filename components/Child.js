import React, { PureComponent } from 'react'
import { Text, View , TouchableOpacity} from 'react-native'

export default class Child extends PureComponent {
    render() {
        const {onCong , onTru} = this.props
        return (
            <View style={{flexDirection : "row"}}>
                <TouchableOpacity
                        onPress={onCong}
                    >
                        <View style={{backgroundColor : "green" , padding : 5 , borderRadius : 5 }}>
                            <Text style={{color : "white", fontSize : 30}} >Cộng</Text>
                        </View>                                                
                </TouchableOpacity>
                <TouchableOpacity
                        onPress={onTru}
                    >
                        <View style={{backgroundColor : "red" , padding : 5 , borderRadius : 5 }}>
                            <Text style={{color : "white", fontSize : 30}} >Trừ</Text>
                        </View>                                                
                </TouchableOpacity>
                <TouchableOpacity
                    >
                        <View style={{backgroundColor : "orange" , padding : 5 , borderRadius : 5 }}>
                            <Text style={{color : "white", fontSize : 30}} >Reset</Text>
                        </View>                                                
                </TouchableOpacity>
            </View>
        )
    }
}
