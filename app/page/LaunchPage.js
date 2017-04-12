/**
 *
 * Description:
 *
 * Created by GUZHENFU on 2017/4/12.
 */
import React from 'react'
import {
    StyleSheet,
    View,
    Image,
    ScrollView,
    TouchableWithoutFeedback
} from 'react-native'

import Navigation from './Navigation'
import Utils from './../utils/theme'
import './../common/ToastLog'
import './../common/Storage'

let image1 = require('./../image/launch_bg1.png');
let image2 = require('./../image/launch_bg2.png');
let image3 = require('./../image/launch_bg3.png');


/**
 * http://www.jianshu.com/p/81e414f81291
 */
export default class LaunchPage extends React.Component{
    
    _endLaunchPage(){
        storage.save({
            key:'launchKey',
            rawData:{
                isComeOver:true
            }
        })
        
        this.props.navigator.push({component: Navigation});
    }

    render(){
        return(
            <ScrollView contentContainerStyle={styles.contentContainer}
                        bounces={false}
                        pagingEnabled={true}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        >
                <Image source={image1} style={styles.backgroundImage} />
                <Image source={image2} style={styles.backgroundImage} />
                <TouchableWithoutFeedback onPress={() => this._endLaunchPage()}>
                    <Image source={image3} style={styles.backgroundImage} />
                </TouchableWithoutFeedback>

            </ScrollView>
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