import React from "react";
import { StyleSheet, Text, View } from "react-native";
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
    padding: 24,
    margin: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    fontSize: 36,
    fontWeight: "bold",
    color: colors.secondary,
  },
});
