import { StyleSheet, Text, View, ImageBackground, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import StartGameView from "./views/StartGameView";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameView from "./views/GameView";
import colors from "./constants/colors";
import GameOverView from "./views/GameOverView";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameOver, setGameOver] = useState(true);

  const startGameHandler = (selectedNumber) => {
    setGameOver(false);
    setUserNumber(selectedNumber);
  };

  const gameOverHandler = () => {
    setGameOver(true);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient colors={[colors.primary_darker2, colors.accent, colors.secondary]} style={styles.container}>
        <ImageBackground
          source={require("./assets/background.png")}
          resizeMode="cover"
          style={{ flex: 1 }}
          imageStyle={styles.backgroundImage}
        >
          {gameOver && userNumber ? (
            <GameOverView
              resetGame={() => {
                setUserNumber(null);
                setGameOver(true);
              }}
            />
          ) : userNumber ? (
            <GameView
              userChoice={userNumber}
              onGameOver={gameOverHandler}
              resetGame={() => {
                setUserNumber(null);
                setGameOver(true);
              }}
            />
          ) : (
            <StartGameView onPickNumber={startGameHandler} />
          )}
        </ImageBackground>
      </LinearGradient>
    </SafeAreaView>
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
