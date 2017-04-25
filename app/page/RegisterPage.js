/**
 * Created by guzhenfu on 17/4/9.
 */

import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
    TouchableHighlight,
    ScrollView} from 'react-native'
import BasePage from './BasePage'
import NavigationBar from './../component/SimpleNavigationBar'
import Utils from './../common/theme'
var dismissKeyboard = require('dismissKeyboard');

export default class RegisterPage extends BasePage{

    constructor(props){
        super(props);
        this.state = {
            keyboardSpace: 0,
        }
    }
    /**
     * input 获取焦点
     * @private
     */
    _onFocus(){

    }

    /**
     * input 失去焦点
     * @private
     */
    _onBlur(){
    }

    _onTouchStart(){
        dismissKeyboard();
        this.scrollView.scrollTo({x:0,y:0,animated:true})
    }

    render(){
        return(
            <ScrollView style={{flex: 1}}
                        keyboardShouldPersistTaps='always'
                        ref = {(ref)=>this.scrollView = ref}
                        contentInset = {{bottom:this.state.keyboardSpace}}
                        onTouchStart= {()=> {this._onTouchStart()}}
                        >
          <View style={styles.container}>
              <NavigationBar title="注册"
                   backOnPress={this._handleBack.bind(this)}/>


              <View style={styles.inputWrap}>
                  <Image
                      style={styles.imageStyle}
                      source={require('./../image/msg.png')}
                      resizeMode="contain"/>
                  <TextInput style={styles.input}
                             placeholder='请输入手机号'
                             numberOfLines={1}
                             underlineColorAndroid={'transparent'}
                             keyboardType={'numeric'}
                             maxLength={11}
                             onFocus={()=> {this._onFocus()}}
                             onBlur={()=> {this._onBlur()}}/>
              </View>

              <View style={{height: 2, width: '100%',backgroundColor:Utils.dividerBgColor}} />

              <View style={styles.inputWrap}>
                  <Image
                      style={styles.imageStyle}
                      source={require('./../image/msg.png')}
                      resizeMode="contain"/>
                  <TextInput style={styles.input}
                             placeholder='手机验证码'
                             numberOfLines={1}
                             underlineColorAndroid={'transparent'}
                             keyboardType={'numeric'}
                             maxLength={11}
                             onFocus={()=> {this._onFocus()}}
                             onBlur={()=> {this._onBlur()}}/>
              </View>

              <View style={{height: 2, width: '100%',backgroundColor:Utils.dividerBgColor}} />

              <View style={styles.inputWrap}>
                  <Image
                      style={styles.imageStyle}
                      source={require('./../image/msg.png')}
                      resizeMode="contain"/>
                  <TextInput style={styles.input}
                             placeholder='邮箱(可选)'
                             numberOfLines={1}
                             underlineColorAndroid={'transparent'}
                             keyboardType={'numeric'}
                             maxLength={11}
                             onFocus={()=> {this._onFocus()}}
                             onBlur={()=> {this._onBlur()}}/>
              </View>

              <View style={{height: 2, width: '100%',backgroundColor:Utils.dividerBgColor}} />

              <View style={styles.inputWrap}>
                  <Image
                      style={styles.imageStyle}
                      source={require('./../image/msg.png')}
                      resizeMode="contain"/>
                  <TextInput style={styles.input}
                             placeholder='用户名'
                             numberOfLines={1}
                             underlineColorAndroid={'transparent'}
                             keyboardType={'numeric'}
                             maxLength={11}
                             onFocus={()=> {this._onFocus()}}
                             onBlur={()=> {this._onBlur()}}/>
              </View>

              <View style={{height: 2, width: '100%',backgroundColor:Utils.dividerBgColor}} />

              <View style={styles.inputWrap}>
                  <Image
                      style={styles.imageStyle}
                      source={require('./../image/msg.png')}
                      resizeMode="contain"/>
                  <TextInput style={styles.input}
                             placeholder='密码'
                             numberOfLines={1}
                             underlineColorAndroid={'transparent'}
                             keyboardType={'numeric'}
                             maxLength={11}
                             onFocus={()=> {this._onFocus()}}
                             onBlur={()=> {this._onBlur()}}/>
              </View>

              <View style={{height: 2, width: '100%',backgroundColor:Utils.dividerBgColor}} />

              <View style={styles.inputWrap}>
                  <Image
                      style={styles.imageStyle}
                      source={require('./../image/msg.png')}
                      resizeMode="contain"/>
                  <TextInput style={styles.input}
                             placeholder='请确认密码'
                             numberOfLines={1}
                             underlineColorAndroid={'transparent'}
                             keyboardType={'numeric'}
                             maxLength={11}
                             onFocus={()=> {this._onFocus()}}
                             onBlur={()=> {this._onBlur()}}/>
              </View>

              <View style={{height: 2, width: '100%',backgroundColor:Utils.dividerBgColor}} />

              <TouchableHighlight style={styles.registerWrap}
                                  underlayColor={Utils.underClickColor}
                                  onPress={()=> {}}>

                  <Text style={styles.registerText}>注册</Text>

              </TouchableHighlight>

          </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    inputWrap:{
        height: '15%',
        width: '100%',
        flexDirection:'row',
        alignItems: 'center',
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
    registerWrap:{
        width: '90%',
        height: '6%',
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#ea5251',
        borderRadius: 6,
        marginLeft: '5%',
        marginTop: '5%'
    },
    registerText:{
        color: 'white',
        fontSize: Utils.pixToSp(15)
    },
});