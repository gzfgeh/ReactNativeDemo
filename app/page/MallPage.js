/**
 * Created by guzhenfu on 17/4/9.
 */

import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    TouchableHighlight} from 'react-native'

import {PullView} from 'react-native-pull'
import Utils from './../common/theme'

export default class MallPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: [{key: 1},{key:2},{key:3},{key:4},{key:5},{key:6},{key:7},{key:8},{key:9},{key:10}]
        }
    }
    _onPullRelease(resolve){
        setTimeout(() => {

            resolve();
        }, 10000);
    }

    _onItemPress(item){

    }

    render(){
        return(
          <View style={styles.container}>
              <FlatList
                data={this.state.data}
                keyExtractor={(item, index) => {return index}}
                renderItem={(item) => {
                    return(
                        <TouchableHighlight
                            underlayColor={Utils.underClickColor}
                            onPress={()=> {this._onItemPress(item)}}>
                            <View style={styles.listWrapper}>
                                <View style={styles.listItemWrapper}><Text >{111}</Text></View>
                                <View style={styles.listItemWrapper}><Text >{111+1}</Text></View>
                                <View style={styles.listItemWrapper}><Text style={styles.listItemTextBlue}>{1111+2}</Text></View>
                                <View style={styles.listItemWrapper}><Text style={styles.listItemTextRed}>{1111+3}</Text></View>
                            </View>
                        </TouchableHighlight>
                    )
                }}/>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        marginBottom: Utils.pixToDpSize(150),
    },
    listWrapper:{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: Utils.dividerBgColor,
    },
    listItemWrapper:{
        width: '25%',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    listItemTextBlue:{
        color: '#45a162',
    },
    listItemTextRed:{
        color: '#c84a4a',
    }
});