import { StyleSheet } from "react-native";
import colors from "../../../constants/colors";

export const styles = StyleSheet.create({
  innerContainer: {
    backgroundColor: colors.primary,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 10,
  },
  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  outterContainer: {
    borderRadius: 28,
    margin: 4,
    // keeps the ripple effect from overflowing
    overflow: "hidden",
  },
  pressed: {
    opacity: 0.75,
  },
});
