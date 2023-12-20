import React, { useEffect, useState } from "react";
import { Alert, Text, View } from "react-native";
import { styles } from "../styles/GameViewStyles";
import Title from "../components/title/Title.component";
import NumberContainer from "../components/numberContainer/NumberContainer";
import PrimaryButton from "../components/buttons/primaryButton/PrimaryButton";
import generateRandomNumber from "../utils/generateRandomNumber";
import Card from "../components/card/Card.component";

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
    console.log(`currentGuess: ${currentGuess}, userChoice: ${userChoice}`);
    console.log(`isGameOver: ${currentGuess === userChoice}`);
    console.log(typeof currentGuess, typeof userChoice);
    if (Number(currentGuess) === Number(userChoice)) {
      onGameOver(rounds);
    }
  }, [currentGuess, userChoice, onGameOver]);

  return (
    <View style={styles.container}>
      <Title>Oppenents Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <Text style={styles.text}>Round: {rounds}</Text>
        <Text>Higher or Lower?</Text>
        <View>
          <PrimaryButton onPress={() => nextGuessHandler("higher")}>+</PrimaryButton>
          <PrimaryButton onPress={() => nextGuessHandler("lower")}>-</PrimaryButton>
        </View>
      </Card>
      <View>

      <PrimaryButton onPress={() => resetGame()}>End Game</PrimaryButton></View>
    </View>
  );
};

export default GameView;
