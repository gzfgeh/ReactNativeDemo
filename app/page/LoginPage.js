/**
 * Created by guzhenfu on 17/4/24.
 */
import React from 'react'
import {
    StyleSheet,
    View,
    Text} from 'react-native'
import BasePage from './BasePage'

export default class LoginPage extends BasePage{
    render(){
        return(
            <View style={styles.container}>
                <Text>ssssssss</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
});