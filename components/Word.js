import React, { PureComponent } from 'react'
import { Text, View , Dimensions , TouchableOpacity , Alert } from 'react-native'
import {connect} from 'react-redux'
import * as actioncreator from '../redux/action/actionCreator'
const DeviceHeight = Dimensions.get('window').height
class Word extends PureComponent {
    render() {
        let {en , vn , isMemorized , _id} = this.props.word
        return (
            <View 
                key={_id}
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
                            onPress={() => this.props.toggleWord(_id, !isMemorized)}
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
                                        {text : "Có" , onPress : () => {this.props.removeWord(_id)}},
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

export default connect(null , actioncreator )(Word)