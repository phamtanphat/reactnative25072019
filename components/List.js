import React, { PureComponent } from 'react'
import { Text, View , Dimensions , TouchableOpacity , ScrollView , TextInput , SafeAreaView} from 'react-native'
import { Dropdown } from 'react-native-material-dropdown';
import Word from './Word';
import Form from './Form';
import Filter from './Filter';

const DeviceHeight = Dimensions.get('window').height
const DeviceWidth = Dimensions.get("window").width
export default class List extends PureComponent {
 
    render() {
        return (
            <SafeAreaView style={{flex : 1}}>
                <ScrollView style={{flex : 1}}>
                    <Form/>
                    <Filter />
                    {this.state.words.filter(item => {
                        if(this.state.filterPick === 'Show_Forgot' && !item.isMemorized) return false 
                        if(this.state.filterPick === 'Show_Memorized' && item.isMemorized) return false 
                        return true
                    }).map(word => <Word 
                                        word={word} 
                                        key={word.id}/>)}
                </ScrollView>
            </SafeAreaView>
        )
    }
}
