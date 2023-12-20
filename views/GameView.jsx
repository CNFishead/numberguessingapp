import React, { useEffect, useState } from "react";
import { Alert, Text, View } from "react-native";
import { styles } from "../styles/GameViewStyles";
import Title from "../components/title/Title.component";
import NumberContainer from "../components/numberContainer/NumberContainer";
import PrimaryButton from "../components/buttons/primaryButton/PrimaryButton";
import generateRandomNumber from "../utils/generateRandomNumber";
import Card from "../components/card/Card.component";
import InstructionText from "../components/instructionText/InstructionText.component";
import { Ionicons } from "@expo/vector-icons";

const GameView = ({ userChoice, onGameOver, resetGame }) => {
  const initialGuess = generateRandomNumber(1, 100, userChoice);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [rounds, setRounds] = useState(1);
  const [pastGuesses, setPastGuesses] = useState([]);
  const [lowerBound, setLowerBound] = useState(1);
  const [upperBound, setUpperBound] = useState(100);

  const nextGuessHandler = (direction) => {
    if ((direction === "lower" && currentGuess < userChoice) || (direction === "higher" && currentGuess > userChoice)) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [{ text: "Sorry!", style: "cancel" }]);
      return;
    }
    if (direction === "lower") {
      setUpperBound(currentGuess);
      setCurrentGuess(generateRandomNumber(lowerBound, currentGuess - 1, currentGuess));
      setPastGuesses([
        ...pastGuesses,
        {
          guess: currentGuess,
          direction: "lower",
          lowerBound: lowerBound,
          upperBound: upperBound,
          round: rounds,
        },
      ]);

      setRounds(rounds + 1);
    } else {
      setLowerBound(currentGuess);
      setCurrentGuess(generateRandomNumber(currentGuess + 1, upperBound, currentGuess));
      setPastGuesses([
        ...pastGuesses,
        {
          guess: currentGuess,
          direction: "higher",
          lowerBound: lowerBound,
          upperBound: upperBound,
          round: rounds,
        },
      ]);
      setRounds(rounds + 1);
    }
  };

  useEffect(() => {
    if (Number(currentGuess) === Number(userChoice)) {
      onGameOver(rounds);
    }
  }, [currentGuess, userChoice, onGameOver]);

  return (
    <View style={styles.container}>
      <Title>Oppenents Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.text}>Round: {rounds}</InstructionText>
        <InstructionText>Higher or Lower?</InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessHandler("lower")}>
              <Ionicons name="md-remove" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton style={styles.buttonContainer} onPress={() => nextGuessHandler("higher")}>
              <Ionicons name="md-add" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={{ justifyContent: "flex-end", alignContent: "flex-end", flex: 1 }}>
        <PrimaryButton onPress={() => resetGame()}>Reset</PrimaryButton>
      </View>
    </View>
  );
};

export default GameView;
