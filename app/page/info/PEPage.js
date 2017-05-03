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
import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view';
import ImageButton from './../../component/ImageButton'

const TabNames = ['化交价格', '热点访谈', '化交报告', '化交咨询',
                    '数据中心', '每日成交', '下游调研', '化交讲堂', '']
export default class PEPage extends React.Component{
    constructor(props){
        super(props);
    }

    _pullDownOnPress(index){
        ToastLog(index+"----")
    }


    render(){
        return(
            <ScrollableTabView
                renderTabBar={()=> <ScrollableTabBar />}
                tabBarBackgroundColor="rgb(22,131,251)"
                tabBarActiveTextColor="white"
                tabBarInactiveTextColor="rgba(255,255,255,0.5)">
                {
                    TabNames.map((item, i)=> {
                        switch(i){
                            case 0:
                            case 1:
                            case 5:
                            case 6:
                            case 7:
                            case 2:
                            case 3:
                            case 4:
                                return (
                                    <Text tabLabel={item} key={i} tabTag={item}>{item}</Text>
                                );
                        }

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