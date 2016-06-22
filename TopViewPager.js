/**
 * Created by guzhenfu on 2016/6/22.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Image,
    Dimensions,
} from 'react-native';

import ViewPager from 'react-native-viewpager';

var IMGS = [
    'https://images.unsplash.com/photo-1441742917377-57f78ee0e582?h=1024',
    'https://images.unsplash.com/photo-1441716844725-09cedc13a4e7?h=1024',
    'https://images.unsplash.com/photo-1441448770220-76743f9e6af6?h=1024',
    'https://images.unsplash.com/photo-1441260038675-7329ab4cc264?h=1024',
    'https://images.unsplash.com/photo-1441126270775-739547c8680c?h=1024',
    'https://images.unsplash.com/photo-1440964829947-ca3277bd37f8?h=1024',
    'https://images.unsplash.com/photo-1440847899694-90043f91c7f9?h=1024'
];

var WINDOW_WIDTH = Dimensions.get('window').width;

class TopViewPager extends Component{
        // 构造
    constructor(props) {
        super(props);
        var dataSource = new ViewPager.DataSource({
            pageHasChanged: (p1, p2) => p1 !== p2,
        });
        // 初始状态
        this.state = {
            dataSource: dataSource.cloneWithPages(IMGS),
        };
    }
    
    render() {
        return (
            <ViewPager
                style={styles.container}
                dataSource={this.state.dataSource}
                renderPage={this._renderPage}
                isLoop={true}
                autoPlay={true}
            />
        );
    }
    
    _renderPage(data: Object, pageID: number){
        return(
            <Image
                source={{uri: data}}
                style={styles.container} />
        );
    }
    
};

var styles = StyleSheet.create({
    container:{
        width: WINDOW_WIDTH,
        height: 400,
    }
});

module.exports = TopViewPager;