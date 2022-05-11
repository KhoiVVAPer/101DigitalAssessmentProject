import React, { useState } from "react";
import { TextInput, StyleSheet, View } from "react-native";
import { BLACK, GRAY_LIGHT, PRIMARY, WARNING } from "@constants/colors";
import Icon from "react-native-vector-icons/AntDesign";
import { RNText } from "..";
import { TouchableOpacity } from "react-native-gesture-handler";

type InputFieldProps = {
  placeholder?: string;
  value?: string;
  testId?: string;
  error?: string;
  disabled?: boolean;
  isError?: boolean;
  onChangeText?: (input: string) => void;
  onSubmitEditing?: (input: string) => void;
  onPress?: () => void;
};
export const RNInputField: React.FC<InputFieldProps> = ({
  placeholder,
  value = "",
  error,
  testId,
  disabled,
  isError,
  onPress,
  onChangeText,
  onSubmitEditing,
}: InputFieldProps) => {
  const [inputValue, setInputValue] = useState<string>(value);
  const [isActive, setIsActive] = useState<boolean>(false);

  const onBlur = () => {
    setIsActive(false);
  };

  const onFocus = () => {
    setIsActive(true);
  };

  const onSubmit = () => {
    onSubmitEditing && onSubmitEditing(inputValue);
  };

  const onChangeTextInput = (text: string) => {
    onChangeText && onChangeText(text);
    setInputValue(text);
  };

  const onClearInput = () => {
    onChangeText && onChangeText("");
    setInputValue("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.rowInputContainer}>
        {onPress ? (
          <View style={[styles.input, styles.btnSelect]}>
            <TouchableOpacity
              disabled={disabled}
              style={{ width: "100%" }}
              onPress={onPress}
            >
              <RNText style={styles.text} text={value} />
            </TouchableOpacity>
          </View>
        ) : (
          <TextInput
            testID={testId}
            onFocus={onFocus}
            onBlur={onBlur}
            style={[
              styles.input,
              isActive ? styles.active : styles.inActive,
              isError && styles.inValid,
            ]}
            editable={!disabled}
            selectTextOnFocus={!disabled}
            placeholder={isActive ? undefined : placeholder}
            value={inputValue}
            onChangeText={onChangeTextInput}
            onSubmitEditing={onSubmit}
          />
        )}
        {isActive && (
          <TouchableOpacity onPress={onClearInput} style={styles.btnDelete}>
            <Icon name="close" size={24} color={GRAY_LIGHT} />
          </TouchableOpacity>
        )}
      </View>

      {isError && error && <RNText text={error} style={styles.errorText} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  input: {
    borderWidth: 1,
    paddingVertical: 8,
    paddingLeft: 12,
    paddingRight: 40,
    width: "100%",
    borderRadius: 5,
  },
  active: {
    borderColor: PRIMARY,
    color: BLACK,
  },
  inActive: {
    borderColor: BLACK,
    color: BLACK,
  },
  inValid: {
    borderColor: WARNING,
    color: BLACK,
  },
  text: {
    fontSize: 14,
  },
  errorText: { color: WARNING, marginTop: 8 },
  rowInputContainer: { flexDirection: "row" },
  btnDelete: {
    position: "absolute",
    right: 10,
    height: "100%",
    alignItems: "center",
    justifyContent: "space-around",
  },
  btnSelect: {
    paddingVertical: 12,
  },
});
