import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import StartGameView from "./views/StartGameView";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameView from "./views/GameView";

export default function App() {
  const [userNumber, setUserNumber] = useState();

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  return (
    <LinearGradient colors={["#4e0329", "#d33285", "#ddb52f"]} style={styles.container}>
      <ImageBackground
        source={require("./assets/background.png")}
        resizeMode="cover"
        style={styles.container}
        imageStyle={styles.backgroundImage}
      >
        {userNumber ? <GameView /> : <StartGameView onPickNumber={startGameHandler} />}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
