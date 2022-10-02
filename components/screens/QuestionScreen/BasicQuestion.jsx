import React, { useContext, useState } from "react";
import { View, Text, TextInput } from "react-native";
import { AnswersContext } from "../../../contexts/AnswersContext";

const BasicQuestion = ({ item, questionKey }) => {
  // Need "key", "index", "answer"
  const {answer, setAnswer, saveInput} = useContext(AnswersContext)
  const [value, setValue] = useState(answer[questionKey][item.id] )
  const handleChange = (text) => {
    setValue(text)
  }
  
  return (
    <View>
      <Text style={{ fontFamily: "Nunito", color: "#082844", fontSize: 28 }}>
        {item.question}
      </Text>
      <TextInput
        value={value}
        onChangeText={handleChange}
        onEndEditing={()=>saveInput(questionKey, item.id, value)}
        
        style={{
          padding: 15,
          fontSize: 18,
          borderColor: "gray",
          borderWidth: 1,
          backgroundColor: "#FFF",
          borderRadius: 20,
        }}
      />
    </View>
  );
};

export default BasicQuestion;
