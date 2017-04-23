/**
 * Created by guzhenfu on 17/4/9.
 */

import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableHighlight,
    ListView,
    FlatList} from 'react-native'

import Swiper from 'react-native-swiper'
import ApiContant from './../common/ApiContant'
import './../common/ToastLog'
import HomeModle from './../modle/HomeModle'
import {PullView} from 'react-native-pull'
import Utils from '../common/theme'
import WebViewPage from './WebViewPage'
import Loading from './../component/Loading'


let projectText = ['现货交易', '我的交易', '我的询盘', '交易规则', '化交价格', '化交资讯', '化交报告', '资金详情'];
let projectImage = [
    require('./../image/list_1.png'), require('./../image/list_2.png'),
    require('./../image/list_3.png'), require('./../image/list_4.png'),
    require('./../image/list_5.png'), require('./../image/list_6.png'),
    require('./../image/list_7.png'), require('./../image/list_8.png')
];

export default class HomePage extends React.Component{
    // 构造
      constructor(props) {
        super(props);

        // 初始状态
        this.state = {
            loaded: false,
            imageViewsData: [],
            noticeData: [],
            dataSource: [],
            detailDataSource: [],
        };
      }

    /**
     * 得到轮播图的数据
     * @private
     */
    componentWillMount(){
        if (!this.state.loaded) {
            /**
             * 轮播图
             */
            HomeModle.getInstance().getTopInformList(ApiContant.CATOGOTY_ID)
                .then(data => {
                    this.setState({
                        imageViewsData: JSON.parse(data.DATA)
                    });
                });

            /**
             * 公告
             */
            HomeModle.getInstance().getTopInformList(ApiContant.NOTICE_CATOGOTY_ID)
                .then(data => {
                    this.setState({
                        noticeData: JSON.parse(data.DATA)
                    });
                })
                .finally(() => {
                    if (!this.state.loaded){
                        this.setState({loaded: true});
                    }
                });

            /**
             * 报盘列表
             */
            this._getListData(-1);

            /**
             * 成交列表
             */
            HomeModle.getInstance().getDetailListData()
                .then(data => {
                    this.setState({
                        detailDataSource: JSON.parse(data.DATA).list
                    });
                })
        }
    }

    /**
     * Array.from(JSON.parse(data.DATA),
     (item, index)=> {item.key = index})
     * 报盘列表
     */
    _getListData(id){
        HomeModle.getInstance().getListData(id)
            .then(data => {
                this.setState({
                    dataSource: JSON.parse(data.DATA)
                });
            });
    }

    /**
     * 渲染轮播图UI
     * @returns {Array}
     * @private
     */
    _renderSwipeImage(){
        let imageViews = [];
        if (this.state.loaded){
            Array.from(this.state.imageViewsData).map((ds, index) => {
                imageViews.push(
                    <TouchableHighlight style={{flex: 1}} key={index}
                                onPress = {() => {
                                this.props.navigator.push({component: WebViewPage,
                                                            args: {url: ds.InfoLinkId}})}}>
                        <Image style={{flex: 1}}
                               source={{uri: ApiContant.DOWNLOAD_URL + ds.FileID}}/>
                    </TouchableHighlight>

                )
            });
            return imageViews;
        }

    }

    /**
     * 渲染项目栏UI
     * @private
     */
    _renderProject(){
        let project = [];
        for(let i=0; i<8; i++){
            project.push(
                <View style={styles.imageStyle} key={i}>
                    <Image source={projectImage[i]} style={styles.imageStyleView}/>
                    <Text>{projectText[i]}</Text>
                </View>
            );
        }
        return project;
    }


    /**
     * 渲染 notice UI
     * @private
     */
    _renderNoticeText(){
        let result = [];
        if (this.state.loaded){
            Array.from(this.state.noticeData).map((ds, index) => {
                result.push(
                    <Text style={{flex: 1}}
                           key={index}>
                        {ds.InfoTitle}</Text>

                )
            });
            return result;
        }
    }

    /**
     * 切换列表种类
     * @private
     */
    _changeTradeAll(){
        this.refs.alls.setNativeProps({
            style:styles.tradeTextActive
        });

        this.refs.pp.setNativeProps({
            style:styles.tradeTextInAct
        });

        this.refs.pe.setNativeProps({
            style:styles.tradeTextInAct
        });
        this._getListData(-1);
    }

    _changeTradePP(){
        this.refs.alls.setNativeProps({
            style:styles.tradeTextInAct
        });

        this.refs.pp.setNativeProps({
            style:styles.tradeTextActive
        });

        this.refs.pe.setNativeProps({
            style:styles.tradeTextInAct
        });
        this._getListData(ApiContant.PP_ID);
    }

    _changeTradePE(){
        this.refs.alls.setNativeProps({
            style:styles.tradeTextInAct
        });

        this.refs.pp.setNativeProps({
            style:styles.tradeTextInAct
        });

        this.refs.pe.setNativeProps({
            style:styles.tradeTextActive
        });
        this._getListData(ApiContant.PE_ID);
    }

