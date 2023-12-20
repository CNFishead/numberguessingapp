import React from "react";
import { StyleSheet, Text } from "react-native";
import colors from "../../constants/colors";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: "open-sans-bold",
    marginBottom: 12,
    color: colors.secondary,
    textAlign: "center",
    borderWidth: 2,
    borderColor: colors.secondary_darker,
    padding: 12,
    borderRadius: 12,
    // width: "100%",
    maxWidth: "80%",
  },
});
