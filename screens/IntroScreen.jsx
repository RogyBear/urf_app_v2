import React, { useContext, useEffect, useRef, useState } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import {
  SafeAreaView,
  Text,
  View,
  StatusBar,
  Dimensions,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import lang from "../languages/screens/IntroScreen-Language.json";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Item = ({ title, text }) => {
  return (
    <View
      style={{
        padding: 10,
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width,
      }}
    >
      <Text style={{ flexWrap: "wrap" }}>{title}</Text>
      <Text style={{}}>{text}</Text>
    </View>
  );
};

const IntroScreen = ({ navigation, ...props }) => {
  const { setIntroComplete } = props;
  const [index, setIndex] = useState(0);
  const ref = useRef(null);
  const DATA = lang["en"];

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem("@introComplete", value);
    } catch (e) {
      // saving error
    }
  };

  useEffect(() => {
    ref.current?.scrollToIndex({
      index: index,
      animated: true,
    });
  }, [index]);

  const renderItem = ({ item }) => {
    return <Item title={item.title} text={item.text} />;
  };
  const handleForward = () => {
    if (index === DATA.length - 1) {
      storeData("true");
      setIntroComplete(true)
    } else {
      setIndex(index + 1);
    }
  };

  const handleBack = () => {
    if (index === 0) return;
    setIndex(index - 1);
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <FlatList
          ref={ref}
          scrollEnabled={false}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          snapToAlignment="start"
          decelerationRate={"fast"}
          snapToInterval={Dimensions.get("window").width}
          contentContainerStyle={{}}
          style={{
            // height: Dimensions.get("window").height,
            width: Dimensions.get("window").width,
          }}
        />
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 200,
          }}
        >
          <TouchableOpacity
            onPress={handleForward}
            style={{
              marginBottom: 100,
              width: 200,
              height: 50,
              backgroundColor: "#ff3456",
            }}
          >
            <Text>Forward</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleBack}
            style={{ width: 200, height: 50, backgroundColor: "#ff3456" }}
          >
            <Text>Back</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({});
