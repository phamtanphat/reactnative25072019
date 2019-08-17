import React, { PureComponent } from 'react'
import { Text, View  } from 'react-native'
import Child from './Child';

export default class Box extends PureComponent {
    constructor(props){
        super(props)
        this.state = {count : 0}
        this.onCong = this.onCong.bind(this)
        this.onTru = this.onTru.bind(this)
    }
    onCong(){
        this.setState({count : this.state.count + 1})   
    }
    onTru(){
        this.setState({count : this.state.count - 1})   
    }
    render() {
        return (
            <View style={{flex : 1 , flexDirection : "column" , justifyContent : "center" , alignItems : "center"}}>
                <Text style={{fontSize : 30 , color : "red"}}> Value = {this.state.count}</Text>
                <Child onCong={this.onCong}
                onTru={this.onTru}/>
            </View>
        )
    }
}
