import { PRIMARY } from '@constants/colors';
import { scale } from '@constants/scale';
import React, { FC } from 'react';
import { StyleSheet, TextInput, TextStyle } from 'react-native';

interface TextInputProps {
  value?: string;
  testID?: string;
  style?: TextStyle;
  placeholder?: string;
  onChangeText?: (txt: string) => void;
}

export const RNTextInput: FC<TextInputProps> = ({
  style,
  testID,
  value,
  onChangeText,
  placeholder = 'enter input here',
}): JSX.Element => {
  return (
    <TextInput
      testID={testID}
      style={[styles.defaultTextInputStyles, style]}
      placeholder={placeholder}
      value={value}
      onChangeText={(txt) => onChangeText && onChangeText(txt)}
    />
  );
};

const styles = StyleSheet.create({
  defaultTextInputStyles: {
    color: PRIMARY,
    minWidth: scale(200),
    borderRadius: scale(5),
    borderWidth: scale(1),
    padding: scale(10),
    marginVertical: scale(10),
  },
});
