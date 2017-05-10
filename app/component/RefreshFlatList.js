/**
 * Created by guzhenfu on 17/5/9.
 */

import React, { Component } from 'react';
import { FlatList } from 'react-native';

import Pullable from './Pullable';

export default class RefreshFlatList extends Pullable {

    constructor(props) {
        super(props);
        this.getMetrics = this.getMetrics.bind(this);
        this.scrollToOffset = this.scrollToOffset.bind(this);
        this.scrollToEnd = this.scrollToEnd.bind(this);
    }

    getMetrics(args) {
        this.scroll.getMetrics(args);
    }

    scrollToOffset(...args) {
        this.scroll.scrollToOffset(...args);
    }

    scrollToEnd(args) {
        this.scroll.scrollToEnd(args);
    }

    getScrollable() {
        return (
            <FlatList ref={(c) => {this.scroll = c;}}
                      onScroll={this.onScroll}
                      scrollEnabled={this.state.scrollEnabled}
                      {...this.props} />
        );
    }
}