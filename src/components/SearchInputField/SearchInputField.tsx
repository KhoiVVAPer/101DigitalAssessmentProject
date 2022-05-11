import { BLACK, GRAY_LIGHT, PRIMARY, WARNING } from "@constants/colors";
import React, { useEffect, useState } from "react";
import { TextInput, StyleSheet, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { useDebounce } from "../../hooks/useDebounce";
import _ from "lodash";

type SearchInputFieldProps = {
  placeholder?: string;
  value?: string;
  testId?: string;
  disabled?: boolean;
  onChangeText: (input: string) => void;
  onSubmitEditing?: (input: string) => void;
};
export const SearchInputField: React.FC<SearchInputFieldProps> = ({
  placeholder,
  value,
  testId,
  disabled,
  onChangeText,
  onSubmitEditing,
}: SearchInputFieldProps) => {
  const [searchQuery, setSearchQuery] = useState<string>(value ?? "");
  const [isActive, setIsActive] = useState<boolean>(false);
  const debouncedSearchQuery = useDebounce<string>(searchQuery, 500);

  useEffect(() => {
    onChangeText(searchQuery);
  }, [debouncedSearchQuery]);

  const onBlur = () => {
    setIsActive(false);
  };

  const onFocus = () => {
    setIsActive(true);
  };

  const onSubmit = () => {
    onSubmitEditing && onSubmitEditing(searchQuery);
  };

  const onChangeTextInput = (text: string) => {
    setSearchQuery(text);
  };

  const onClearInput = () => {
    onChangeText("");
    setSearchQuery("");
  };

  const isShowSearchIcon =
    (!searchQuery || searchQuery.length === 0) && !isActive;

  return (
    <View style={styles.container}>
      <View style={styles.rowInputContainer}>
        {isShowSearchIcon && (
          <View style={styles.searchIconView}>
            <Icon name="search1" size={24} color={GRAY_LIGHT} />
          </View>
        )}

        <TextInput
          testID={testId}
          onFocus={onFocus}
          onBlur={onBlur}
          style={[
            styles.input,
            isActive ? styles.active : styles.inActive,
            isShowSearchIcon && styles.avoidSearchIconView,
          ]}
          editable={!disabled}
          placeholder={isActive ? undefined : placeholder}
          placeholderTextColor={GRAY_LIGHT}
          value={searchQuery}
          onChangeText={onChangeTextInput}
          onSubmitEditing={onSubmit}
        />
        {!isShowSearchIcon && (
          <TouchableOpacity
            testID={`${testId}-btn-clear`}
            onPress={onClearInput}
            style={styles.btnDelete}
          >
            <Icon name="close" size={24} color={GRAY_LIGHT} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    flex: 1,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    height: 48,
    paddingLeft: 15,
    paddingRight: 40,
    borderRadius: 5,
  },
  active: {
    borderColor: PRIMARY,
    color: BLACK,
  },
  inActive: {
    borderColor: GRAY_LIGHT,
    color: BLACK,
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
  searchIconView: {
    position: "absolute",
    left: 10,
    height: "100%",
    alignItems: "center",
    justifyContent: "space-around",
  },
  avoidSearchIconView: {
    paddingLeft: 40,
  },
});
