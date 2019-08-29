import React, { PureComponent } from 'react'
import { Text, View , Dimensions , TouchableOpacity , ScrollView , TextInput , SafeAreaView} from 'react-native'
import Word from './Word';
import Form from './Form';
import Filter from './Filter';
import {connect} from 'react-redux'
import axios from 'axios'
class List extends PureComponent {
    componentWillMount(){
        const URL = "https://server2301.herokuapp.com/word"
        axios.get(URL)
        .then(response => console.log(response.data.words))
        .catch(error => console.log(error.message))
    }
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
