/**
 * Created by guzhenfu on 17/5/2.
 */
import React, {PropTypes} from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    Platform
} from 'react-native';
import Utils from './../common/theme'

export default class CustomTabBar extends React.Component{
    static PropTypes = {
        goToPage: React.PropTypes.func,
        activeTab: React.PropTypes.number,
        tabs: React.PropTypes.array,
        backgroundColor: React.PropTypes.string,
        activeTextColor: React.PropTypes.string,
        inactiveTextColor: React.PropTypes.string,
        scrollOffset: React.PropTypes.number,
        style: View.propTypes.style,
        tabStyle: View.propTypes.style,
        tabsContainerStyle: View.propTypes.style,
        textStyle: Text.propTypes.style,
        renderTab: React.PropTypes.func,
        underlineStyle: View.propTypes.style,
        pullDownOnPress: React.PropTypes.func
    }

    static defaultProps = {
        scrollOffset: 52,
        activeTextColor: 'navy',
        inactiveTextColor: 'black',
        backgroundColor: null,
        style: {},
        tabStyle: {},
        tabsContainerStyle: {},
        underlineStyle: {},
    }

    constructor(props){
        super(props);
        this.state = {
            _containerWidth: Utils.screenWidth,
        }
    }

    render(){
        return(
            <View style={{height: Utils.actionBar.height}}>
                <ScrollView
                    horizontal={true}>
                    <View style={[styles.tabs, {width: this.state._containerWidth},this.props.tabsContainerStyle]}>

                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    tabs: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    tab: {
        height: Utils.actionBar.height,
        alignItems: 'center',
        justifyContent: 'center',
        width: Utils.pixToDpSize(80),
        paddingTop: (Platform.OS === 'ios') ? Utils.pixToDpSize(20) : 0
    },
});