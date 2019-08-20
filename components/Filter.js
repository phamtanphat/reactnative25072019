import React, { PureComponent } from 'react'
import { Text, View , Dimensions} from 'react-native'
import { Dropdown } from 'react-native-material-dropdown';
import {connect} from 'react-redux'

const DeviceWidth = Dimensions.get("window").width;
class Filter extends PureComponent {
    constructor(props){
        super(props)
        this.state = {
            filterMode : [
                {value : "Show_ALL"},
                {value : "Show_Forgot"},
                {value : "Show_Memorized"}
            ]
        }
    }
    render() {
        const {onFilterMode} = this.props
        return (
            <View style={{flex : 1 , justifyContent : 'center' , alignItems : 'center' , marginTop : DeviceWidth * 0.05 , marginBottom : DeviceWidth * 0.05}}>
                 <Dropdown
                    value={this.props.filterPick}
                    containerStyle={{width : DeviceWidth * 0.7 , height : DeviceWidth * 0.1 , borderRadius : 5 , borderWidth : 1 , paddingLeft : DeviceWidth * 0.02}}
                    inputContainerStyle={{ borderBottomColor: 'transparent' }}
                    dropdownOffset={{top: DeviceWidth * 0.01, left : 0}}
                    data={this.state.filterMode}
                    onChangeText={text => onFilterMode(text)}
    
                />
            </View>
        )
    }
}
const mapStateToProps = function(state){
    return {filterPick : state.filterPick}
}
export default connect(mapStateToProps)(Filter)