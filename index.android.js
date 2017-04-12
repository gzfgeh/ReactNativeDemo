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

import MainPage from './app/page/MainPage'

/**
 * 因为Android ios 入口文件不一样，所以为了保持代码复用，这个文件内容应该尽量短少
 */
export default class RNDemo extends Component {
    render(){
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

    }

}

AppRegistry.registerComponent('RNDemo', () => RNDemo);
