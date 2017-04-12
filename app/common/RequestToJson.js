/**
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
        this.requestObj.json = JSON.stringify(this.obj);
        return this.requestObj;
    }
}