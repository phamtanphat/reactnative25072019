import React, { PureComponent } from 'react'
import { Text, View , FlatList , Dimensions} from 'react-native'

export default class MyFlatlist extends PureComponent {
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
            ]
        }
    }
    render() {
        return (
            <View style={{flex : 1}}>
                <FlatList
                    data={this.state.words}
                    keyExtractor={item => item.id}
                    extraData={this.state}
                    renderItem={({item , index}) => }
                />
            </View>
        )
    }
}
