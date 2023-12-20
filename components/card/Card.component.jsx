import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import colors from "../../constants/colors";

const Card = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 16,
    marginTop: Dimensions.get("window").width > 380 ? 24 : 12,
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
});
