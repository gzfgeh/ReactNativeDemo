/**
 *
 * Description: http://www.jianshu.com/p/81e414f81291
 *
 * Created by GUZHENFU on 2017/4/12.
 */
import React from 'react'
import {
    StyleSheet,
    View,
    Image,
    ScrollView,
    TouchableWithoutFeedback,
    Text
} from 'react-native'

import Swiper from 'react-native-swiper'
import Button from './../component/Button'

import Navigation from './Navigation'
import Utils from '../common/theme'
import './../common/ToastLog'
import './../common/Storage'

let image1 = require('./../image/launch_bg1.png');
let image2 = require('./../image/launch_bg2.png');
let image3 = require('./../image/launch_bg3.png');


export default class LaunchPage extends React.Component{

    _endLaunchPage(){
        storage.save({
            key:'launchKey',
            rawData:{
                isComeOver:true
            }
        });
        //不能用push,要重置路由栈
        this.props.navigator.resetTo({component: Navigation, navigator: this.props.navigator});
    }

    render(){
        return(
            <Swiper
                style={{flex: 1}}
                paginationStyle={{bottom: 50}}
                loop={false}>
                <Image source={image1} style={styles.itemStyle} resizeMode='stretch'/>
                <Image source={image2} style={styles.itemStyle} resizeMode='stretch'/>
                <View style={styles.itemStyle}>
                    <Image source={image3} style={styles.itemStyle} resizeMode='stretch'/>
                    <View style={styles.buttonStyle}>
                        <Button text="立即登录" onPress={()=>this._endLaunchPage()}/>
                    </View>
                </View>
            </Swiper>
        );
    }
}

var styles = StyleSheet.create({
    itemStyle: {
        height: Utils.screenHeight,
        width: Utils.screenWidth
    },
    buttonStyle:{
        position:'absolute',
        bottom:Utils.screenHeight/6,
        left:Utils.screenWidth*7/20,
    }
});