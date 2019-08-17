import React, { PureComponent } from 'react'
import { Text, View , Dimensions} from 'react-native'
import { Dropdown } from 'react-native-material-dropdown';

const DeviceWidth = Dimensions.get("window").width;
export default class Filter extends PureComponent {
    constructor(props){
        super(props)
        this.state = {
            filterMode : [
                {value : "Show_ALL"},
                {value : "Show_Forgot"},
                {value : "Show_Memorized"}
            ],
            filterPick : 'Show_All'  
        }
    }
    render() {
        return (
            <View style={{flex : 1 , justifyContent : 'center' , alignItems : 'center'}}>
                 <Dropdown
                    value={this.state.filterPick}
                    containerStyle={{width : DeviceWidth * 0.7 , height : DeviceWidth * 0.1 , borderRadius : 5 , borderWidth : 1 , paddingLeft : DeviceWidth * 0.02}}
                    inputContainerStyle={{ borderBottomColor: 'transparent' }}
                    dropdownOffset={{top: DeviceWidth * 0.01, left : 0}}
                    data={this.state.filterMode}
                    onChangeText={text => this.setState({filterPick : text})}
                />
            </View>
        )
    }
}