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
import Utils from './../utils/theme'
import FetchUtil from './../common/FetchUtil'
import RequestToJson from './../common/RequestToJson'
import ApiContant from './../common/ApiContant'
import './../common/ToastLog'

export default class HomePage extends React.Component{

    _renderSwipeImage(){
        let imageViews = [];

        let params = {
            ProductID: 0,
            AppTypeID: 0,
            CatogoryID: ApiContant.CATOGOTY_ID,
            Top: ApiContant.TOP_NUM,
        }
        let requestJson = new RequestToJson().init()
            .setParams(params)
            .setServiceName(ApiContant.IQUERY_INFO_SERVICE)
            .setMethodName(ApiContant.GET_TOP_INFORM_LIST)
            .build();

        FetchUtil.getInstance().init()
            .setBody(requestJson)
            .dofetch()
            .then((data) => {
                ToastLog(JSON.stringify(data.CODE));

                Array.from(data.DATA).map(ds => {
                    imageViews.push(
                        <Image style={{flex: 1}}
                            source={{uri: ApiContant.DOWNLOAD_URL + ds.FileID}}/>
                    )
                })
            })
            .catch((error) => {
                ToastLog(error+"");
            });
        return imageViews;
    }
    
    render(){
        return(
          <View style={styles.container}>
              <Swiper style={styles.swipeStyle} autoplay={true}>
                  {this._renderSwipeImage()}
              </Swiper>
              <Text>首页</Text>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    swipeStyle: {
        height: Utils.pixToDpSize(200),
    }
});