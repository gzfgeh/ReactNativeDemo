/**
 * Created by guzhenfu on 17/4/9.
 */
import React, {Component} from 'react'
import {
    StyleSheet,
    Image
    } from 'react-native'
import Utils from '../common/theme'

export default class SplashScreen extends React.Component{
    render(){
        return(
            <Image source={require('./../image/splash_bg.png')}
                style={styles.splashStyle}/>
        );
    }
};

var styles = StyleSheet.create({
    splashStyle:{
        width: Utils.screenWidth,
        height: Utils.screenHeight,
        flex: 1,
        backgroundColor: 'white'
    }
});