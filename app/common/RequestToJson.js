/**
 * {
 *  "json":
 *      {
 *          "MethodName":"getTopInformList",
 *          "ServiceName":"Shcem.Trade.ServiceContract.IQueryInfoService",
 *          "Params":"{\"ProductID\":0,\"AppTypeID\":0,\"CatogoryID\":1879,\"Top\":5}",
 *          "Userid":"usercode",
 *          "Version":"Vlatest"
 *      }
 *  }
 *
 *
 *
 * Created by GUZHENFU on 2017/4/10.
 */

export default class RequestToJson {
    
    obj = {
        Params: '',
        MethodName: '',
        ServiceName: '',
        Userid: 'usercode',
        Version: 'Vlatest'
    }
    requestObj = {
        json: ''
    }
    
    init(){
        this.params = '';
        this.methodName = '';
        this.serviceName = '';
        this.Userid = 'usercode';
        return this;
    }
    setParams(params){
        this.params = JSON.stringify(params);
        return this;
    }
    setMethodName(name){
        this.methodName = name;
        return this;
    }
    setServiceName(name){
        this.serviceName = name;
        return this;
    }

    setUserId(id){
        this.Userid = id;
        return this;
    }
    build(){
        this.obj.Params = this.params;
        this.obj.MethodName = this.methodName;
        this.obj.ServiceName = this.serviceName;
        this.obj.Userid = this.Userid;
        this.requestObj.json = this.obj;
        return this.requestObj;
    }
}