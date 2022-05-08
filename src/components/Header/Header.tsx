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
import { useNavigation } from '@react-navigation/native';

type HeaderProps = {
  testID?: string;
  onPress?: () => void;
  btnStyle?: ViewStyle;
  textStyle?: TextStyle;
};

export const RNHeader: FC<HeaderProps> = ({
  btnStyle,
  textStyle,
  onPress,
  testID,
}): JSX.Element => {
  const {goBack} = useNavigation();
  return (
    <TouchableOpacity
      testID={testID}
      style={[styles.btnDefaultStyles, btnStyle , {backgroundColor: 'red'}]}
      onPress={() => goBack()}
    >
      <Text style={[styles.textDefaultStyles, textStyle]}>{'back'}</Text>
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
