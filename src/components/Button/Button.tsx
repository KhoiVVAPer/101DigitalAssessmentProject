import React, { FC } from 'react';
import fonts from '@constants/fonts';
import { scale } from '@constants/scale';
import { PRIMARY, WHITE } from '@constants/colors';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  ViewStyle,
  TextStyle,
} from 'react-native';

type ButtonProps = {
  text?: string;
  testID?: string;
  onPress?: () => void;
  btnStyle?: ViewStyle;
  textStyle?: TextStyle;
};

export const RNButton: FC<ButtonProps> = ({
  btnStyle,
  textStyle,
  onPress,
  text,
  testID,
}): JSX.Element => {
  return (
    <TouchableOpacity
      testID={testID}
      style={[styles.btnDefaultStyles, btnStyle]}
      onPress={onPress}
    >
      <Text style={[styles.textDefaultStyles, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textDefaultStyles: {
    ...fonts.types.normalText,
    color: WHITE,
  },
  btnDefaultStyles: {
    backgroundColor: PRIMARY,
    paddingVertical: scale(10),
    paddingHorizontal: scale(15),
    minWidth: scale(200),
    alignItems: 'center',
    marginTop: scale(15),
  },
});
