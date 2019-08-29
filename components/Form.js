import React, { PureComponent } from 'react'
import { Text, View , TouchableOpacity , TextInput , Dimensions} from 'react-native'
import {connect} from 'react-redux'
import * as actioncreator from '../redux/action/actionCreator'
const DeviceWidth = Dimensions.get("window").width

class Form extends PureComponent {
    constructor(props){
        super(props)
        this.state = {
            txtEn : "",
            txtVn : ""
        }
        this.addWord = this.addWord.bind(this)
    }
    addWord(){
        const newWord = {
            id : Math.random(),
            en : this.state.txtEn,  
            vn : this.state.txtVn,
            isMemorized : false
        }
        this.setState({txtVn : "" ,txtEn : ""})
        this.props.addWord(newWord)
    }
   
    getShouldShowForm(){
        const shouldShowForm = this.props.shouldShowForm
        if(shouldShowForm){
            return(
                <View>
                    <View style={{flexDirection : 'column' , backgroundColor : 'gainsboro' , padding : 10 , justifyContent : 'center' ,  alignItems : 'center'  }}>
                        <TextInput 
                            style={{height: DeviceWidth  * 0.15 , width : DeviceWidth * 0.7, backgroundColor: 'white', borderRadius :2 , paddingLeft : DeviceWidth * 0.05 , marginBottom : DeviceWidth * 0.03  , fontSize : 20}}
                            value={this.state.txtEn}
                            onChangeText={text => this.setState({txtEn : text})}
                            placeholder="English"/>
                        <TextInput 
                            value={this.state.txtVn}
                            onChangeText={text => this.setState({txtVn : text})}
                            style={{height: DeviceWidth  * 0.15 , width : DeviceWidth * 0.7, backgroundColor: 'white', borderRadius :2 , paddingLeft : DeviceWidth * 0.05 , fontSize : 20}}
                            placeholder="Vietnamese"/>
                        </View>
                    <View style={{flexDirection : "row" , marginTop : DeviceWidth * 0.01 , alignItems : "center" , justifyContent : "center"}}>
                        <TouchableOpacity
                            onPress={this.addWord}
                            style={{backgroundColor : "#218838" , padding : 10 , borderRadius : 8 , marginRight : DeviceWidth * 0.03}}
                        >
                            <Text style={{fontSize : DeviceWidth * 0.08 , color : 'white' }}>Add word</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={this.props.toggleForm}
                            style={{backgroundColor : "#C82333", padding : 10 , borderRadius : 8}}
                        >
                            <Text style={{fontSize : DeviceWidth * 0.08 , color : 'white'}}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        }else{
            return(
                <View style={{alignItems : "center"  }}>
                    <TouchableOpacity
                        onPress={this.props.toggleForm}
                        style={{backgroundColor : "#218838" , padding : 10 , borderRadius : 8 ,width : DeviceWidth * 0.7 }}
                    >
                        <Text style={{fontSize : DeviceWidth * 0.08 , color : 'white' ,textAlign : 'center'}}>+</Text>
                    </TouchableOpacity>
                </View>
               
            )
        }
    }
    render() {
        return (
            <View style={{flexDirection : 'column' , justifyContent : 'center' , alignItems : 'center' , marginTop : DeviceWidth * 0.05 , marginBottom : DeviceWidth * 0.05}}>
                {this.getShouldShowForm()}
            </View>
        )
    }
}
const mapStateToProps = function(state){
    return {shouldShowForm : state.shouldShowForm}
}
export default connect(mapStateToProps , actioncreator)(Form)