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
import ScrollableTabView from 'react-native-scrollable-tab-view';

const TabNames = ['化交价格', '热点访谈', '化交报告', '化交咨询',
                    '数据中心', '每日成交', '下游调研', '化交讲堂', '']
export default class PEPage extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        return(
            <ScrollableTabView
                tabBarBackgroundColor="rgb(22,131,251)"
                tabBarActiveTextColor="white"
                tabBarInactiveTextColor="rgba(255,255,255,0.5)">
                {
                    TabNames.map((item, i)=> {
                        return (
                            <Text tabLabel={item} key={i} tabTag={item}>{item}</Text>
                        );
                    })
                }
            </ScrollableTabView>


        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    }
});