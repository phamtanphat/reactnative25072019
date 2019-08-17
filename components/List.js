import React, { PureComponent } from 'react'
import { Text, View , Dimensions , TouchableOpacity , ScrollView , TextInput , SafeAreaView} from 'react-native'
import { Dropdown } from 'react-native-material-dropdown';
import Word from './Word';

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
            txtEn : "",
            txtVn : "",
            filterMode : [
                {value : "Show_ALL"},
                {value : "Show_Forgot"},
                {value : "Show_Memorized"}
            ],
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
    getShouldShowForm(){
        if(this.state.shouldShowForm){
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
                            onPress={() => {
                                const {txtEn , txtVn} = this.state
                                if(txtEn.length <= 0 && txtVn.length<=0) return 
                                const newWord = {
                                    id : Math.random(),
                                    en : txtEn,
                                    vn  : txtVn,
                                    isMemorized : false
                                }
                                const newWords = []
                                Object.assign(newWords , this.state.words)
                                newWords.unshift(newWord)
                                this.setState({words : newWords})
                                
                            }}
                            style={{backgroundColor : "#218838" , padding : 10 , borderRadius : 8 , marginRight : DeviceWidth * 0.03}}
                        >
                            <Text style={{fontSize : DeviceWidth * 0.08 , color : 'white' }}>Add word</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={this.toggleForm}
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
                        onPress={this.toggleForm}
                        style={{backgroundColor : "#218838" , padding : 10 , borderRadius : 8 ,width : DeviceWidth * 0.7 }}
                    >
                        <Text style={{fontSize : DeviceWidth * 0.08 , color : 'white' ,textAlign : 'center'}}>+</Text>
                    </TouchableOpacity>
                </View>
               
            )
        }
    }
    getFilter(){
        return (
            <View style={{ alignItems : 'center', marginTop : DeviceWidth * 0.05 , marginBottom : DeviceWidth * 0.05}}>
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
    render() {
        return (
            <SafeAreaView style={{flex : 1}}>
                <ScrollView style={{flex : 1 }}>
                    {this.getShouldShowForm()}
                    {this.getFilter()}
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
