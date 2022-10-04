import React, { useContext, useEffect, useCallback, useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import ProgressBar from "../components/global-components/forms/ProgessBar";
import { ProgressContext } from "../contexts/ProgressContext";
import { LinearGradient } from "expo-linear-gradient";


function Item({ id, progressKey, title, palette, questionsLength, handlePress }) {
  const { progress } = useContext(ProgressContext);

  return (
    <TouchableOpacity onPress={handlePress} style={{}}>
      <View
        style={{
          backgroundColor: palette.secondary,
          borderRadius: 10,
          padding: 10,
          marginBottom: 15,
          flexDirection: "row",
        }}
      >
        <View
          style={{
            width: 50,
            height: 50,
            backgroundColor: palette.primary[1],
            borderRadius: 10,
            marginRight: 10,
          }}
        >
          {/* SVG goes here  */}
        </View>
        <View style={{ flex: 1, justifyContent: "space-between" }}>
          <Text style={{ fontSize: 18, fontFamily: "Nunito" }}>{title}</Text>
          <ProgressBar
            progress={progress[progressKey] / (questionsLength - 1)}
            colors={palette.primary}
            style={{ height: 10, borderRadius: 100, backgroundColor: "#FFF" }}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const NavigationScreen = ({ route, navigation }) => {

  const handlePDFView = () => {
    navigation.navigate("ViewPDF" );
  }

  const renderItem = ({ item }) => {
    const { palette, questions, key } = item;
    const handlePress = () => {
      navigation.navigate("QuestionScreen", {
        palette: palette,
        questions: questions,
        key: key,
      });
    };
    
    return (
      <Item
        title={item.title}
        handlePress={handlePress}
        palette={item.palette}
        questionsLength={questions.length}
        id={item.id}
        progressKey={item.key}
        icon={item.icon}
      />
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }}>
      <StatusBar barStyle="dark-content" />
      <View style={{ flex: 1, margin: 15 }}>
        <FlatList
          data={route.params.data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />

        <TouchableOpacity onPress={handlePDFView} >
          <LinearGradient colors={["#65ADEE", "#3599F3"]} style={{borderRadius: 16, paddingVertical: 15, alignItems: 'center'}}>
            <Text style={{color: '#FFF', fontSize: 17}}>{route.params.section == 'resume' ? 'Переглянути резюме' : 'Переглянути лист'}</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default NavigationScreen;
