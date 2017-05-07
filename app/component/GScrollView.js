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
    ScrollView,
    PanResponder,
    Animated} from 'react-native'

import ScrollableMixin from './ScrollableMixin'

export default class GScrollView extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isInit: true,
            pullPan: new Animated.ValueXY(this.defaultXY),
            show: false,
        }

        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: this.onShouldSetPanResponder.bind(this),
            onMoveShouldSetPanResponder: this.onShouldSetPanResponder.bind(this),
            onPanResponderGrant: () => {},
            onPanResponderMove: this.onPanResponderMove.bind(this),
            onPanResponderRelease: this.onPanResponderRelease.bind(this),
            onPanResponderTerminate: this.onPanResponderRelease.bind(this),
        });
    }

    onShouldSetPanResponder(e, gesture) {
        return true;
    }

    onPanResponderMove(e, gesture) {
        this.gesturePosition = {x: this.defaultXY.x, y: gesture.dy};
        this.state.pullPan.setValue({x: this.defaultXY.x, y: this.lastY + gesture.dy / 2});
    }

    onPanResponderRelease(e, gesture) {
        this.setState({
            show: true,
        })
        ToastLog("---")
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
                style={this.state.show ? styles.headShow : styles.headHide}>
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

    _onLayout(e){
        if (this.state.width != e.nativeEvent.layout.width
            || this.state.height != e.nativeEvent.layout.height){
            this._scrollView.setNativeProps({
                style: {
                    height: e.nativeEvent.layout.height,
                    width: e.nativeEvent.layout.width,
                }
            })
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
                <Animated.View style={[this.state.pullPan.getLayout()]}>
                <ScrollView
                    {...this.props}
                    scrollEnabled={true}
                    onScroll={(e)=> this._onScroll(e)}
                    onLayout={(e) => this._onLayout(e)}
                    style={{height: this.state.height, width: this.state.width}}>
                    {this._renderRefreshHead()}
                    {this.props.children}
                </ScrollView>
                </Animated.View>
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
    headHide: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'white',
        top: -100,
        left: 180,
        height: 100,
    },
    headShow:{
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'white',
        top: 0,
        left: 180,
        height: 100,
    }
});

// Mix in ScrollableMixin's methods as instance methods
Object.assign(GScrollView.prototype, ScrollableMixin);