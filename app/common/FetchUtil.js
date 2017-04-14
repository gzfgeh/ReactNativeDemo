/**
 * Created by GUZHENFU on 2017/4/10.
 *
 */

import ApiContant from './../common/ApiContant'
import './../common/ToastLog'

export default class FetchUtil {
    /**
     * 单例模式
     * @returns {FetchUtil}
     */
    static getInstance(){
        if (!FetchUtil.instance){
            FetchUtil.instance = new FetchUtil();
        }
        return FetchUtil.instance;
    }
    init(){
        this.url           = ApiContant.BASE_URL;
        this.method        = 'POST';
        this.headers       = {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'};
        this.body_type     = 'json';
        this.bodys         = {};
        this.credentials   = 'omit';
        this.return_type   = 'json';
        this.overtime      = 20 * 1000;
        this.firstThen	   = undefined;
        return this;
    }
    setUrl(url){
        this.url = url;
        return this;
    }
    setMethod(val){
        this.method = val;
        return this;
    }
    setBodyType(val){
        this.body_type = val;
        return this;
    }
    setReturnType(val){
        this.return_type = val;
        return this;
    }
    setOvertime(val){
        this.overtime = val;
        return this;
    }
    setHeader(name, val=null){
        if(typeof name == 'string'){
            this.headers[name] = val;
        }else if(typeof name == 'object'){
            Object.keys(name).map((index)=>{
                this.headers[index] = name[index];
            });
        }
        return this;
    }
    setBody(name, val=null){
        if(typeof name == 'string'){
            this.bodys[name] = val;
        }else if(typeof name == 'object'){
            Object.keys(name).map((index)=>{
                this.bodys[index] = name[index];
            });
        }else if (typeof name == 'json'){
            this.bodys = val;
        }
        return this;
    }
    setCookieOrigin(){
        this.credentials = 'same-origin';
        return this;
    }
    setCookieCors(){
        this.credentials = 'include';
        return this;
    }
    thenStart(then) {
        this.firstThen = then;
        return this;
    }
    dofetch(){
        let options         = {};
        options.method      = this.method;
        options.credentials = this.credentials;
        options.headers = this.headers;
        if({} != this.bodys && this.method != 'GET'){
            if('form' == this.body_type){
                this.setHeader("Content-Type","application/json");
                let data = '';
                Object.keys(this.bodys).map((index) => {
                    let param = encodeURI(this.bodys[index]);
                    data += `${index}=${param}&`;
                });
                options.body = data;
            }else if('file' == this.body_type){
                let data = new FormData();
                Object.keys(this.bodys).map((index) => {
                    data.append(index, this.bodys[index]);
                });
                options.body = data;
            }else if('json' == this.body_type){
                options.body = JSON.stringify(this.bodys);
            }
        }
        return Promise.race([
            fetch(this.url,options),
            new Promise((resolve, reject) => {
                setTimeout(() => reject(new Error('request timeout')), this.overtime ? this.overtime : 30 * 1000);
            })
        ]).then(
            (response) => {
                if (this.firstThen) {
                    let tempResponse = this.firstThen(response);
                    if (tempResponse) {
                        return tempResponse;
                    }
                }
                return response;
            }
        ).then(
            (response) => {
                if('json' == this.return_type){
                    return response.json();
                }else if('text' == this.return_type){
                    return response.text();
                }else if('blob' == this.return_type){
                    return response.blob();
                }else if('formData' == this.return_type){
                    return response.formData();
                }else if('arrayBuffer' == this.return_type){
                    return response.arrayBuffer();
                }
            }
        );
    }
}