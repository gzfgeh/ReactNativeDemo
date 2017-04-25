/**
 * Created by guzhenfu on 17/4/24.
 */
import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
    TouchableHighlight} from 'react-native'
import BasePage from './BasePage'
import NavigationBar from './../component/SimpleNavigationBar'
import Utils from './../common/theme'
import Button from './../component/Button'

export default class LoginPage extends BasePage{
    render(){
        return(
            <View style={styles.container}>
                <NavigationBar title="登录"
                    backOnPress={this._handleBack.bind(this)}/>
                <Image style={styles.logoStyle}
                       source={require('./../image/msg.png')}
                       resizeMode="contain"/>
                <View style={{height: 1, width: '100%',backgroundColor:Utils.dividerBgColor}} />

                <View style={styles.inputWrap}>
                    <Image
                        style={styles.imageStyle}
                        source={require('./../image/msg.png')}
                        resizeMode="contain"/>
                    <TextInput style={styles.input}
                        placeholder='请输入手机号'
                        numberOfLines={1}
                        secureTextEntry={true}
                        underlineColorAndroid={'transparent'}
                        />
                </View>

                <View style={{height: 2, width: '100%',backgroundColor:Utils.dividerBgColor}} />

                <View style={styles.inputWrap}>
                    <Image
                        style={styles.imageStyle}
                        source={require('./../image/msg.png')}
                        resizeMode="contain"/>
                    <TextInput style={styles.input}
                               placeholder='请输入密码'
                               numberOfLines={1}
                               secureTextEntry={true}
                               underlineColorAndroid={'transparent'}
                    />
                </View>

                <View style={{height: 2, width: '100%',backgroundColor:Utils.dividerBgColor}} />

                <View style={styles.forget_pwd_wrap}>
                    <TouchableHighlight
                        underlayColor={Utils.underClickColor}
                        onPress={()=> {}}>
                        <Text style={styles.forget_pwd_style}>忘记密码</Text>
                    </TouchableHighlight>

                    <TouchableHighlight
                        underlayColor={Utils.underClickColor}
                        onPress={()=> {}}>
                        <Text style={styles.forget_pwd_style}>验证码登录</Text>
                    </TouchableHighlight>
                </View>

                <TouchableHighlight style={styles.loginWrap}
                    underlayColor={Utils.underClickColor}
                    onPress={()=> {}}>

                    <Text style={styles.loginText}>登录</Text>

                </TouchableHighlight>

                <TouchableHighlight style={styles.forgetWrap}
                    underlayColor={Utils.underClickColor}
                    onPress={()=> {}}>

                    <Text style={styles.forgetText}>注册</Text>

                </TouchableHighlight>

                <Text style={styles.licenceText}>轻触上面的'登录'或者'注册'按钮,即表示您同意
                    <Text style={{color: 'red', textDecorationLine: 'underline'}}>《上海化交软件许可及服务协议》</Text>
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    logoStyle:{
        width: '100%',
        height: '25%',
    },
    inputWrap:{
        height: '8%',
        width: '100%',
        flexDirection:'row',
        alignItems: 'center'
    },
    imageStyle:{
        width: '10%',
        height: '90%',
        marginLeft:'2%'
    },
    input:{
        height: '100%',
        marginLeft: '2%',
        flex: 1,
        marginRight: '5%'
    },
    forget_pwd_wrap:{
        width: '100%',
        height: '8%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        padding: '3%'
    },
    forget_pwd_style:{
        color:'red',
        fontSize: Utils.pixToSp(18)
    },
    loginWrap:{
        width: '90%',
        height: '6%',
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#ea5251',
        borderRadius: 6,
        marginLeft: '5%'
    },
    loginText:{
        color: 'white',
        fontSize: Utils.pixToSp(15)
    },
    forgetWrap:{
        width: '90%',
        height: '6%',
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 6,
        borderColor: '#ea5251',
        borderWidth: 2,
        marginLeft: '5%',
        marginTop:'2%'
    },
    forgetText:{
        color: '#ea5251',
        fontSize: Utils.pixToSp(15)
    },
    licenceText:{
        width: '90%',
        marginLeft: '5%',
        marginRight: '5%',
        marginTop: '2%'
    }

});