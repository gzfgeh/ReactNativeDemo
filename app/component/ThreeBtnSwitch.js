/**
 * Created by guzhenfu on 17/4/27.
 */
import React , {PropTypes} from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableHighlight} from 'react-native'
import Utils from './../common/theme'

export default class ThreeBtnSwitch extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            titleSelect: 1,
        };
    }

    static propTypes = {
        onBtnClick: PropTypes.func,
    };

    _btnPress(index){
        this.setState({
            titleSelect: index,
        });
        this.props.onBtnClick(index);
    }

    render(){
        return(
            <View style={styles.titleChange}>
                <TouchableHighlight
                    style={this.state.titleSelect == 1 ? styles.titleLeftActiveItem: styles.titleLeftItem}
                    onPress={()=> {this._btnPress(1)}}>
                    <Text
                        style={this.state.titleSelect == 1 ? styles.titleItemActiveText : styles.titleItemText}>
                        聚乙烯PE</Text>
                </TouchableHighlight>

                <TouchableHighlight
                    style={this.state.titleSelect == 2 ? styles.titleCenterActiveItem: styles.titleCenterItem}
                    onPress={()=> this._btnPress(2)}>
                    <Text
                        style={this.state.titleSelect == 2 ? styles.titleItemActiveText : styles.titleItemText}>
                        聚丙烯PP</Text>
                </TouchableHighlight>

                <TouchableHighlight
                    style={this.state.titleSelect == 3 ? styles.titleRightActiveItem: styles.titleRightItem}
                    onPress={()=> {this._btnPress(3)}}>
                    <Text
                        style={this.state.titleSelect == 3 ? styles.titleItemActiveText : styles.titleItemText}>
                        聚氯乙烯PVC</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    titleChange:{
        height: Utils.actionBar.height,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Utils.themeColor
    },
    titleLeftItem:{
        height: '60%',
        width: '25%',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Utils.themeColor,
        borderColor: 'white',
        borderWidth: 1,
    },
    titleLeftActiveItem:{
        height: '60%',
        width: '25%',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderColor: 'white',
        borderWidth: 1,
    },
    titleCenterItem:{
        height: '60%',
        width: '25%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Utils.themeColor,
        borderColor: 'white',
        borderWidth: 1,
    },
    titleCenterActiveItem:{
        height: '60%',
        width: '25%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderColor: 'white',
        borderWidth: 1,
    },
    titleRightItem:{
        height: '60%',
        width: '25%',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Utils.themeColor,
        borderColor: 'white',
        borderWidth: 1,
    },
    titleRightActiveItem:{
        height: '60%',
        width: '25%',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderColor: 'white',
        borderWidth: 1,
    },
    titleItemText:{
        color: 'white'
    },
    titleItemActiveText:{
        color: Utils.themeColor
    }
});