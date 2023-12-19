import React from "react";
import { Text, View } from "react-native";

const GameView = () => {
  return (
    <View>
      <Text>Opponent's Guess</Text>
      {/* TODO: Show guess */}
      <View>
        <Text>Higher or Lower?</Text>
        <View>
          <Text>Lower</Text>
          <Text>Higher</Text>
        </View>
      </View>
      <View>
        LOG Rounds
      </View>
    </View>
  );
};

export default GameView;
