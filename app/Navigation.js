/**
 * Created by guzhenfu on 17/4/9.
 */

import React from 'react'
import {Navigator} from 'react-native'
import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/Ionicons';
import Utils from './utils/theme'
import Home from './Home'

export default class Navigation extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            selectedTab: 'home',
            tabName: ['首页','发现','消息','我']
        }
    }

    render(){
        return(
            <TabNavigator
                hidesTabTouch={true}
                tabBarStyle={styles.tabbar}
                sceneStyle={{ paddingBottom: styles.tabbar.height }}>
                <TabNavigator.Item
                    tabStyle={styles.tabStyle}
                    title={this.state.tabName[0]}
                    selected={this.state.selectedTab === 'home'}
                    selectedTitleStyle={{color: selectedColor}}
                    renderIcon={() => <Image style={styles.tab} source={this.state.homeNormal} />}
                    renderSelectedIcon={() => <Image style={styles.tab} source={this.state.homeSelected} />}
                    onPress={() => this.setState({ selectedTab: 'home' })}>
                    {<HomeFragment navigator={this.props.navigator}/>}
                </TabNavigator.Item>
                <TabNavigator.Item
                    tabStyle={styles.tabStyle}
                    title={this.state.tabName[1]}
                    selected={this.state.selectedTab === 'compass'}
                    selectedTitleStyle={{color: selectedColor}}
                    renderIcon={() => <Image style={styles.tab} source={this.state.compassNormal} />}
                    renderSelectedIcon={() => <Image style={styles.tab} source={this.state.compassSelected} />}
                    onPress={() => this.setState({ selectedTab: 'compass' })}>
                    {<CompassFragment />}
                </TabNavigator.Item>
                <TabNavigator.Item
                    tabStyle={styles.tabStyle}
                    title={this.state.tabName[2]}
                    selected={this.state.selectedTab === 'notification'}
                    selectedTitleStyle={{color: selectedColor}}
                    renderIcon={() => <Image style={styles.tab} source={this.state.notificationNormal} />}
                    renderSelectedIcon={() => <Image style={styles.tab} source={this.state.notificationSelected} />}
                    onPress={() => this.setState({ selectedTab: 'notification' })}>
                    {<NotifyFragment navigator={this.props.navigator}/>}
                </TabNavigator.Item>
                <TabNavigator.Item
                    tabStyle={styles.tabStyle}
                    title={this.state.tabName[3]}
                    selected={this.state.selectedTab === 'me'}
                    selectedTitleStyle={{color: selectedColor}}
                    renderIcon={() => <Image style={styles.tab} source={this.state.meNormal} />}
                    renderSelectedIcon={() => <Image style={styles.tab} source={this.state.meSelected} />}
                    onPress={() => this.setState({ selectedTab: 'me' })}>
                    {<MeFragment navigator={this.props.navigator}/>}
                </TabNavigator.Item>
            </TabNavigator>
        );
    }
}

var styles = StyleSheet.create({
    tabStyle:{
        padding: Utils.pixToDp(8)
    }
});