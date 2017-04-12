/**
 *
 * Description:
 *
 * Created by GUZHENFU on 2017/4/12.
 */
import {ToastAndroid} from 'react-native'

global.ToastLog = function(msg){
    ToastAndroid.show(msg, ToastAndroid.SHORT);
}