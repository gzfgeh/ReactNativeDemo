/**
 * Created by guzhenfu on 17/4/9.
 */

import React from 'react'
import {
    StyleSheet,
    View,
    Text} from 'react-native'

import {PullView} from 'react-native-pull'
import Utils from './../common/theme'

export default class MallPage extends React.Component{

    _onPullRelease(resolve){
        setTimeout(() => {

            resolve();
        }, 10000);
    }

    render(){
        return(
          <View style={styles.container}>
              <PullView
                  style={{flex: 1}}
                  onPullRelease={this._onPullRelease}>
                <Text>商城</Text>
              </PullView>
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
});