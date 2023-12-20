import { StyleSheet, Text, View, ImageBackground, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import StartGameView from "./views/StartGameView";
import { LinearGradient } from "expo-linear-gradient";
import { useCallback, useState } from "react";
import GameView from "./views/GameView";
import colors from "./constants/colors";
import GameOverView from "./views/GameOverView";
// fonts
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync().catch((err) => console.log(err));

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [numberRounds, setNumberRounds] = useState(0); // [0, 99]
  const [gameOver, setGameOver] = useState(true);

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  // use useCallback to prevent infinite splash screen loop
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const startGameHandler = (selectedNumber) => {
    setGameOver(false);
    setUserNumber(selectedNumber);
  };

  const gameOverHandler = () => {
    setGameOver(true);
  };

  const resetGameHandler = () => {
    setNumberRounds(0);
    setUserNumber(null);
    setGameOver(true);
  };
  return (
    <SafeAreaView style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <LinearGradient colors={[colors.primary_darker2, colors.accent, colors.secondary]} style={styles.container}>
        <ImageBackground
          source={require("./assets/background.png")}
          resizeMode="cover"
          style={{ flex: 1 }}
          imageStyle={styles.backgroundImage}
        >
          {gameOver && userNumber ? (
            <GameOverView resetGame={resetGameHandler} numRounds={numberRounds} userChoice={userNumber} />
          ) : userNumber ? (
            <GameView
              userChoice={userNumber}
              onGameOver={gameOverHandler}
              resetGame={resetGameHandler}
              setNumberRounds={setNumberRounds}
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
