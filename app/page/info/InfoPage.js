/**
 * Created by guzhenfu on 17/4/9.
 */

import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableHighlight} from 'react-native'
import Utils from '../../common/theme'
import '../../common/ToastLog'
import ThreeBtnSwitch from './../../component/ThreeBtnSwitch'
import PEPage from './PEPage'

export default class InfoPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            index: 1,
        };
    }

    /**
     * switch btn 点击事件回调
     * @param index
     * @private
     */
    _switchListener(index){
        this.setState({
            index: index
        });
    }

    /**
     * 根据点击切换不同的页面
     * @private
     */
    _rendSwitchPage(){
        switch (this.state.index){
            case 1:
                return(
                    <PEPage />
                );

            case 2:
                return(
                    <View style={styles.container}>
                        <Text>222222</Text>
                    </View>
                );

            case 3:
                return(
                    <View style={styles.container}>
                        <Text>33333</Text>
                    </View>
                );
        }
    }

    render(){
        return(
          <View style={styles.container}>
              <ThreeBtnSwitch onBtnClick={(index)=> {this._switchListener(index)}}/>
              {this._rendSwitchPage()}
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    }
});