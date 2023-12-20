import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../../constants/colors";

const GuessLogItem = ({ item }) => {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.pastGuess}>
        <Text style={styles.pastGuessText}>Round: {item.round}</Text>
        <Text>|</Text>
        <Text style={styles.pastGuessText}>Guess: {item.guess}</Text>
      </View>
    </View>
  );
};

export default GuessLogItem;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.primary,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  pastGuess: {
    flexDirection: "row",
    width: "90%",
    alignContent: "center",
  },
  pastGuessText: {
    fontSize: 18,
    flex: 1,
    color: "white",
    textAlign: "center",
  },
});
