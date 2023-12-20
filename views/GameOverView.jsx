import React from "react";
import { Text } from "react-native";
import PrimaryButton from "../components/buttons/primaryButton/PrimaryButton";

const GameOverView = ({ resetGame }) => {
  return (
    <Text>
      <PrimaryButton onPress={() => resetGame()}>End Game</PrimaryButton>
    </Text>
  );
};

export default GameOverView;
