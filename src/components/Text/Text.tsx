import React, { FC } from 'react';
import fonts from '@constants/fonts';
import { StyleSheet, Text, TextStyle } from 'react-native';

type RNTextProps = {
  text?: string;
  testID?: string;
  style?: TextStyle;
};

export const RNText: FC<RNTextProps> = ({
  style,
  text,
  testID,
}): JSX.Element => {
  return (
    <Text testID={testID} style={[styles.defaultNormalStyles, style]}>
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  defaultNormalStyles: {
    ...fonts.types.normalText,
  },
});
