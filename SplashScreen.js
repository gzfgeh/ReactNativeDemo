/**
 * Created by guzhenfu on 2016/6/21.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Dimensions,
    Image,
} from 'react-native';

var WINDOW_WIDTH = Dimensions.get('window').width;
var WINDOW_HEIGHT = Dimensions.get('window').height;

class SplashScreen extends Component{
    render() {
        return (
            <Image style={styles.logo} source={require('./image/startpage.png')}/>
        )
    }
};


var styles = StyleSheet.create({
   container: {
       flex: 1,
   },
    logo: {
        width: WINDOW_WIDTH,
        height: WINDOW_HEIGHT,
    }
});

module.exports = SplashScreen;