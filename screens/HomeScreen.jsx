import { useContext, useEffect, useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Button,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import IntroScreen from "./IntroScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LinearGradient } from "expo-linear-gradient";
import HomeTileSVG from "../components/HomeTileSVG";
import Letter from "../components/Letter";
import Cv from "../components/Cv";
import HomeHeader from "../components/HomeHeader";

const HomeScreen = ({ navigation, ...props }) => {
  const [introComplete, setIntroComplete] = useState();
  const [loading, setLoading] = useState(true);
  const getData = async () => {
    try {
      //  await AsyncStorage.setItem("@introComplete", 'false');
      // const value = await AsyncStorage.getItem("@locale");
      const res = await AsyncStorage.getItem("@introComplete");
      setIntroComplete(res);
      setLoading(false);
    } catch (e) {
      // error reading value
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return introComplete == "false" ? (
    <IntroScreen setIntroComplete={setIntroComplete} />
  ) : (
    <SafeAreaView style={{backgroundColor: '#FFF', height: Dimensions.get('window').height}}>
      <StatusBar barStyle="dark-content" />
      <View style={{ paddingHorizontal: 15}}>
        <HomeHeader navigation={navigation} />
        <LinearGradient style={boxStyles} colors={["#65ADEE", "#3599F3"]}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Cv />
            <View style={{ marginLeft: 20 }}>
              <Text style={{ fontSize: 22, color: "#FFF" }}>Створіть своє</Text>
              <Text style={{ fontSize: 22, color: "#FFF" }}>перше резюме</Text>
            </View>
          </View>
          <View style={{ zIndex: 1 }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("NavigationScreen")}
            >
              <LinearGradient
                style={{
                  justifyContent: "center",
                  flexDirection: "row",
                  borderRadius: 16,
                }}
                colors={["#FED255", "#F4BF2A"]}
              >
                <Text
                  style={{ color: "#FFF", fontSize: 16, paddingVertical: 15 }}
                >
                  Створити
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <View style={{ position: "absolute", bottom: 0 }}>
            <HomeTileSVG />
          </View>
        </LinearGradient>
        <View style={{ position: "relative" }}>
          <LinearGradient style={boxStyles} colors={["#ABD777", "#91C455"]}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Letter />
              <View style={{ marginLeft: 20 }}>
                <Text style={{ fontSize: 22, color: "#FFF" }}>
                  Створіть перший
                </Text>
                <Text style={{ fontSize: 22, color: "#FFF" }}>
                  супровідний лист
                </Text>
              </View>
            </View>
            <View style={{ zIndex: 1 }}>
              <TouchableOpacity
                onPress={() => navigation.navigate("NavigationScreen")}
              >
                <LinearGradient
                  style={{
                    justifyContent: "center",
                    flexDirection: "row",
                    borderRadius: 16,
                  }}
                  colors={["#FED255", "#F4BF2A"]}
                >
                  <Text
                    style={{ color: "#FFF", fontSize: 16, paddingVertical: 15 }}
                  >
                    Створити
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
            <View style={{ position: "absolute", bottom: 0 }}>
              <HomeTileSVG />
            </View>
          </LinearGradient>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const boxStyles = StyleSheet.create({
  height: Dimensions.get("window").height / 3,
  justifyContent: "space-between",
  borderRadius: 30,
  paddingHorizontal: 40,
  paddingVertical: 30,
  marginBottom: 20,
});
