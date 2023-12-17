import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  innerContainer: {
    backgroundColor: "#72063c",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 10,
  },
  text:{
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  outterContainer: {
    borderRadius: 28,
    margin: 4,
    // keeps the ripple effect from overflowing
    overflow: "hidden",
  },
  pressed: {
    opacity: .75,
    
  }
});