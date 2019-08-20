import React, { PureComponent } from 'react'
import { Text, View , Dimensions , TouchableOpacity , ScrollView , TextInput , SafeAreaView} from 'react-native'
import Word from './Word';
import Form from './Form';
import Filter from './Filter';
import {connect} from 'react-redux'

class List extends PureComponent {
    render() {
        return (
            <SafeAreaView style={{flex : 1}}>
                <ScrollView style={{flex : 1}}>
                    <Form />
                    <Filter />
                    {this.props.words.filter(item => {
                        if(this.props.filterPick === 'Show_Forgot' && !item.isMemorized) return false 
                        if(this.props.filterPick === 'Show_Memorized' && item.isMemorized) return false 
                        return true
                    }).map(word => <Word 
                                        word={word} 
                                        key={word.id}/>)}
                </ScrollView>
            </SafeAreaView>
        )
    }
}
const mapStateToProps = function(state){
    return {words : state.words , filterPick : state.filterPick}
}

export default connect(mapStateToProps)(List)
