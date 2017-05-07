/**
 * Created by guzhenfu on 17/5/7.
 */

import React, { Component } from 'react';
import {
    ScrollView,
} from 'react-native';

import Pullable from './Pullable';

export default class PullView extends Pullable {

    getScrollable(refreshControl) {
        return (
            <ScrollView
                        refreshControl={refreshControl}
                        scrollEnabled={this.state.scrollEnabled}
                        onScroll={this.onScroll}>
                {this.props.children}
            </ScrollView>
        );
    }

}