    /**
     * 更多
     * @returns {XML}
     */
    _changeMore(){

    }

    /**
     * 报盘 item 点击事件
     */
    _onOrderListItemPress(item){
        ToastLog("item")
    }



    render(){

        if (!this.state.loaded){
            return(
                <Loading />
                );
        }else{
            return(
                <View style={styles.container}>
                    <PullView style={{flex: 1}}>
                    <Swiper height={150}
                            paginationStyle={{bottom:10}}
                            autoplay={true}
                            loop={true}>
                        {this._renderSwipeImage()}
                    </Swiper>

                    <View style={styles.imageWrapperStyle}>
                        {this._renderProject()}
                        <View style={{height: 1, width: '100%',backgroundColor:"#EBEBEB"}} />

                        <View style={styles.announceWrapStyle}>
                            <Image style={{width: 60, height: 20, marginRight:10}} source={require('./../image/announce.png')}  resizeMode="stretch"/>
                            <Swiper height={20}
                                    width={260}
                                    horizontal={false}
                                    autoplay={true}
                                    showsPagination={false}>
                                {this._renderNoticeText()}
                            </Swiper>
                        </View>
                    </View>

                    <View>
                        <View style={{height: 5, width: '100%',backgroundColor:"#EBEBEB"}} />

                        <View style={styles.listStyle}>
                            <Image style={{width: 110, height: 40, marginRight: 40}} source={require('./../image/main_trade.png')}  resizeMode="stretch"/>
                            <Text style={styles.tradeTextActive} onPress={ ()=> {this._changeTradeAll()}} ref="alls">全部</Text>
                            <Text style={styles.tradeTextInAct} onPress={ ()=> {this._changeTradePP()}} ref="pp">PP</Text>
                            <Text style={styles.tradeTextInAct} onPress={ ()=> {this._changeTradePE()}} ref="pe">PE</Text>
                            <Text style={{marginLeft: 15}} onPress={()=> {this._changeMore()}}>更多 ></Text>

                            <View style={{height: 1, width: '100%',backgroundColor:"#EBEBEB"}} />
                        </View>
                    </View>

                        <FlatList
                            data={this.state.dataSource}
                            keyExtractor={(item, index) => {return index}}
                            renderItem={({item}) => {
                            return(
                                <TouchableHighlight
                                        underlayColor="rgba(34, 26, 38, 0.1)"
                                        onPress={()=> {this._onOrderListItemPress(item)}}>
                                    <View style={styles.listWrapper}>
                                        <View style={styles.listItemWrapper}><Text >{item.BrandShow}</Text></View>
                                        <View style={styles.listItemWrapper}><Text >{item.DeliveryPlace === undefined ? '-' : item.DeliveryPlace}</Text></View>
                                        <View style={styles.listItemWrapper}><Text style={styles.listItemTextBlue}>{item.ResidualWeight + '吨'}</Text></View>
                                        <View style={styles.listItemWrapper}><Text style={styles.listItemTextRed}>{item.Price + '元/吨'}</Text></View>
                                    </View>
                                </TouchableHighlight>
                                )
                            }}
                        />
                        <View style={{height: 5, width: '100%',backgroundColor:"#EBEBEB"}} />
                        <Image style={{width: 110, height: 40, marginRight: 40}} source={require('./../image/main_detail.png')}  resizeMode="stretch"/>

                        <FlatList
                            data={this.state.detailDataSource}
                            keyExtractor={(item, index) => {return index}}
                            renderItem={({item}) => {
                            return(
                                <View style={styles.listWrapper}>
                                    <View style={styles.listItemWrapper}><Text >{item.BrandShow}</Text></View>
                                    <View style={styles.listItemWrapper}><Text >{item.DeliveryPlace === undefined ? '-' : item.DeliveryPlace}</Text></View>
                                    <View style={styles.listItemWrapper}><Text style={styles.listItemTextRed}>{item.Price + '元/吨'}</Text></View>
                                    <View style={styles.listItemWrapper}><Text style={styles.listItemTextBlue}>{item.FromatCreateTime}</Text></View>
                                </View>
                                )
                            }}
                        />

                    </PullView>
                </View>
            );
        }
    }
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        marginBottom: Utils.pixToDpSize(150),
    },
    imageWrapperStyle:{
        height:200,
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    imageStyle:{
        height: '30%',
        width: '25%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 10
    },
    imageStyleView:{
        height: '75%',
        width: '50%',
    },
    announceWrapStyle:{
        width:'100%',
        height: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft:20,
        paddingRight:10,
        marginTop:10
    },
    listStyle:{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    tradeTextInAct:{
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: 'white',
        color: '#000'
    },
    tradeTextActive:{
        color: 'white',
        backgroundColor: '#EA5251',
        borderRadius: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
    },
    listWrapper:{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: 40,
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