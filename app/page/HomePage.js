/**
 * Created by guzhenfu on 17/4/9.
 */

import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image} from 'react-native'

import Swiper from 'react-native-swiper'
import ApiContant from './../common/ApiContant'
import './../common/ToastLog'
import Spinner from 'react-native-loading-spinner-overlay'
import HomeModle from './../modle/HomeModle'


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
            imageViewsData: []
        };
      }

    /**
     * 得到轮播图的数据
     * @private
     */
    componentWillMount(){
        if (!this.state.loaded) {
            HomeModle.getInstance().getTopInformList()
                .then(data => {
                    this.setState({
                        imageViewsData: JSON.parse(data.DATA)
                    });
                })
                .finally(() => {
                    this.setState({
                        loaded: true
                    });
                });
        }
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
                    <Image style={{flex: 1}}
                           source={{uri: ApiContant.DOWNLOAD_URL + ds.FileID}} key={index}/>
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
    
    render(){

        if (!this.state.loaded){
            return(
                <Spinner visible={true}
                        cancelable={true}
                        color='blue'/>
                );
        }else{
            return(
                <View style={styles.container}>
                    <Swiper height={150}
                            paginationStyle={{bottom:10}}
                            autoplay={true}
                            loop={true}>
                        {this._renderSwipeImage()}
                    </Swiper>

                    <View style={styles.imageWrapperStyle}>
                        {this._renderProject()}
                        <View style={{height: 2, width: '100%',backgroundColor:"#EBEBEB"}} />

                        <View style={styles.announceWrapStyle}>
                            <Image style={{width: 60, height: 20}} source={require('./../image/announce.png')}  resizeMode="stretch"/>
                            <Swiper height={120}
                                    autoplay={true}
                                    autoplayTimeout={4}
                                    loop={true}
                                    horizontal={false}>
                                <Text>my -------</Text>
                                <Text>my -fwoefjajf-</Text>
                            </Swiper>
                            <Image style={{width: 15, height: 15}} source={require('./../image/turn_right.png')}  resizeMode="stretch"/>
                        </View>

                        <View style={{height: 5, width: '100%',backgroundColor:"#EBEBEB"}} />
                    </View>



                </View>
            );
        }


    }
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
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
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft:20,
        paddingRight:10,
        paddingTop:15,
        paddingBottom:15,
    }
});