import React, { useEffect, useState } from "react";
import { Alert, FlatList, ScrollView, Text, View, useWindowDimensions } from "react-native";
import { styles } from "../styles/GameViewStyles";
import Title from "../components/title/Title.component";
import NumberContainer from "../components/numberContainer/NumberContainer";
import PrimaryButton from "../components/buttons/primaryButton/PrimaryButton";
import generateRandomNumber from "../utils/generateRandomNumber";
import Card from "../components/card/Card.component";
import InstructionText from "../components/instructionText/InstructionText.component";
import { Ionicons } from "@expo/vector-icons";
import GuessLogItem from "../components/guessLogItem/GuessLogItem.component";

const GameView = ({ userChoice, onGameOver, resetGame, setNumberRounds }) => {
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
        {
          guess: currentGuess,
          direction: "lower",
          lowerBound: lowerBound,
          upperBound: upperBound,
          round: rounds,
        },
        ...pastGuesses,
      ]);
      setRounds(rounds + 1);
    } else {
      setLowerBound(currentGuess);
      setCurrentGuess(generateRandomNumber(currentGuess + 1, upperBound, currentGuess));
      setPastGuesses([
        {
          guess: currentGuess,
          direction: "higher",
          lowerBound: lowerBound,
          upperBound: upperBound,
          round: rounds,
        },
        ...pastGuesses,
      ]);
      setRounds(rounds + 1);
    }
  };

  useEffect(() => {
    if (Number(currentGuess) === Number(userChoice)) {
      setNumberRounds(rounds);
      onGameOver(rounds);
    }
  }, [currentGuess, userChoice, onGameOver]);

  const { width } = useWindowDimensions();

  let content = (
    <>
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
    </>
  );

  if (width > 500) {
    content = (
      <>
        <View
          style={[
            styles.buttonsContainer,
            {
              flexDirection: "row",
              alignItems: "center",
            },
          ]}
        >
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessHandler("lower")}>
              <Ionicons name="md-remove" size={24} color="white" />
            </PrimaryButton>
          </View>
          <NumberContainer>{currentGuess}</NumberContainer>
          <View style={styles.buttonContainer}>
            <PrimaryButton style={styles.buttonContainer} onPress={() => nextGuessHandler("higher")}>
              <Ionicons name="md-add" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <Title>Oppenents Guess</Title>
        {content}
        <View style={styles.pastGuessesContainer}>
          <Text style={styles.pastGuessesText}>Past Guesses</Text>
          <View style={styles.pastGuesses}>
            <FlatList
              data={pastGuesses}
              renderItem={(itemData) => {
                return <GuessLogItem item={itemData.item} />;
              }}
            />
          </View>
        </View>
        {/* <View style={{ justifyContent: "flex-end", alignItems: "flex-end", flex: 1 }}>
          <PrimaryButton onPress={() => resetGame()}>Reset</PrimaryButton>
        </View> */}
      </View>
    </View>
  );
};

export default GameView;
