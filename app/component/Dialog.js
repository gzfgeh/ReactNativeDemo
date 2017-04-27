/**
 * Created by guzhenfu on 17/4/26.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableHighlight,
    Animated,
    Easing,
    Dimensions,
} from 'react-native';

import Utils from './../common/theme'

import TimerMixin from 'react-timer-mixin';

const {width, height} = Dimensions.get('window');
const navigatorH = 64; // navigator height
const [aWidth, aHeight] = [270, 108];
const [left, top] = [0, 0];
const [middleLeft, middleTop] = [(width - aWidth) / 2, (height - aHeight) / 2 - navigatorH];

/**
 * Dialog组件
 * <Dialog ref="dialog" callback={this.callback.bind(this)}/>
 * 调用show方法，调起组件   this.refs.dialog.show("确定删除吗");
 */

export default class Dialog extends Component {
    mixins = [TimerMixin];
    parent ={};


    constructor(props) {
        super(props);
        this.state = {
            offset: new Animated.Value(1),
            opacity: new Animated.Value(0),
            title: "",
            hide: true,
        };
    }

    render() {
        if(this.state.hide){
            return (<View />)
        } else {
            return (
                <View style={styles.container} >
                    <View style={ styles.mask } >
                    </View>

                    <Animated.View style={[styles.tip , {transform: [
                        {
                            translateY: this.state.offset.interpolate({
                                inputRange: [1,2],
                                outputRange: [middleTop,height]
                            }),
                        },
                        {
                            scale:this.state.opacity
                        }
                        ]
                    }]}>
                        <View style={styles.tipTitleView}>
                            <Text style={styles.tipTitleText}>{this.state.title}</Text>
                        </View>

                        <View style={styles.btnView}>
                            <TouchableHighlight style={styles.cancelBtnView} underlayColor='#f0f0f0' onPress={this.cancelBtn.bind(this)}>
                                <Text style={styles.cancelBtnText}>取消</Text>
                            </TouchableHighlight>
                            <View style={styles.dividerLineStyle}/>
                            <TouchableHighlight style={styles.okBtnView} underlayColor='#f0f0f0' onPress={this.okBtn.bind(this)}>
                                <Text style={styles.okBtnText}>确定</Text>
                            </TouchableHighlight>
                        </View>
                    </Animated.View>
                </View>
            );
        }
    }


    //显示动画
    in() {
        Animated.parallel([
            Animated.timing(
                this.state.opacity,
                {
                    easing: Easing.linear,
                    duration: 300,
                    toValue: 0.8,
                }
            ),
            Animated.timing(
                this.state.offset,
                {
                    easing: Easing.linear,
                    duration: 300,
                    toValue: 1,
                }
            )
        ]).start();
    }

    //隐藏动画
    out(){
        Animated.parallel([
            Animated.timing(
                this.state.opacity,
                {
                    easing: Easing.linear,
                    duration: 300,
                    toValue: 0,
                }
            ),
            Animated.timing(
                this.state.offset,
                {
                    easing: Easing.linear,
                    duration: 300,
                    toValue: 1,
                }
            )
        ]).start();

        setTimeout(
            () => {
                this.setState({hide: true});
                //还原到顶部
                Animated.timing(
                    this.state.offset,
                    {
                        easing: Easing.linear,
                        duration: 300,
                        toValue: 1,
                    }
                ).start();
            },
            300
        );
    }

    //取消
    cancelBtn(event) {
        if(!this.state.hide){
            this.out();
        }
    }

    // doCallback(fn,args){
    //   fn.apply(this.parent, args);
    // }

    //选择
    okBtn() {
        if(!this.state.hide){
            this.out();
            setTimeout(
                () => {
                    let {callback} = this.props;
                    callback.apply(null,[]);
                },
                300
            );
        }
    }

    //noinspection JSAnnotator
    /**
     * 弹出控件
     * titile: 标题
     */
    show(title: string) {
        if(this.state.hide){
            this.setState({title: title, hide: false}, this.in);
        }
    }
}

const styles = StyleSheet.create({
    container: {
        position:"absolute",
        width:width,
        height:height,
        left:left,
        top:top,
    },
    mask: {
        justifyContent:"center",
        backgroundColor:"#383838",
        opacity:0.8,
        position:"absolute",
        width:width,
        height:height,
        left:left,
        top:top,
    },
    tip: {
        width:aWidth,
        height:aHeight,
        left:middleLeft,
        backgroundColor:"#fff",
        alignItems:"center",
        justifyContent:"space-between",
        borderRadius: 8,
    },
    tipTitleView: {
        width:aWidth,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        borderBottomWidth:1/2,
        borderColor:'blue',
    },
    tipTitleText:{
        color:"#333333",
        fontSize:17,
        marginTop:28,
        marginBottom:19,
        textAlignVertical:'center',
        textAlign:'center',
    },

    btnView:{
        flexDirection:'row',
        height: 44,
        borderBottomLeftRadius:15,
        borderBottomRightRadius:15,
    },
    cancelBtnView:{
        width:aWidth/2,
        height: 44,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomLeftRadius:15,
    },
    cancelBtnText: {
        fontSize:17,
        color:"#e6454a",
        textAlign:"center",
        fontWeight:'bold',
    },
    dividerLineStyle:{
      height: 44,
      width: 1,
      backgroundColor:'#EBEBEB'
    },
    okBtnView:{
        width:aWidth/2,
        height: 44,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomRightRadius:15,
    },
    okBtnText: {
        fontSize:17,
        color:"#e6454a",
        textAlign:"center",
    },

});