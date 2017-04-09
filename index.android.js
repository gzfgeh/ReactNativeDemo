/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import SplashScreen from './app/SplashScreen'
import Navigation from './app/Navigation'

export default class RNDemo extends Component {
    constructor(props){
        super(props);
        this.state = {
            splashed: false
        }
    }

    componentDidMount(){
        this.timer = setTimeout(()=>{
            this.setState({
                splashed: true
            })
        }, 3000);
    }

    componentWillUnMount(){
        this.timer && clearTimeout(this.timer);
    }

    render(){
        if (this.state.splashed){
            return(
                <Navigation />
            );
        }else{
            return(
                <SplashScreen/>
            );
        }
    }

}

AppRegistry.registerComponent('RNDemo', () => RNDemo);
