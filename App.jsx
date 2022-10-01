import { useContext, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Main from "./Main";
import * as Font from "expo-font";
import { useFonts, Nunito_400Regular } from "@expo-google-fonts/nunito";
import { StyleSheet, Text, View } from "react-native";
import { NativeModules, Platform } from "react-native";
import { LanguageProvider } from "./contexts/LanguageContext";
import { DataProvider } from "./contexts/DataContext";

const Stack = createNativeStackNavigator();

const getFonts = async () => {
  await Font.loadAsync({
    Nunito: require("./assets/fonts/Nunito-Regular.ttf"),
    // "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
  });
};

export default function App() {
  // Sets the Device Language
  // const deviceLanguage =
  //   Platform.OS === "ios"
  //     ? NativeModules.SettingsManager.settings.AppleLocale ||
  //       NativeModules.SettingsManager.settings.AppleLanguages[0] // iOS 13
  //     : NativeModules.I18nManager.localeIdentifier;

  // // const { setLocale } = useContext(LanguageContext);
  // // setLocale(deviceLanguage)
  // console.log(deviceLanguage);


  const [fontsLoaded] = useFonts({'Nunito': require("./assets/fonts/Nunito-Regular.ttf")});

  if (!fontsLoaded) {
    return null;  
  }
  return (
    <DataProvider>
      <LanguageProvider>
        <Main />
      </LanguageProvider>
    </DataProvider> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
