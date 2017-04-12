/**
 *
 *                            _ooOoo_
 *                           o8888888o
 *                           88" . "88
 *                           (| -_- |)
 *                           O\  =  /O
 *                        ____/`---'\____
 *                      .'  \\|     |//  `.
 *                     /  \\|||  :  |||//  \
 *                    /  _||||| -:- |||||-  \
 *                    |   | \\\  -  /// |   |
 *                    | \_|  ''\---/''  |   |
 *                    \  .-\__  `-`  ___/-. /
 *                  ___`. .'  /--.--\  `. . __
 *               ."" '<  `.___\_<|>_/___.'  >'"".
 *              | | :  `- \`.;`\ _ /`;.`/ - ` : | |
 *              \  \ `-.   \_ __\ /__ _/   .-` /  /
 *         ======`-.____`-.___\_____/___.-`____.-'======
 *                            `=---='
 *        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 *                      佛祖保佑       永无BUG
 *
 * Created by GUZHENFU on 2017/4/10.
 */

import React from 'react'
import {View} from 'react-native'

import Navigation from './Navigation'
import SplashScreen from './../SplashScreen'

export default class MainPage extends React.Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            splashed: false
        };
      }

    /**
     * 设置定时器加载SplashScreen页面
     */
    componentDidMount(){
        this.timer = setTimeout(()=>{
            this.setState({
                splashed: true
            })
        }, 3000);
    }


    /**
     * 离开的时候，清除定时器
     */
    componentWillUnMount(){
        this.timer && clearTimeout(this.timer);
    }
    
    render(){
        if (this.state.splashed){
            return(
                <View style={{flex: 1, justifyContent: 'flex-end'}}>
                    <Navigation navigator={this.props.navigator}/>
                </View>
            );
        }else{
            return(
                <SplashScreen/>
            );
        }
        
    }
}