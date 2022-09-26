import { useContext, useEffect, useState } from "react";
import { Text, View, SafeAreaView, StatusBar, Button } from "react-native";
import IntroScreen from "./IntroScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";



const HomeScreen = ({ navigation, ...props }) => {
  const [introComplete, setIntroComplete] = useState();
  const [loading, setLoading] = useState(true);
  const getData = async () => {
    try {
      //  await AsyncStorage.setItem("@introComplete", 'false');
      // const value = await AsyncStorage.getItem("@locale");
      const res = await AsyncStorage.getItem("@introComplete");
      setIntroComplete(res);
      setLoading(false)
    } catch (e) {
      // error reading value
    }
  };
  useEffect(() => {
    getData();
    
  }, []);

  
  return (introComplete == "false" ? (
    <IntroScreen setIntroComplete={setIntroComplete} />
  ) : (
    <View>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>HomeScreen</Text>
        <Button title="Go to Nav" onPress={()=>navigation.navigate('NavigationScreen')} />
      </SafeAreaView>
    </View>
  ))
};

export default HomeScreen;
