import React, { PureComponent } from 'react'
import { Text, View , Dimensions , TouchableOpacity , ScrollView , TextInput , SafeAreaView } from 'react-native'

const DeviceHeight = Dimensions.get('window').height
export default class Word extends PureComponent {
    render() {
        let {en , vn , isMemorized , id} = this.props.word
        return (
            <View 
                key={id}
                style={{ flexDirection : 'column' , height : DeviceHeight * 0.2 , margin : 10 , backgroundColor : 'gainsboro' , padding : 10 , borderRadius : 5}}>
                <View style={{flexDirection : 'row' , justifyContent : 'space-around' , paddingBottom : 5}}>
                    <Text style={{fontSize : 30 , color :  'green' }}>{en}</Text>
                    <Text 
                        style={{fontSize : 30 , color :  'red' }}>
                            {isMemorized ? "----" :  vn}
                    </Text>
                </View>
                <View style={{flexDirection : 'row' , justifyContent : 'space-around' , paddingBottom : 5}}>
                        <TouchableOpacity
                           
                            style={{backgroundColor :  isMemorized ? "green" : "red" , padding : 10 , borderRadius : 5}}
                        >
                            <Text style={{fontSize : 20 , color : 'white'}}>{ isMemorized ? "Forgot" : "isMemorized"}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity  
                            
                            style={{backgroundColor : "orange" , padding : 10 , borderRadius : 5}}
                        >
                            <Text style={{fontSize : 25 , color :  'white' }}>Remove</Text>
                        </TouchableOpacity>
                </View>
            </View>
        )
    }
}
