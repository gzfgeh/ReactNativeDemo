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

import GScrollView from './../component/GScrollView'
import Utils from './../common/theme'


export default class OrderPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        }

        setTimeout(() => {
            this._scrollView.stopLoading();
        }, 3000);
    }

    render(){
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
    }
});