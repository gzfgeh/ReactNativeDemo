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
import Utils from '../common/theme'
import FetchUtil from './../common/FetchUtil'
import RequestToJson from './../common/RequestToJson'
import ApiContant from './../common/ApiContant'
import './../common/ToastLog'
import Spinner from 'react-native-loading-spinner-overlay'


let imageViewsUrl = [
    'http://ac-c6scxa78.clouddn.com/f6b64dc4bf7bee56.jpg',
    'http://ac-c6scxa78.clouddn.com/91ead58b0bb213b6.jpg',
    'http://ac-c6scxa78.clouddn.com/d67316858f6c71f3.jpg',
    'http://ac-c6scxa78.clouddn.com/c81c5b7be1838a1e.jpg',
    'http://ac-c6scxa78.clouddn.com/54fe022399902788.jpg',
];

let imageViews = [];

export default class HomePage extends React.Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            loaded: false
        };
      }

    /**
     * 得到轮播图的数据
     * @private
     */
    _renderSwipeImage(){
        let params = {
            ProductID: 0,
            AppTypeID: 0,
            CatogoryID: 1879,
            Top: 5,
        };

        let requestJson = new RequestToJson().init()
            .setParams(params)
            .setServiceName("Shcem.Inform.ServiceContract.IQueryInfoService")
            .setMethodName( "getTopInformList")
            .build();

        FetchUtil.getInstance().init()
            .setBody(requestJson)
            .dofetch()
            .then((data) => {
                ToastLog(data.DATA + "");

                let list = JSON.parse(data.DATA);
                for(let i=0, length=list.length; i<length; i++){
                    list.map(ds => {
                        imageViews.push(
                            <Image style={{flex: 1}}
                                   source={{uri: ApiContant.DOWNLOAD_URL + ds.FileID}} key={i}/>
                        )
                    })
                }

                if (!this.state.loaded){
                    this.setState({
                        loaded:true
                    });
                }

            })
            .catch((error) => {
                ToastLog(error + "");
            });
        return imageViews;
    }


    // _renderSwipeImage(){
    //     for(let i=0 ; i<5; i++){
    //         imageViews.push(
    //             <Image style={styles.swipeImage} source={{uri: imageViewsUrl[i]}} key={i}/>
    //         )
    //     }
    //
    //     return imageViews;
    // }

    /** <Spinner visible={!this.state.loaded}/> **/
    
    render(){
        return(
        <View style={styles.container}>
            <Swiper height={150}
                    paginationStyle={{bottom:10}}
                    autoplay={true}
                    loop={true}>
                {this._renderSwipeImage()}
            </Swiper>
        </View>
        );

        // if (!this.state.loaded){
        //     return(
        //         <Spinner visible={!this.state.loaded}/>
        //         );
        // }else{
        //     return(
        //         <View style={styles.container}>
        //             <Swiper style={styles.swipeStyle} autoplay={true}>
        //                 {this._renderSwipeImage()}
        //             </Swiper>
        //         </View>
        //     );
        // }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    swipeStyle: {
        height: 200,
    },
    swipeImage:{
        height: 200,
        width: '100%'
    },
    activeDotStyle:{

    }
});