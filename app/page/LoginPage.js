/**
 * Created by guzhenfu on 17/4/24.
 */
import React from 'react'
import {
    StyleSheet,
    View,
    Text} from 'react-native'
import BasePage from './BasePage'
import NavigationBar from './../component/SimpleNavigationBar'

export default class LoginPage extends BasePage{
    render(){
        return(
            <View style={styles.container}>
                <NavigationBar title="登录" backOnPress={this._handleBack.bind(this)}/>
                <Text>ssssssss</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
});