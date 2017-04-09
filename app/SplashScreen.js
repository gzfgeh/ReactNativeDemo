/**
 * Created by guzhenfu on 17/4/9.
 */
import React, {Component} from 'react'
import {
    StyleSheet,
    Image} from 'react-native'
import Style from './utils/theme'

export default class SplashScreen extends React.Component{
    render(){
        return(
            <Image source={require('./image/splash_bg.png')}
                style={styles.splashStyle}/>
        );
    }
};

var styles = StyleSheet.create({
    splashStyle:{
        width: Style.width,
        height: Style.height,
        flex: 1,
        backgroundColor: 'blue'
    }
});