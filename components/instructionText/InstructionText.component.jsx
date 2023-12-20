import React from "react";
import { StyleSheet, Text } from "react-native";
import colors from "../../constants/colors";

const InstructionText = ({ children }) => {
  return <Text style={styles.helperText}>{children}</Text>;
};

export default InstructionText;

const styles = StyleSheet.create({
  helperText: {
    color: colors.secondary,
    fontSize: 14,
    marginBottom: 16,
    textAlign: "center",
  },
});
