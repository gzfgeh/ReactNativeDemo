/**
 * Created by guzhenfu on 17/5/7.
 */

import React, { Component } from 'react';
import {
    ScrollView,
} from 'react-native';

import Pullable from './Pullable';

export default class PullView extends Pullable {

    constructor(props) {
        super(props);
        this.scrollTo = this.scrollTo.bind(this);
        this.scrollToEnd = this.scrollToEnd.bind(this);
    }

    scrollTo(...args) {
        this.scroll.scrollTo(...args);
    }

    scrollToEnd(args) {
        this.scroll.scrollTo(args);
    }

    getScrollable(refreshControl) {
        return (
            <ScrollView ref={(c) => {this.scroll = c;}}
                        refreshControl={refreshControl}
                        scrollEnabled={this.state.scrollEnabled}
                        onScroll={this.onScroll}>
                {this.props.children}
            </ScrollView>
        );
    }

}
