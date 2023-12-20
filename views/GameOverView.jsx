import React from "react";
import { Image, Text, View } from "react-native";
import PrimaryButton from "../components/buttons/primaryButton/PrimaryButton";
import Title from "../components/title/Title.component";
import { styles } from "../styles/GameOverStyles";

const GameOverView = ({ resetGame, numRounds, userChoice }) => {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image source={require("../assets/success.png")} style={styles.imageStyles} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textStyles}>
          Your Phone needed <Text style={styles.textHighlight}>({numRounds})</Text> rounds to guess the number{" "}
          <Text style={styles.textHighlight}>({userChoice})</Text>
        </Text>
      </View>
      <Text>
        <PrimaryButton onPress={() => resetGame()}>Go Again?</PrimaryButton>
      </Text>
    </View>
  );
};

export default GameOverView;
