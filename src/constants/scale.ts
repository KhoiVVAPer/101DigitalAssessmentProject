import {SCREEN_DEVICE_WIDTH, SCREEN_DEVICE_HEIGHT} from './common';

//Guildline sizes are based on standard iPhone 11
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

export const scale = (size: number) =>
  (SCREEN_DEVICE_WIDTH / guidelineBaseWidth) * size;

export const scaleHeight = (size: number) =>
  (SCREEN_DEVICE_HEIGHT / guidelineBaseHeight) * size;
