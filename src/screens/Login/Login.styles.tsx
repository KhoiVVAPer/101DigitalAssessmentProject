import { scale } from "@constants/scale";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentWrapper: {
    paddingTop: scale(50),
    flexDirection: "column",
    alignItems: "center",
  },
  input: {
    width: scale(200),
  },
  title: {
    marginBottom: scale(20),
  },
  errorText: {
    color: "red",
  },
});

export default styles;
