import {Dimensions, Platform} from 'react-native';

export const SCREEN_DEVICE_WIDTH = Dimensions.get('screen').width;
export const SCREEN_DEVICE_HEIGHT = Dimensions.get('screen').height;
export const IS_IOS = Platform.OS === 'ios';
export const LIMIT_RECORD_LOAD_LIST_DATA = 20;
export const ICON_VIEW_WIDTH = 50;
export const ICON_SIZE = 24;
export const ICON_SIZE_LARGE = 40;
export const ANIMATION_DURATION = 200;
