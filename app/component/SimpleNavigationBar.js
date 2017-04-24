/**
 *
 * Description:
 *
 * Created by GUZHENFU on 2017/4/17.
 */

import React, {Component, PropTypes} from 'react';
import {StyleSheet, View, Text, Platform} from 'react-native';
import ImageButton from './../component/ImageButton';
import Utils from './../common/theme';

export default class SimpleNavigationBar extends Component{
    static propTypes = {
        title: PropTypes.string.isRequired,
        backOnPress: PropTypes.func.isRequired,
        rightTitle:PropTypes.string
    };

    static defaultProps = {
        title: 'title',
        rightTitle: ''
    }

    render(){
        return(
            <View style={styles.toolbar}>
                {Platform.OS === 'android' ?
                    <ImageButton icon="md-arrow-back" color="#fff" imgSize={Utils.pixToDpSize(60)} btnStyle={styles.imgBtn} onPress={this.props.backOnPress}/>
                    :
                    <ImageButton icon="ios-arrow-back" color="#fff" imgSize={Utils.pixToDpSize(60)} btnStyle={styles.imgBtn} onPress={this.props.backOnPress}/>
                }
                <Text style={styles.title}>{this.props.title}</Text>
                <Text style={styles.title}>{this.props.rightTitle}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    toolbar: {
        height: Utils.actionBar.height,
        width: Utils.screenWidth,
        backgroundColor: Utils.actionBar.backgroundColor,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: (Platform.OS === 'ios') ? Utils.pixToDpSize(40) : 0,
        paddingRight: Utils.pixToDpSize(120)
    },
    imgBtn: {
        width: Utils.pixToDpSize(120),
        height: Utils.pixToDpSize(120)
    },
    title:{
        color: Utils.actionBar.fontColor,
        fontSize: Utils.actionBar.fontSize,
    }
});