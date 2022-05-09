import React, { FC } from "react";
import fonts from "@constants/fonts";
import { BLACK } from "@constants/colors";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/AntDesign";
import { RNText } from "../index";

type HeaderProps = {
  onPressRightIcon?: () => void;
  rightIconName?: string;
  title: string;
  canGoBack?: boolean;
};

export const RNHeader: FC<HeaderProps> = ({
  title,
  rightIconName,
  onPressRightIcon,
  canGoBack,
}): JSX.Element => {
  const { goBack } = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <RNText text={title} style={styles.textDefaultStyles} />
      </View>

      {canGoBack && (
        <TouchableOpacity style={styles.leftBtn} onPress={goBack}>
          <View>
            <Icon name="arrowleft" size={30} color={BLACK} />
          </View>
        </TouchableOpacity>
      )}

      {rightIconName && (
        <TouchableOpacity style={styles.rightBtn} onPress={onPressRightIcon}>
          <View>
            <Icon
              style={styles.iconBtn}
              name={rightIconName}
              size={30}
              color={BLACK}
            />
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
    borderBottomColor: "rgba(0, 0, 0, 0.1)",
    borderBottomWidth: 1,
  },
  textDefaultStyles: {
    ...fonts.types.normalText,
    color: BLACK,
  },
  leftBtn: {
    alignItems: "center",
    position: "absolute",
    width: 50,
  },
  rightBtn: {
    alignItems: "center",
    position: "absolute",
    right: 10,
    width: 50,
  },
  titleContainer: { flex: 1, alignItems: "center" },
  iconBtn: {
    color: "#2596be",
  },
});
