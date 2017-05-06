/**
 * Created by guzhenfu on 17/5/6.
 */

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

import ScrollableMixin from './ScrollableMixin'

export default class GScrollView extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isInit: true,
        }
    }

    /**
     * IMPORTANT: You must return the scroll responder of the underlying
     * scrollable component from getScrollResponder() when using ScrollableMixin.
     */
    getScrollResponder() {
        return this._scrollView.getScrollResponder();
    }

    setNativeProps(props) {
        this._scrollView.setNativeProps(props);
    }

    /**
     * 渲染初始loading页面
     * @returns {XML}
     * @private
     */
    _renderInit(){
        return(
            <View
                style={{flex: 1,justifyContent: 'center',
                    alignItems: 'center', backgroundColor:'white'}}>
                <ActivityIndicator animating size="large" />
            </View>
        );
    }

    /**
     * 下拉头渲染
     * @private
     */
    _renderRefreshHead(){
        return(
            <View
                style={styles.head}>
                <ActivityIndicator animating size="large" />
            </View>
        );
    }

    /**
     * 滚动触发
     * @param e
     * @private
     */
    _onScroll(e){
        let target = e.nativeEvent;
        let y = target.contentOffset.y;

        this.setState({
            headHeight: y,
        })

        if (this.props.onScroll) {
            this.props.onScroll(e);
        }
    }

    /**
     * 内容页面
     * @returns {XML}
     * @private
     */
    _renderContent(){
        return(
            React.cloneElement(
                <ScrollView
                    {...this.props}
                    onScroll={(e)=> this._onScroll(e)}>
                    {this._renderRefreshHead()}
                    {this.props.children}
                </ScrollView>
            ,{
            ref: component => {this._scrollView = component;}
            }));
    }

    render(){
        return (this.state.isInit && this._renderInit()) || this._renderContent()
    }

    /**
     * 在子控件中 停止loading页面
     */
    stopLoading(){
        if (this.state.isInit){
            this.setState({isInit: false,});
        }
    }
}

const styles = StyleSheet.create({
    head: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'white',
        top: -100,
        left: 180,
        height: 100,
    },
});

// Mix in ScrollableMixin's methods as instance methods
Object.assign(GScrollView.prototype, ScrollableMixin);