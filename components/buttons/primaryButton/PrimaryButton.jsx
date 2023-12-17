import React from "react";
import { styles } from "./PrimaryButtonStyle";
import { Pressable, Text, View } from "react-native";

const PrimaryButton = ({ children }) => {
  return (
    <View style={styles.outterContainer}>
      <Pressable
        style={({ pressed }) => [pressed ? [styles.innerContainer, styles.pressed] : styles.innerContainer]}
        onPress={() => console.log(`${children} pressed`)}
        android_ripple={{
          color: "#640233",
        }}
      >
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;
