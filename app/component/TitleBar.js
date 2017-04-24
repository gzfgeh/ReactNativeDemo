/**
 * Created by guzhenfu on 17/4/24.
 */
/**
 * Created by GUZHENFU on 2017/3/14.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

export default class TitleBar extends Component {
    render(){
        return (
            <View style={styles.container}>
                <Image
                    style={styles.backIcon}
                    source={require('./../image/turn_right.png')}
                    resizeMode="contain"
                />
                <Text style={styles.welcome}>
                    会员中心
                </Text>
                <Image
                    style={styles.msgIcon}
                    source={require('./../image/turn_right.png')}
                    resizeMode="contain"
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        color:'#fff',
    },
    backIcon: {
        width: 25,
        height: 25,
        marginLeft: 16,
        opacity: 0
    },
    msgIcon: {
        width: 25,
        height: 25,
        marginLeft: 16,
        opacity: 0
    },
});