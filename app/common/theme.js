/**
 * Created by guzhenfu on 17/4/9.
 */

import React from 'react'
import {PixelRatio, Dimensions} from 'react-native'

var screenWidth = Dimensions.get('window').width;
var screenHeight = Dimensions.get('window').height;
var fontScale = PixelRatio.getFontScale();
var pixelRatio = PixelRatio.get();
/**
 * 设计图 1080*1920 宽高
 * @type {number}
 */
const w2 = 1080;
const h2 = 1920;
/**
 * 设置text为sp
 * @param uiPxSize  sp
 * @returns {Number} dp
 */
function pixToSp(uiPxSize) {
    var scaleWidth = screenWidth / w2;
    var scaleHeight = screenHeight / h2;
    var scale = Math.min(scaleWidth, scaleHeight);
    uiPxSize = Math.round((uiPxSize * scale + 0.5) * pixelRatio / fontScale);
    return uiPxSize;
}
/**
 * 屏幕适配,缩放size
 * @param uiPxSize
 * @returns {Number}
 * @constructor
 */
function pixToDpSize(uiPxSize) {
    var scaleWidth = screenWidth / w2;
    var scaleHeight = screenHeight / h2;
    var scale = Math.min(scaleWidth, scaleHeight);
    uiPxSize = Math.round((uiPxSize * scale + 0.5));
    return uiPxSize;
}

module.exports = {
    screenWidth,
    screenHeight,
    pixToSp,
    pixToDpSize,
};