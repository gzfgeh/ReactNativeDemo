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
        })
        
        //this.props.navigator.push({component: Navigation, navigator: this.props.navigator});
    }

    _onMomentumScrollEnd(){
        ToastLog("-------");
    }

    render(){
        return(
            <Swiper
                paginationStyle={{bottom: 50}}
                loop={false}
                onResponderRelease={this._onMomentumScrollEnd()}>
                <Image source={image1} style={styles.backgroundImage} />
                <Image source={image2} style={styles.backgroundImage} />
                <View>
                <Text>skdfkkd</Text>
                <TouchableWithoutFeedback >
                    <Image source={image3} style={styles.backgroundImage} />
                </TouchableWithoutFeedback>
                </View>
            </Swiper>
        );
    }
}

var styles = StyleSheet.create({
    contentContainer: {
        width: Utils.screenWidth*3,
        height: Utils.screenHeight,
    },
    backgroundImage: {
        width: Utils.screenWidth,
        height: Utils.screenHeight,
    },
});