/**
 * Created by guzhenfu on 17/5/3.
 */
const React = require('react');
const ReactNative = require('react-native');
const {
    TouchableNativeFeedback,
    TouchableOpacity,
    Platform
} = ReactNative;

const NativeButton = (props) => {
    if (Platform.OS === 'android'){
        return (<TouchableNativeFeedback
            delayPressIn={0}
            background={TouchableNativeFeedback.SelectableBackground()} // eslint-disable-line new-cap
            {...props}
        >
            {props.children}
        </TouchableNativeFeedback>);
    }else{
        return (<TouchableOpacity {...props}>
            {props.children}
        </TouchableOpacity>);
    }

};

module.exports = NativeButton;
