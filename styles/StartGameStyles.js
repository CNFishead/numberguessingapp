import { Dimensions, StyleSheet } from "react-native";
import colors from "../constants/colors";

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    alignItems: "center",
  },

  numberInput: {
    height: 50,
    margin: 12,
    borderBottomColor: colors.secondary,
    borderBottomWidth: 2,
    // padding: 10,
    fontSize: 32,
    marginVertical: 8,
    color: colors.secondary,
    width: 50,
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  buttonContainer: {
    flex: 1,
  },
  resetButton: {},
});
