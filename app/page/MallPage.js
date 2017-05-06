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

const preData = [{keysss: 1},{keysss:2},{keysss:3},{keysss:4},{keysss:5},{keysss:6},{keysss:7},{keysss:8},{keysss:9},{keysss:10}];
const newData = [{keysss: 12},{keysss:23},{keysss:34},{keysss:45},{keysss:56},{keysss:67},{keysss:78},{keysss:89},{keysss:90},{keysss:10}];

export default class MallPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isInit: true,
            isRefresh: false,
            data: preData,
        }
    }

    _renderInit(){
        setTimeout(() => {
            this.setState({
                isInit: false,
            });

        }, 3000);
        return(
            <View
                style={{flex: 1,justifyContent: 'center',
                    alignItems: 'center', backgroundColor:'white'}}>
                <ActivityIndicator animating size="large" />
            </View>
        );
    }

    /**
     * 下拉刷新
     * @private
     */
    _onPullRelease(){
        setTimeout(() => {
            this.setState({
                isRefresh: false,
                data: newData,
            })

        }, 3000);
        this.setState({
            isRefresh: true,
        })
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
     * 加载更多 UI渲染
     * @returns {XML}
     * @private
     */
    _renderFoot(){
        return(
            <View
                style={{
                    paddingVertical: 10,
                    borderTopWidth: 1,
                    borderColor: "#CED0CE"
                }}>
                <ActivityIndicator animating size="large" />
            </View>
        );
    }

    /**
     * 加载更多  数据加载
     * @private
     */
    _loadMore(){
        setTimeout(() => {
            this.setState({
                data: this.state.data.concat(preData),
            })
            ToastLog("load more")
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
     *
     * @returns {XML}
     * @private
     */
    _renderHeader(){
        return(
          <Text style={{
              width:"100%",
              height:100,
              justifyContent: 'center', alignItems: 'center'}}>这是固定头部</Text>
        );
    }

    _rendFlatList(){
        return(
            <View style={styles.container}>
                    {this._renderHeader()}
                    <FlatList
                        data={this.state.data}
                        refreshing={this.state.isRefresh}
                        onRefresh={()=> this._onPullRelease()}
                        keyExtractor={(item, index) => {return index}}
                        getItemLayout={(data, index) => (
                        {length: 120, offset: 120 * index, index}
                        )}
                        ListFooterComponent={()=> this._renderFoot()}
                        onEndReached={()=> this._loadMore()}
                        onEndThreshold={1}
                        renderItem={(item)=> this._renderItem(item)}/>
            </View>
        );
    }

    render(){
        if (this.state.isInit){
            return this._renderInit()
        } else{
            return this._rendFlatList();
        }
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