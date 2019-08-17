import React, { PureComponent } from 'react'
import { Text, View , Dimensions , TouchableOpacity , Alert } from 'react-native'

const DeviceHeight = Dimensions.get('window').height
export default class Word extends PureComponent {
    render() {
        let {en , vn , isMemorized , id} = this.props.word
        let {onRemoveWord , onToggleWord} = this.props
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
                            onPress={() => onToggleWord(id)}
                            style={{backgroundColor :  isMemorized ? "green" : "red" , padding : 10 , borderRadius : 5}}
                        >
                            <Text style={{fontSize : 20 , color : 'white'}}>{ isMemorized ? "Forgot" : "isMemorized"}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity  
                            onPress={() => {
                                Alert.alert(
                                    "Xác nhận thay đổi",
                                    "Bạn có muốn xoá tự vừng không?",
                                    [
                                        {text : "Có" , onPress : () => {onRemoveWord(id)}},
                                        {text : "Không" , style : 'cancel' }
                                    ]
                                ,{cancelable :  false })
                            }}
                            style={{backgroundColor : "orange" , padding : 10 , borderRadius : 5}}
                        >
                            <Text style={{fontSize : 25 , color :  'white' }}>Remove</Text>
                        </TouchableOpacity>
                </View>
            </View>
        )
    }
}
