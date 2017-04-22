/**
 * Created by guzhenfu on 17/4/22.
 */
import React, {Component, PropTypes} from 'react';
import {Text, View, StyleSheet, Platform, TouchableHighlight, TouchableNativeFeedback} from 'react-native';
import Utils from './../common/theme';

export default class Button extends Component{
    static propTypes = {
        text: PropTypes.string.isRequired,
        onPress: PropTypes.func,
    };

    render(){
        if(Platform.OS === 'android') {
            return (
                <TouchableNativeFeedback
                    onPress={this.props.onPress}>
                    {this._renderContent()}
                </TouchableNativeFeedback>
            );
        }else if(Platform.OS === 'ios'){
            return(
                <TouchableHighlight
                    onPress={this.props.onPress}
                    activeOpacity={Utils.btnActiveOpacity}>
                    {this._renderContent()}
                </TouchableHighlight>
            );
        }
    }

    _renderContent(){
        return(
            <View style={{flex: 1, height: Utils.pixToDpSize(160),
                backgroundColor: '#046ada', alignItems:'center',
                justifyContent:'center', borderRadius: 8,
            }}>
                <Text style={styles.text}>{this.props.text}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    text:{
        color: 'white',
        fontSize: Utils.pixToSp(20),
        padding: 20
    }
});