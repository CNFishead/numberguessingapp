import { StyleSheet } from "react-native";
import colors from "../constants/colors";

export const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    // set border radius to 50% of container width/height
    borderRadius: 300 / 2,
    borderWidth: 3,
    borderColor: colors.primary_darker2,
    overflow: "hidden",
    marginVertical: 30,
  },
  imageStyles: {
    width: "100%",
    height: "100%",
  },
  textContainer: {
    marginVertical: 20,
  },
  textStyles: {
    fontSize: 20,
    fontFamily: "open-sans",
    textAlign: "center",
  },
  textHighlight: {
    color: colors.primary_darker2,
    fontFamily: "open-sans-bold",
  },
});
