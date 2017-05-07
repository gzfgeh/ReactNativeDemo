/**
 * Created by guzhenfu on 17/5/6.
 */

import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    TouchableHighlight,
    ActivityIndicator,
    ScrollView} from 'react-native'

import PullView from './../component/PullView'
import GScrollView from './../component/GScrollView'
import PullRefreshScrollView from './../component/PullRefreshScrollView'
import Utils from './../common/theme'



export default class OrderPage extends React.Component{
    constructor(props){
        super(props);
    }

    onRefresh(){
        var self = this;
        setTimeout(function(){
            self.refs.PullRefresh.onRefreshEnd();
        },2000);
    }

    onPullRelease(resolve) {
        //do something
        setTimeout(() => {
            resolve();
        }, 3000);
    }

    _older(){
        return(
            <GScrollView
                style={styles.container}
                ref={component => this._scrollView = component}>
                <Text style={styles.content}>交易</Text>
                <Text style={styles.content}>交易</Text>
                <Text style={styles.content}>交易</Text>
                <Text style={styles.content}>交易</Text>
                <Text style={styles.content}>交易</Text>
            </GScrollView>
        );
    }

    _test(){
        return(
            <PullRefreshScrollView ref="PullRefresh" onRefresh={()=>this.onRefresh()}>
                <View style={styles.scrollItem}><Text>Scroll1</Text></View>
                <View style={styles.scrollItem}><Text>Scroll2</Text></View>
                <View style={styles.scrollItem}><Text>Scroll3</Text></View>
                <View style={styles.scrollItem}><Text>Scroll4</Text></View>
                <View style={styles.scrollItem}><Text>Scroll5</Text></View>
                <View style={styles.scrollItem}><Text>Scroll6</Text></View>
                <View style={styles.scrollItem}><Text>Scroll7</Text></View>
                <View style={styles.scrollItem}><Text>Scroll8</Text></View>
                <View style={styles.scrollItem}><Text>Scroll9</Text></View>
            </PullRefreshScrollView>
        );
    }

    render(){
        return(
            <View style={[styles.container]}>
                <PullView style={{width: Utils.screenWidth}} onPullRelease={this.onPullRelease}>
                    <View style={{backgroundColor: '#eeeeee'}}>
                        <Text style={styles.scrollItem}>1</Text>
                        <Text style={styles.scrollItem}>2</Text>
                        <Text style={styles.scrollItem}>3</Text>
                        <Text style={styles.scrollItem}>4</Text>
                        <Text style={styles.scrollItem}>5</Text>
                        <Text style={styles.scrollItem}>6</Text>
                        <Text style={styles.scrollItem}>7</Text>
                        <Text style={styles.scrollItem}>8</Text>
                        <Text style={styles.scrollItem}>9</Text>
                    </View>
                </PullView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    content:{
        flex: 1,
        height:500,
        borderBottomColor: "red",
        borderBottomWidth: 1,
    },
    scrollItem: {
        flex:1,
        height:80,
        marginBottom:10,
        backgroundColor: '#ccc',
        alignItems:'center',
        justifyContent:'center'
    }
});