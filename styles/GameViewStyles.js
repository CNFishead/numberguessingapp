import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
  backgroundImage: {
    opacity: 0.15,
  },
  text: {
    color: "white",
    fontSize: 24,
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  buttonContainer: {
    flex: 1,
  },
  pastGuessesContainer: {
    flex: 1,
    width: "100%",
  },
  pastGuessesText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    marginVertical: 12,
  },
});
