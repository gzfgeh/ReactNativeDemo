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

    /**
     * 得到报盘数据
     */
    async getListData(id){
        let result;

        
        let params = {
            KeyWords: "",
            LeadsStatusList: [],
            PageIndex: 1,
            PageSize: 5,
            OrderBy: 1,
            SortDirect: 1,
            CategorySpecialIds: [],
            SourcePlaceIds: [],
            DeliveryPlaceIds: [],
            GoodsType: -1,
            SettlementMethod: -1,
            SourcePlaceType: -1,
            DeliveryScopeIds: [],
            ProductID: '',
            CategoryParentID: 0,
            TOP: ''
        };

        if (id !== -1){
            params.CategorySpecialIds[0] = id;
        }


        let requestJson = new RequestToJson().init()
            .setParams(params)
            .setServiceName(ApiContant.ILEADS_SERVICE)
            .setMethodName(ApiContant.GET_LEADS_LIST)
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


    /**
     * 得到成交数据
     */
    async getDetailListData(){
        let result;

        let params = {
            KeyWords: "",
            PageIndex: 1,
            PageSize: 5,
        };


        let requestJson = new RequestToJson().init()
            .setParams(params)
            .setServiceName(ApiContant.IORDER_SERVICE)
            .setMethodName(ApiContant.GET_ORDER_HOME_LIST)
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
