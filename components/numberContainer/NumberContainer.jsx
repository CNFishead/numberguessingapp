import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import colors from "../../constants/colors";

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: colors.secondary,
    borderRadius: 10,
    padding: Dimensions.get("window").width > 380 ? 24 : 12,
    margin: Dimensions.get("window").width > 380 ? 24 : 12,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    fontSize: Dimensions.get("window").width > 380 ? 36 : 28,
    fontFamily: "open-sans-bold",
    color: colors.secondary,
  },
});
