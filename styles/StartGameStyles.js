import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 16,
    marginTop: 100,
    marginHorizontal: 16,
    borderRadius: 10,
    backgroundColor: "#3b021f",

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
  numberInput: {
    height: 50,
    margin: 12,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    // padding: 10,
    fontSize: 32,
    marginVertical: 8,
    color: "#ddb52f",
    width: 50,
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
  resetButton:{
  }
});
