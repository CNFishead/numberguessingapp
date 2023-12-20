import React from "react";
import { Dimensions, StyleSheet, View, useWindowDimensions } from "react-native";
import colors from "../../constants/colors";

const Card = ({ children }) => {
  useWindowDimensions();
  return (
    <View
      style={[
        styles.container,
        {
          marginTop: Dimensions.get("window").width > 380 ? 24 : 12,
          marginHorizontal: 16,
          maxWidth: Dimensions.get("window").width * 0.9,
        },
      ]}
    >
      {children}
    </View>
  );
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
    maxWidth: Dimensions.get("window").width * 0.9,
  },
});
