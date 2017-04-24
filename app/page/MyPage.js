/**
 * Created by guzhenfu on 17/4/9.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ToastAndroid,
    TouchableHighlight,
} from 'react-native';

import TitleBar from './../component/TitleBar'
import Utils from '../common/theme'
import LoginPage from './LoginPage'
import './../common/ToastLog'

export default class MyPage extends Component {

    _goToLogin(){
        this.props.navigator.push({component: LoginPage})
    }



    render() {
        return (
            <View style={styles.container}>
                <View style={styles.titleLayout}>
                    <TitleBar />
                </View>
                <TouchableHighlight
                    underlayColor={Utils.underClickColor}
                    onPress={()=>{this._goToLogin();}}>

                    <View style={styles.loginLayout}>
                        <Image
                            source={require('./../image/user_icon.png')}
                            style={styles.userIcon}/>
                        <View style={styles.userInfoLayout}>
                            <Text style={styles.loginText}>
                                点击登录
                            </Text>
                            <Text style={styles.loginName}>
                                您好！欢迎光临上海化交网
                            </Text>
                        </View>
                    </View>
                </TouchableHighlight>
                <View style={styles.sellAndBug}>
                    <Text style={styles.sellLayout}>
                        已卖
                        <Text style={{color:'#ea5251',fontSize:22,}}>0</Text>
                        吨
                    </Text>
                    <View style={styles.line}></View>
                    <Text style={styles.buyLayout}>
                        已买
                        <Text style={{color:'#ea5251',fontSize:22,}}>0</Text>
                        吨
                    </Text>
                </View>
                <View style={styles.userInfoItem}>
                    <View style={styles.userInfoItemLeft}>
                        <Image source={require('./../image/msg.png')}
                               style={styles.userInfoItemLeftImg}/>
                        <Text style={styles.userInfoItemLeftText}>
                            我的消息
                        </Text>
                    </View>
                    <View style={styles.userInfoItemRight}>
                        <Image source={require('./../image/turn_right.png')}
                               style={styles.userInfoItemRightImg}/>
                        <Text style={styles.userInfoItemRightText}>
                            您有
                            <Text sytle={{color:'#ea5251',fontSize:22,}}>0</Text>
                            条未读消息
                        </Text>
                    </View>
                </View>
                <View style={styles.userInfoItemLine}></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height:'100%',
        flexDirection: 'column',
        backgroundColor: '#f0f1f5',
    },
    titleLayout:{
        height:Utils.actionBar.height,
        flexDirection: 'column',
        backgroundColor: '#ea5251',
    },
    loginLayout:{
        height:85,
        flexDirection: 'row',
        backgroundColor: '#fff',
    },
    userIcon:{
        height:70,
        width:70,
        marginTop:10,
        marginLeft:20,
    },
    loginText:{
        color:'#000',
        marginLeft:20,
    },
    loginName:{
        color:'#000',
        marginLeft:20,
        fontSize:10,
    },
    sellAndBug:{
        backgroundColor:'white',
        height:60,
        marginTop:10,
        marginBottom:10,
        flexDirection:'row',
        alignItems:'center',
    },
    sellLayout:{
        color:'#000',
        width: '50%',
        flex:1,
        textAlign:'center',
    },
    buyLayout:{
        color:'#000',
        width: '50%',
        textAlign:'center',
    },
    line:{
        backgroundColor:'#f0f1f5',
        width: 2,
        height:'100%',
    },
    userInfoLayout:{
        flexDirection:'column',
        justifyContent:'center',
    },
    userInfoItem:{
        flexDirection:'row',
        height:50,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'space-between',
    },
    userInfoItemLeft:{
        flexDirection:'row',
    },
    userInfoItemRight:{
        flexDirection:'row-reverse',
    },
    userInfoItemLeftImg:{
        width:25,
        height:25,
        marginLeft:20,
        marginRight:10,
    },
    userInfoItemLeftText:{
        color:'#333',
    },
    userInfoItemRightImg:{
        width:20,
        height:20,
        marginLeft:10,
        marginRight:10,
    },
    userInfoItemRightText:{
        color:'#999',
    },
    userInfoItemLine:{
        width:'100%',
        backgroundColor:'gray',
        marginLeft:10
    },
});