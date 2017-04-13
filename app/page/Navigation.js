/**
 * Created by guzhenfu on 17/4/9.
 */

import React from 'react'
import {
    Navigator,
    StyleSheet,
    Image,
    View,
    ToastAndroid} from 'react-native'
import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/Ionicons';
import Utils from '../common/theme'
import HomePage from './HomePage'
import MallPage from './MallPage'
import InfoPage from './InfoPage'
import MyPage from './MyPage'

const tabNames = ['home', 'mall', 'order','info', 'my'];

export default class Navigation extends React.Component{
    static defaultProps = {
        selectedColor: 'rgb(22,131,251)',
        normalColor: '#a9a9a9'
    };

    constructor(props){
        super(props);
        this.state = {
            selectedTab: tabNames[0],
            tabName: ['首页','商城','交易','资讯','我']
        }
    }

    componentWillMount() {
        const {selectedColor, normalColor} = this.props;

        Icon.getImageSource('md-home', 50, normalColor).then((source) => this.setState({homeNormal: source}));
        Icon.getImageSource('md-home', 50, selectedColor).then((source) => this.setState({homeSelected: source}));
        
        Icon.getImageSource('md-home', 50, normalColor).then((source) => this.setState({mallNormal: source}));
        Icon.getImageSource('md-home', 50, selectedColor).then((source) => this.setState({mallSelected: source}));

        Icon.getImageSource('md-compass', 50, normalColor).then((source) => this.setState({orderNormal: source}));
        Icon.getImageSource('md-compass', 50, selectedColor).then((source) => this.setState({orderSelected: source}));
        
        Icon.getImageSource('md-person', 50, normalColor).then((source) => this.setState({infoNormal: source}));
        Icon.getImageSource('md-person', 50, selectedColor).then((source) => this.setState({infoSelected: source}));
        
        Icon.getImageSource('md-compass', 50, normalColor).then((source) => this.setState({myNormal: source}));
        Icon.getImageSource('md-compass', 50, selectedColor).then((source) => this.setState({mySelected: source}));
    }

    render(){
        const {selectedColor} = this.props;

        return(
            <TabNavigator
                hidesTabTouch={true}
                tabBarStyle={styles.tabBar}
                sceneStyle={{ paddingBottom: styles.tabBar.height }}>
                <TabNavigator.Item
                    tabStyle={styles.tabStyle}
                    title={this.state.tabName[0]}
                    selected={this.state.selectedTab === tabNames[0]}
                    selectedTitleStyle={{color: selectedColor}}
                    renderIcon={() => <Image style={styles.tab} source={this.state.homeNormal} />}
                    renderSelectedIcon={() => <Image style={styles.tab} source={this.state.homeSelected} />}
                    onPress={() => this.setState({ selectedTab: tabNames[0] })}>
                    {<HomePage navigator={this.props.navigator}/>}
                </TabNavigator.Item>
                <TabNavigator.Item
                    tabStyle={styles.tabStyle}
                    title={this.state.tabName[1]}
                    selected={this.state.selectedTab === tabNames[1]}
                    selectedTitleStyle={{color: selectedColor}}
                    renderIcon={() => <Image style={styles.tab} source={this.state.mallNormal} />}
                    renderSelectedIcon={() => <Image style={styles.tab} source={this.state.mallSelected} />}
                    onPress={() => this.setState({ selectedTab: tabNames[1] })}>
                    {<MallPage />}
                </TabNavigator.Item>
                <TabNavigator.Item
                    tabStyle={styles.tabStyle}
                    title={this.state.tabName[2]}
                    selected={this.state.selectedTab === tabNames[2]}
                    selectedTitleStyle={{color: selectedColor}}
                    renderIcon={() => <Image style={styles.tab} source={this.state.orderNormal} />}
                    renderSelectedIcon={() => <Image style={styles.tab} source={this.state.orderSelected} />}
                    onPress={() => this.setState({ selectedTab: tabNames[2] })}>
                    {<InfoPage />}
                </TabNavigator.Item>
                <TabNavigator.Item
                    tabStyle={styles.tabStyle}
                    title={this.state.tabName[3]}
                    selected={this.state.selectedTab === tabNames[3]}
                    selectedTitleStyle={{color: selectedColor}}
                    renderIcon={() => <Image style={styles.tab} source={this.state.infoNormal} />}
                    renderSelectedIcon={() => <Image style={styles.tab} source={this.state.infoSelected} />}
                    onPress={() => this.setState({ selectedTab: tabNames[3] })}>
                    {<MyPage />}
                </TabNavigator.Item>
                <TabNavigator.Item
                    tabStyle={styles.tabStyle}
                    title={this.state.tabName[4]}
                    selected={this.state.selectedTab === tabNames[4]}
                    selectedTitleStyle={{color: selectedColor}}
                    renderIcon={() => <Image style={styles.tab} source={this.state.myNormal} />}
                    renderSelectedIcon={() => <Image style={styles.tab} source={this.state.mySelected} />}
                    onPress={() => this.setState({ selectedTab: tabNames[4] })}>
                    {<MyPage navigator={this.props.navigator}/>}
                </TabNavigator.Item>
            </TabNavigator>
        );
    }
}

const styles = StyleSheet.create({
    tabStyle:{
        padding: Utils.pixToDpSize(5)
    },
    tabBar:{
        height: Utils.pixToDpSize(150),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    tab:{
        width: Utils.pixToDpSize(50),
        height: Utils.pixToDpSize(50)
    }
});