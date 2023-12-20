import React from "react";
import { StyleSheet, Text } from "react-native";
import colors from "../../constants/colors";

const InstructionText = ({ children, style }) => {
  return <Text style={[styles.helperText, style]}>{children}</Text>;
};

export default InstructionText;

const styles = StyleSheet.create({
  helperText: {
    color: colors.secondary,
    fontFamily: "open-sans",
    fontSize: 14,
    marginBottom: 16,
    textAlign: "center",
  },
});
