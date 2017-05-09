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
import Utils from './../common/theme'



export default class OrderPage extends React.Component{
    constructor(props){
        super(props);

    }

    onPullRelease(resolve) {
        //do something
        setTimeout(() => {
            resolve();
        }, 3000);
    }


    _now(){
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

    render(){
        return this._now();
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