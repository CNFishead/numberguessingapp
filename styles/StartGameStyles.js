import { StyleSheet } from "react-native";
import colors from "../constants/colors";

export const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  helperText: {
    color: colors.secondary,
    fontSize: 24,
    marginBottom: 16,
  },
  container: {
    // flex: 1,
    padding: 16,
    marginTop: 36,
    marginHorizontal: 16,
    borderRadius: 10,
    backgroundColor: colors.primary_darker2,

    // android box shadow
    elevation: 10,

    // ios box shadow
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
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
