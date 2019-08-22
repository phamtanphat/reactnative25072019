import React, { PureComponent } from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';

export default class Myicon extends PureComponent {
    render() {
        return (
            <View>
                <Text>
                    Lorem <Icon name="leftcircle" color="#4F8EF7" size={40} /> Ipsum
                </Text>
            </View>
        )
    }
}
