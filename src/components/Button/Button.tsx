import React, { FC, ReactChild, ReactChildren } from "react";
import { scale } from "@constants/scale";
import { PRIMARY } from "@constants/colors";
import { StyleSheet, ViewStyle } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

type ButtonProps = {
  testID?: string;
  onPress?: () => void;
  btnStyle?: ViewStyle;
  children: ReactChild | ReactChildren;
};

export const RNButton: FC<ButtonProps> = ({
  btnStyle,
  onPress,
  testID,
  children,
}): JSX.Element => {
  return (
    <TouchableOpacity
      testID={testID}
      style={[styles.btnDefaultStyles, btnStyle]}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnDefaultStyles: {
    backgroundColor: PRIMARY,
    paddingVertical: scale(10),
    paddingHorizontal: scale(15),
    minWidth: scale(200),
    alignItems: "center",
    marginTop: scale(15),
    borderRadius: scale(5),
  },
});
