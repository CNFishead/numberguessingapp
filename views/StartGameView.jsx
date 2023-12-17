import React from "react";
import { Button, TextInput, View } from "react-native";
import { styles } from "../styles/StartGameStyles";
import PrimaryButton from "../components/buttons/primaryButton/PrimaryButton";

const StartGameView = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.numberInput}
        placeholderTextColor={"#ddb52f"}
        maxLength={2}
        keyboardType={"number-pad"}
        autoCapitalize="none"
      />
      <View style={styles.buttonsContainer}>
        <View style={[styles.buttonContainer, styles.resetButton]}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={[styles.buttonContainer, styles.confirmButton]}>
          <PrimaryButton>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default StartGameView;
