/**
 * Created by guzhenfu on 17/5/10.
 */

import React from 'react';
import {
    Image,
    TextInput,
    View,
    StyleSheet,
    Text,
    TouchableHighlight
} from 'react-native';

import Utils from './../common/theme'
import Icon from 'react-native-vector-icons/Ionicons'

export default class SearchHeader extends React.Component{



    render(){
        return(
            <View style={styles.contain}>
                <Icon name="ios-arrow-back" color='white' size={30}
                    style={styles.leftImage}
                    onPress={this.props.onBack}/>

                <View style={styles.centerView}>
                    <Icon name="ios-search" size={25} style={styles.inputIcon}/>
                    <TextInput
                        keyboardType='web-search'
                        style={styles.inputText}
                        underlineColorAndroid={'transparent'}
                        placeholder="搜索"/>
                </View>

                <TouchableHighlight
                    style={{width: '10%'}}
                    underlayColor={Utils.underClickColor}
                    onPress={this.props.onPress}>
                    <Text style={styles.rightText}>搜索</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
   contain:{
       flexDirection: 'row',
       justifyContent: 'space-around',
       alignItems: 'center',
       paddingTop: Utils.isIOS ? 20 : 0,
       height: Utils.isIOS ? 68 : 48,
       backgroundColor: Utils.themeColor,
    },
    leftImage:{
        height: '60%',
        marginLeft: 10,
    },
    centerView:{
        height: '70%',
        width: '75%',
        backgroundColor:'white',
        borderRadius: 6,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    rightText:{
        color:'white',
        fontSize: Utils.pixToSp(20)
    },
    inputIcon:{
        marginLeft: 10,
        marginRight: 10,
    },
    inputText: {
        flex: 1,
        height: Utils.screenHeight/12,
        backgroundColor: 'transparent',
        fontSize: 16,
    }
});