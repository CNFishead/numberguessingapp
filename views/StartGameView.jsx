import React, { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  TextInput,
  View,
  Alert,
  useWindowDimensions,
  Dimensions,
  ScrollView,
} from "react-native";
import { styles } from "../styles/StartGameStyles";
import PrimaryButton from "../components/buttons/primaryButton/PrimaryButton";
import Title from "../components/title/Title.component";
import Card from "../components/card/Card.component";
import InstructionText from "../components/instructionText/InstructionText.component";

const StartGameView = ({ onPickNumber }) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [shouldReRender, setShouldReRender] = useState(false);

  const onFinish = () => {
    // validate input
    // must be a number
    // must be between 1 and 99
    // must not be empty
    // must not be a decimal
    // use regex to validate
    // if valid, start game
    // else, show error message
    if (/^(0?[1-9]|[1-9]\d)$/.test(enteredValue)) {
      onPickNumber(enteredValue);
    } else {
      // show error message to user
      Alert.alert("Invalid Input", "Please enter a number between 1 and 99", [
        { text: "Okay", style: "destructive", onPress: onReset },
      ]);
    }
  };

useWindowDimensions();

  const onReset = () => {
    setEnteredValue("");
  };
  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView
        behavior="position"
        keyboardVerticalOffset={30}
        style={[
          styles.rootContainer,
          {
            marginTop: Dimensions.get("window").height * 0.1,
          },
        ]}
      >
        <View style={styles.rootContainer}>
          <Title>Guess My Number!</Title>
          <Card>
            <InstructionText>Enter A Number between 1 and 99</InstructionText>
            <TextInput
              style={styles.numberInput}
              placeholderTextColor={"#ddb52f"}
              maxLength={2}
              onChange={(e) => setEnteredValue(e.nativeEvent.text)}
              // will always be a string
              keyboardType={"number-pad"}
              autoCapitalize="none"
              value={enteredValue}
            />
            <View style={styles.buttonsContainer}>
              <View style={[styles.buttonContainer, styles.resetButton]}>
                <PrimaryButton onPress={onReset}>Reset</PrimaryButton>
              </View>
              <View style={[styles.buttonContainer, styles.confirmButton]}>
                <PrimaryButton onPress={onFinish}>Confirm</PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default StartGameView;
