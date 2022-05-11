import React, { FC } from "react";
import fonts from "@constants/fonts";
import { BLACK, PRIMARY } from "@constants/colors";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/AntDesign";
import { RNText } from "../index";

type HeaderProps = {
  onPressRightIcon?: () => void;
  onPressLeftIcon?: () => void;
  rightIconName?: string;
  leftIconName?: string;
  title: string;
  canGoBack?: boolean;
  leftIconNameTitle?: string;
};

export const RNHeader: FC<HeaderProps> = ({
  title,
  rightIconName,
  onPressRightIcon,
  canGoBack,
  leftIconName,
  leftIconNameTitle,
  onPressLeftIcon,
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

      {leftIconName && (
        <TouchableOpacity style={styles.leftBtn} onPress={onPressLeftIcon}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Icon style={styles.iconBtn} name={leftIconName} size={15} />
            {leftIconNameTitle && (
              <RNText text={leftIconNameTitle} style={styles.titleSmall} />
            )}
          </View>
        </TouchableOpacity>
      )}

      {rightIconName && (
        <TouchableOpacity style={styles.rightBtn} onPress={onPressRightIcon}>
          <View>
            <Icon style={styles.iconBtn} name={rightIconName} size={30} />
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
  titleSmall: {
    fontSize: fonts.sizes?.small,
    marginLeft: 5,
    color: "#2596be",
  },
  leftBtn: {
    alignItems: "center",
    justifyContent: "flex-start",
    position: "absolute",
    left: 15,
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
