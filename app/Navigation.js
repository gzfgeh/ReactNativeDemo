/**
 * Created by guzhenfu on 17/4/9.
 */

import React from 'react'
import {Navigator} from 'react-native'

import Home from './Home'

export default class Navigation extends React.Component{
    render(){
        return(
            <Navigator
            initialRoute={{name: "", index: 0}}
            renderScene={(router, navigator)  => {
                <Home/>
            }}/>
        );
    }
}