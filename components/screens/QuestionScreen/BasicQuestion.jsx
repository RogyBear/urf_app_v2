import React from "react";
import { View, Text, TextInput } from "react-native";

const BasicQuestion = ({question}) => (
  <View>
    <Text style={{ fontFamily: "Nunito", color: "#082844", fontSize: 28 }}>
      {question}
    </Text>
    <TextInput
      style={{
        padding: 15,
        fontSize: 18,
        borderColor: "gray",
        borderWidth: 1,
        backgroundColor: "#FFF",
        borderRadius: 20,
      }}
      // onChangeText={onChangeText}
    />
  </View>
);

export default BasicQuestion;
