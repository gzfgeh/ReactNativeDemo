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

import TabBar from 'react-native-xtabbar';

var TimerMixin = require('react-timer-mixin');
var SplashScreen = require('./SplashScreen');
var TopViewPager = require('./TopViewPager');

class FreyRN extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            splashed: false,
        };
    }

    componentDidMount() {
        this.timer = setTimeout(
            () => {
                this.setState({splashed:true});
            }, 3000
        );
    }

    componentWillUnMount() {
        this.timer && clearTimeout(this.timer);
    }

    render() {
        if (this.state.splashed){
            return (
                <TabBar
                    style={styles.container}
                    navTextColor="#666666"
                    navTextColorSelected="#4889db">
                    <TabBar.Item
                        icon={require('./image/home_b.png')}
                        selectedIcon={require('./image/home_a.png')}
                        title='化交首页'>
                        <View>
                            <Text>Home</Text>
                        </View>
                    </TabBar.Item>

                    <TabBar.Item
                        icon={require('./image/besttrade_b.png')}
                        selectedIcon={require('./image/besttrade_a.png')}
                        title='最优卖盘'>
                        <View>
                            <Text>最优卖盘</Text>
                        </View>
                    </TabBar.Item>

                    <TabBar.Item
                        icon={require('./image/myorder_b.png')}
                        selectedIcon={require('./image/myorder_a.png')}
                        title='化交资讯'>
                        <View>
                            <Text>化交资讯</Text>
                        </View>
                    </TabBar.Item>

                    <TabBar.Item
                        icon={require('./image/myorder_b.png')}
                        selectedIcon={require('./image/myorder_a.png')}
                        title='我的订单'>
                        <View>
                            <Text>我的订单</Text>
                        </View>
                    </TabBar.Item>

                    <TabBar.Item
                        icon={require('./image/my_b.png')}
                        selectedIcon={require('./image/my_a.png')}
                        badge={0}
                        title='我的化交'>
                        <View>
                            <Text>我的化交</Text>
                        </View>
                    </TabBar.Item>

                </TabBar>
            );
        }else{
            return (
                <SplashScreen />
            )
        }

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
    },
});

AppRegistry.registerComponent('FreyRN', () => FreyRN);
