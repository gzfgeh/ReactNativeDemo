/**
 * Created by guzhenfu on 17/4/22.
 */
import React, { Component } from 'react';
import {
    View,
    ActivityIndicator,
    Modal,
} from 'react-native';

import styles from './styles';

export default class Loading extends Component {
    render() {
        return(
            <Modal
                transparent = {true}
                visible={true}
                onRequestClose={()=>{}}>
                <View style={styles.loadingBox}>
                    <ActivityIndicator
                        size="large"
                        color="red"/>
                </View>
            </Modal>
        );
    }

}