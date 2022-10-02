import { useContext, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeSreen";
import NavigationScreen from "./screens/NavigationScreen";
import QuestionScreen from "./screens/QuestionScreen";
import IntroScreen from './screens/IntroScreen';
import { Nunito_400Regular } from "@expo-google-fonts/nunito";
import { StyleSheet, Text, View } from "react-native";
import { NativeModules, Platform } from "react-native";
import { LanguageContext } from "./contexts/LanguageContext";
import AsyncStorage from '@react-native-async-storage/async-storage';
import SettingsScreen from "./screens/SettingsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const { locale, setLocale } = useContext(LanguageContext);
  // Sets the Device Language
  const [introComplete, setIntroComplete] = useState('false')

  useEffect(() => {
    const deviceLanguage =
    Platform.OS === "ios"
      ? NativeModules.SettingsManager.settings.AppleLocale ||
        NativeModules.SettingsManager.settings.AppleLanguages[0] // iOS 13
      : NativeModules.I18nManager.localeIdentifier;
    
    // Store the device language on the device
    storeData(deviceLanguage.slice(0, 2));
    getData()
  }, []);
  
  const storeData = async (value) => {

    try {
        await AsyncStorage.setItem('@locale', value)
    } catch (e) {
      // saving error
    }
  }
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@locale')
      const res = await AsyncStorage.getItem('@introComplete')
      setIntroComplete(res)
    } catch(e) {
      // error reading value
    }
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* {introComplete == 'false' && <Stack.Screen name="IntroScreen" component={IntroScreen} />} */}
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="NavigationScreen" component={NavigationScreen} />
        <Stack.Screen name="QuestionScreen" component={QuestionScreen} />
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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
