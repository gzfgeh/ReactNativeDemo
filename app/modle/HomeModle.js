/**
 * Created by guzhenfu on 17/4/15.
 */

import {ToastAndroid} from 'react-native'
import FetchUtil from './../common/FetchUtil'
import RequestToJson from './../common/RequestToJson'
import ApiContant from './../common/ApiContant'
import './../common/ToastLog'

export default class HomeModle {

    static getInstance(){
        if (!HomeModle.instance){
            HomeModle.instance = new HomeModle();
        }
        return HomeModle.instance;
    }

    /**
     * 得到无限轮播图的 数据
     */
    async getTopInformList(id){
        let result;

        let params = {
            ProductID: 0,
            AppTypeID: 0,
            CatogoryID: id,
            Top: ApiContant.TOP_NUM,
        };


        let requestJson = new RequestToJson().init()
            .setParams(params)
            .setServiceName(ApiContant.IQUERY_INFO_SERVICE)
            .setMethodName(ApiContant.GET_TOP_INFORM_LIST)
            .build();

        try{
            result = await FetchUtil.getInstance().init()
                .setBody(requestJson)
                .dofetch();
        }catch (err){
            ToastAndroid.show(JSON.parse(err).DATA, ToastAndroid.SHORT);
        }
        return result;
    }



}
