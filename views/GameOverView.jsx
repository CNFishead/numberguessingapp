import React from "react";
import { Dimensions, Image, ScrollView, Text, View, useWindowDimensions } from "react-native";
import PrimaryButton from "../components/buttons/primaryButton/PrimaryButton";
import Title from "../components/title/Title.component";
import { styles } from "../styles/GameOverStyles";

const GameOverView = ({ resetGame, numRounds, userChoice }) => {
  useWindowDimensions();

  let portraitMode = false;
  console.log(Dimensions.get("window").height, Dimensions.get("window").width);
  // check if the device is in portrait mode
  if (Dimensions.get("window").height > Dimensions.get("window").width) {
    portraitMode = true;
  }

  return (
    <ScrollView style={styles.rootContainer}>
      <View style={styles.container}>
        <Title>GAME OVER!</Title>
        <View
          style={[
            styles.imageContainer,
            {
              width: portraitMode ? Dimensions.get("window").width * 0.7 : Dimensions.get("window").height * 0.7,
              height: portraitMode ? Dimensions.get("window").width * 0.7 : Dimensions.get("window").height * 0.7,
              borderRadius: (Dimensions.get("window").width * 0.7) / 2,
            },
          ]}
        >
          <Image source={require("../assets/success.png")} style={[styles.imageStyles]} />
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
    </ScrollView>
  );
};

export default GameOverView;
