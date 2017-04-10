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
    View,
    Navigator
} from 'react-native';

import SplashScreen from './app/SplashScreen'
import MainPage from './app/page/MainPage'

export default class RNDemo extends Component {
    constructor(props){
        super(props);
        this.state = {
            splashed: false
        }
    }

    /**
     * 设置定时器加载SplashScreen页面
     */
    componentDidMount(){
        this.timer = setTimeout(()=>{
            this.setState({
                splashed: true
            })
        }, 3000);
    }

    /**
     * 离开的时候，清除定时器
     */
    componentWillUnMount(){
        this.timer && clearTimeout(this.timer);
    }

    render(){
        if (this.state.splashed){
            return(
                /**
                 * navigator 设置初始页为MainPage，
                 * 渲染场景 使用动态加载组件的方式
                 */
                <Navigator
                    initialRoute={{component: MainPage}}
                    renderScene={(route, navigator) => {
                        return <route.component navigator={navigator} {...route.args} />
                    }}/>
            );
        }else{
            return(
                <SplashScreen/>
            );
        }
    }

}

AppRegistry.registerComponent('RNDemo', () => RNDemo);
