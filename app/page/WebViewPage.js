/**
 *
 * Description:
 *
 * Created by GUZHENFU on 2017/4/17.
 */
import React from 'react'
import {
    StyleSheet,
    View,
    WebView,
    ActivityIndicator,
    ToastAndroid} from 'react-native'
import BasePage from './BasePage'
import NavigationBar from './../component/SimpleNavigationBar'
import Utils from './../common/theme'

 export default class WebViewPage extends BasePage{

     _showTips(msg){
         ToastAndroid.show(msg, ToastAndroid.SHORT);
     }

     _renderLoading(){
         return(
             <View style={{justifyContent: 'center', paddingTop: Utils.pixToDpSize(40)}}>
                 <ActivityIndicator color='rgb(22,131,251)' size="large"/>
             </View>
         );
     }


     render(){
         return(
             <View style={styles.webViewStyle}>
                 <NavigationBar title="资讯详情" backOnPress={this._handleBack.bind(this)}/>
                 <WebView style={styles.webViewStyle}
                     source={{uri:this.props.url}}
                     javaScriptEnabled={true}
                     renderLoading={this._renderLoading.bind(this)}
                     startInLoadingState={true}
                     onError={this._showTips.bind(this, 'error')}/>


             </View>
         );
     }
}

const styles = StyleSheet.create({
    webViewStyle: {
        flex: 1,
        backgroundColor: 'white',
    },
});