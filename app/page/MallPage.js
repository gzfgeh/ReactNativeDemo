/**
 * Created by guzhenfu on 17/4/9.
 */

import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    TouchableHighlight,
    ActivityIndicator,
    ScrollView} from 'react-native'

import LoginPage from './LoginPage'
import Utils from './../common/theme'
import RefreshFlatList from './../component/RefreshFlatList'
import SearchHeader from './../component/SearchHeader'

const preData = [{keysss: 1},{keysss:2},{keysss:3},{keysss:4},{keysss:5},{keysss:6},{keysss:7},{keysss:8},{keysss:9},{keysss:10}];
const newData = [{keysss: 12},{keysss:23},{keysss:34},{keysss:45},{keysss:56},{keysss:67},{keysss:78},{keysss:89},{keysss:90},{keysss:10}];

export default class MallPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: preData,
        }

        setTimeout(() => {
            this._listRef.setData(preData);

        }, 3000);
    }

    /**
     * 下拉刷新
     * @private
     */
    _onPullRelease(resolve){
        setTimeout(() => {
            resolve();
            this._listRef.setData(newData);
        }, 3000);
    }

    /**
     * 点击事件
     * @param item
     * @private
     */
    _onItemPress(item){
        this.props.navigator.push({component: LoginPage})
    }

    /**
     * 加载更多  数据加载
     * @private
     */
    _loadMore(){
        setTimeout(() => {
            this._listRef.addData(preData);
        }, 3000);
    }

    /**
     * 渲染item 布局
     * @param item
     * @returns {XML}
     * @private
     */
    _renderItem(item){
        return(
            <TouchableHighlight
                underlayColor={Utils.underClickColor}
                onPress={()=> {this._onItemPress(item)}}>
                <View style={styles.listWrapper}>
                    <View style={styles.listItemWrapper}><Text >{item.index + "1"}</Text></View>
                    <View style={styles.listItemWrapper}><Text >{item.item.keysss+"2"}</Text></View>
                    <View style={styles.listItemWrapper}><Text style={styles.listItemTextBlue}>{"sddsd"}</Text></View>
                    <View style={styles.listItemWrapper}><Text style={styles.listItemTextRed}>{"sddsd"}</Text></View>
                </View>
            </TouchableHighlight>
        )
    }

    /**
     * 点击搜索框
     * @private
     */
    _searchAction(){
        ToastLog("search")
    }

    _searchBack(){
        ToastLog("back")
    }

    /**
     *
     * @returns {XML}
     * @private
     */
    _renderHeader(){
        return(
            <SearchHeader
                onPress={()=> this._searchAction()}
                onBack={()=> this._searchBack()}/>);
    }

    render(){
        return(
            <View style={styles.container}>
                {this._renderHeader()}
                <RefreshFlatList
                    ref={(list)=> this._listRef = list}
                    onPullRelease={(resolve)=> this._onPullRelease(resolve)}
                    ItemHeight={120}
                    onEndReached={()=> this._loadMore()}
                    renderItem={(item)=> this._renderItem(item)}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        marginBottom: Utils.pixToDpSize(150),
    },
    listWrapper:{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: 100,
        borderTopWidth: 1,
        borderTopColor: Utils.dividerBgColor,
    },
    listItemWrapper:{
        width: '25%',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    listItemTextBlue:{
        color: '#45a162',
    },
    listItemTextRed:{
        color: '#c84a4a',
    }
});