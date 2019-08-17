import React, { PureComponent } from 'react'
import { Text, View , Dimensions , TouchableOpacity , ScrollView , TextInput , SafeAreaView} from 'react-native'
import { Dropdown } from 'react-native-material-dropdown';
import Word from './Word';
import Form from './Form';
import Filter from './Filter';

const DeviceHeight = Dimensions.get('window').height
const DeviceWidth = Dimensions.get("window").width
export default class List extends PureComponent {
    constructor(props){
        super(props)
        this.state = {
            words : [
                {id : "a1" , en : "One" , vn : "Một" , isMemorized : true},
                {id : "a2" , en : "Two" , vn : "Hai" , isMemorized : false},
                {id : "a3" , en : "Three" , vn : "Ba" , isMemorized : false},
                {id : "a4" , en : "Four" , vn : "Bốn" , isMemorized : true},
                {id : "a5" , en : "Five" , vn : "Năm" , isMemorized : true},
                {id : "a6" , en : "Six" , vn : "Sáu" , isMemorized : true},
            ],
            shouldShowForm : false,
            filterPick : 'Show_All'
            
        }
        this.toggleForm = this.toggleForm.bind(this)
    }
    removeWord(id){
        const words = this.state.words.filter(item => {
            if(item.id == id) return false
            return true
        })
        this.setState({words})
    }
    toggleWord(id){
        const newWords = this.state.words.map(item => {
            if(item.id !== id) return item
            return {...item , isMemorized : !item.isMemorized}
        })
        this.setState({words : newWords})
    }
    
    toggleForm(){
        this.setState({shouldShowForm : !this.state.shouldShowForm})
    }
    render() {
        return (
            <SafeAreaView style={{flex : 1}}>
                <ScrollView style={{flex : 1}}>
                    <Form shouldShowForm={this.state.shouldShowForm}/>
                    <Filter filterPick={this.state.filterPick}/>
                    {this.state.words.filter(item => {
                        if(this.state.filterPick === 'Show_Forgot' && !item.isMemorized) return false 
                        if(this.state.filterPick === 'Show_Memorized' && item.isMemorized) return false 
                        return true
                    }).map(word => <Word word={word} key={word.id}/>)}
                </ScrollView>
            </SafeAreaView>
            
                
            
        )
    }
}
