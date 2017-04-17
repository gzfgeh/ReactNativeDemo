/**
 *
 * Description:
 *
 * Created by GUZHENFU on 2017/4/17.
 */

import React, {Component, PropTypes} from 'react';
import ReactNative, {Text, View, StyleSheet, Platform, TouchableOpacity, TouchableNativeFeedback, Image} from 'react-native';
import Utils from './../common/theme';
import Icon from 'react-native-vector-icons/Ionicons';

export default class ImageButton extends Component{

    static propTypes = {
        text: PropTypes.string,
        image: PropTypes.number,
        icon: PropTypes.string,
        onPress: PropTypes.func,
        imgSize: PropTypes.number,
        fontSize: PropTypes.number,
        color: PropTypes.string,
        btnStyle: View.propTypes.style
    };

    static defaultProps = {
        imgSize: Utils.pixToDpSize(40),
        fontSize: Utils.pixToDpSize(13)
    };

    render() {
        const {image, icon, onPress} = this.props;

        if (Platform.OS === 'ios') {
            if (image) {
                return (
                    <TouchableOpacity onPress={onPress} activeOpacity={Utils.btnActiveOpacity}>
                        {this._renderContentWithImage()}
                    </TouchableOpacity>
                );
            } else if (icon) {
                return (
                    <TouchableOpacity onPress={onPress} activeOpacity={Utils.btnActiveOpacity}>
                        {this._renderContentWithIcon()}
                    </TouchableOpacity>
                );
            }
        } else if (Platform.OS === 'android') {
            if (image) {
                return (
                    <TouchableNativeFeedback onPress={onPress}>
                        {this._renderContentWithImage()}
                    </TouchableNativeFeedback>
                );
            } else if (icon) {
                return (
                    <TouchableNativeFeedback onPress={onPress}>
                        {this._renderContentWithIcon()}
                    </TouchableNativeFeedback>
                );
            }
        }
    }

    _renderContentWithImage(){
        const {text, image, color, imgSize, fontSize, btnStyle} = this.props;
        return(
            <View style={[styles.view, btnStyle]}>
                <Image source={image} style={{width: imgSize, height: imgSize}}/>
                {text ?
                    <Text style={[styles.text, {fontSize: fontSize, color: color}]}>{text}</Text>
                    :
                    null
                }
            </View>
        );
    }

    _renderContentWithIcon(){
        const {text, icon, color, imgSize, fontSize, btnStyle} = this.props;
        return(
            <View style={[styles.view, btnStyle]}>
                <Icon name={icon} size={imgSize} color={color}/>
                {text ?
                    <Text style={{fontSize: fontSize, color: color}}>{text}</Text>
                    :
                    null
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view:{
        alignItems: 'center',
        justifyContent: 'center'
    },
    text:{
        color: 'rgba(255,255,255,0.7)',
        marginTop: Utils.pixToDpSize(4)
    }
});