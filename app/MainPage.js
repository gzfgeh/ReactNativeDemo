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

import Navigation from './page/Navigation'
import SplashScreen from './page/SplashScreen'
import LaunchPage from './page/LaunchPage'
import './common/Storage'
import './common/ToastLog'


export default class MainPage extends React.Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            splashed: false,
            launched: false,
        };
      }

    /**
     * 设置定时器加载SplashScreen页面
     */
    componentDidMount(){
        this._inquireData();
        this.timer = setTimeout(()=>{
            this.setState({
                splashed: true
            })
        }, 2000);
    }


    /**
     * 离开的时候，清除定时器
     */
    componentWillUnMount(){
        this.timer && clearTimeout(this.timer);
    }

    /**
     * _开头表示是本类的私有函数
     * 查询是否第一次启动
     * @private
     */
    _inquireData(){
        storage.load({
            key: 'launchKey',
        }).then(ret => {
            this.setState({
                launched: ret.isComeOver,
            });

        }).catch(err => {
            this.setState({
                launched: false,
            });
        })
    }
    
    render(){
        if (this.state.splashed){

            if (this.state.launched){
                return(
                    <View style={{flex: 1, justifyContent: 'flex-end'}}>
                        <Navigation navigator={this.props.navigator}/>
                    </View>
                );
            }else {
                //引导页
                return(
                    <LaunchPage navigator={this.props.navigator}/>
                );
            }

        }else{
            //启动页
            return(
                <SplashScreen/>
            );
        }
        
    }
}