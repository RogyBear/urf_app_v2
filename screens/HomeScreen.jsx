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
import { basicQuestions } from "../utils/BasicQuestions";
import { ACHIEVMENTS, BASIC_INFO, EDUCATION, PORTFOLIO, SKILLS, WORK, TITLE, CONTENTS, SIGNATURE} from "../utils/constants";


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

  const resumeData = [
    basicQuestions,
    {
      id: "2",
      title: "Освіта",
      key: "education",
      palette: {
        primary: ["#FED255", "#F4BF2A"],
        secondary: "#FFF4E1",
      },
      icon: "",
      progress: 0.7,
      questions: [
        {
          id: "test1",
          question: "Вкажіть ваше ім'я та прізвище",

        },
        {
          id: "test2",
          question: "Вкажіть ваш номер телефону",
          help: "Тут тобі потрібно ввести номер мобільного телефону, щоб роботодавець міг з тобою зв’язатися.",

        },
        {
          id: "test3",
          question: "Вкажіть ваш e-mail",
      
        },
        {
          id: "test4",
          question: "Оберіть мови, якими ви володієте",
      
        },
        {
          id: "test5",
          question: "Додайте своє фото",
  
        },
        {
          id: "test6",
          question: "Вкажіть посаду, на яку ви претендуєте",

        },
        {
          id: "test7",
          question: "Давайте перевіримо ваші відповіді",
          confirmation: true,
        },
      ],
    },
    {
      id: "3",
      title: "Досвід роботи",
      key: "work",
      palette: {
        primary: ["#ABD777", "#91C355"],
        secondary: "#F3FAEA",
      },
      icon: "",
      progress: 1,
      questions: [
        {
          id: "test1",
          question: "This is another thing",

        },
        {
          id: "test2",
          question: "Вкажіть ваш номер телефону",
          help: "Тут тобі потрібно ввести номер мобільного телефону, щоб роботодавець міг з тобою зв’язатися.",

        },
        {
          id: "test3",
          question: "Вкажіть ваш e-mail",

        },
        {
          id: "test4",
          question: "Оберіть мови, якими ви володієте",

        },
        {
          id: "test5",
          question: "Додайте своє фото",
 
        },
        {
          id: "test6",
          question: "Вкажіть посаду, на яку ви претендуєте",
        },
        {
          id: "test7",
          question: "Давайте перевіримо ваші відповіді",
          confirmation: true,
        },
      ],
    },
    {
      id: "4",
      title: "Проекти або портфоліо",
      key: "portfolio",
      palette: {
        primary: ["#FF6A9F", "#EE598E"],
        secondary: "#FFEEF4",
      },
      icon: "",
      progress: 0.2,
      questions: [
        {
          id: "test1",
          question: "Вкажіть ваше ім'я та прізвище",

        },
        {
          id: "test2",
          question: "Вкажіть ваш номер телефону",
          help: "Тут тобі потрібно ввести номер мобільного телефону, щоб роботодавець міг з тобою зв’язатися.",

        },
        {
          id: "test3",
          question: "Вкажіть ваш e-mail",

        },
        {
          id: "test4",
          question: "Оберіть мови, якими ви володієте",

 
        },
        {
          id: "test5",
          question: "Додайте своє фото",

        },
        {
          id: "test6",
          question: "Вкажіть посаду, на яку ви претендуєте",

        },
        {
          id: "test7",
          question: "Давайте перевіримо ваші відповіді",

          confirmation: true,
        },
      ],
    },
    {
      id: "5",
      title: "Навички",
      key: "skills",
      palette: {
        primary: ["#65ADEE", "#3599F3"],
        secondary: "#EBF5FF",
      },
      icon: "",
      progress: 0.4,
      questions: [
        {
          id: "test1",
          question: "Вкажіть ваше ім'я та прізвище",
        },
        {
          id: "test2",
          question: "Вкажіть ваш номер телефону",
          help: "Тут тобі потрібно ввести номер мобільного телефону, щоб роботодавець міг з тобою зв’язатися.",

        },
        {
          id: "test3",
          question: "Вкажіть ваш e-mail",

        },
        {
          id: "test4",
          question: "Оберіть мови, якими ви володієте",
 
        },
        {
          id: "test5",
          question: "Додайте своє фото",

        },
        {
          id: "test6",
          question: "Вкажіть посаду, на яку ви претендуєте",

        },
        {
          id: "test7",
          question: "Давайте перевіримо ваші відповіді",

          confirmation: true,
        },
      ],
    },
    {
      id: "6",
      title: "Досягнення",
      key: "achievments",
      palette: {
        primary: ["#FED255", "#F4BF2A"],
        secondary: "#FFF4E1",
      },
      icon: "",
      progress: 0.6,
      questions: [
        {
          id: "test1",
          question: "Вкажіть ваше ім'я та прізвище",

        },
        {
          id: "test2",
          question: "Вкажіть ваш номер телефону",
          help: "Тут тобі потрібно ввести номер мобільного телефону, щоб роботодавець міг з тобою зв’язатися.",

        },
        {
          id: "test3",
          question: "Вкажіть ваш e-mail",
 
        },
        {
          id: "test4",
          question: "Оберіть мови, якими ви володієте",

        },
        {
          id: "test5",
          question: "Додайте своє фото",

        },
        {
          id: "test6",
          question: "Вкажіть посаду, на яку ви претендуєте",

        },
        {
          id: "test7",
          question: "Давайте перевіримо ваші відповіді",

          confirmation: true,
        },
      ],
    },
    // {
    //   id: "7",
    //   title: "Оберіть шаблон резюме",
    //   palette: {
    //     primary: ["#ABD777", "#91C355"],
    //     secondary: "#F3FAEA",
    //   },
    //   icon: "",
    //   progress: 0.2,
    //   questions: [
    //     {
    //       id: "test1",
    //       question: "Вкажіть ваше ім'я та прізвище",

    //     },
    //     {
    //       id: "test2",
    //       question: "Вкажіть ваш номер телефону",
    //       help: "Тут тобі потрібно ввести номер мобільного телефону, щоб роботодавець міг з тобою зв’язатися.",

    //     },
    //     {
    //       id: "test3",
    //       question: "Вкажіть ваш e-mail",

    //     },
    //     {
    //       id: "test4",
    //       question: "Оберіть мови, якими ви володієте",

    //     },
    //     {
    //       id: "test5",
    //       question: "Додайте своє фото",

    //     },
    //     {
    //       id: "test6",
    //       question: "Вкажіть посаду, на яку ви претендуєте",

    //     },
    //     {
    //       id: "test7",
    //       question: "Давайте перевіримо ваші відповіді",

    //       confirmation: true,
    //     },
    //   ],
    // },
  ];

  const coverLetterData = [
    {
      id: "0",
      title: "Досягнення",
      key: TITLE,
      palette: {
        primary: ["#65ADEE", "#3599F3"],
        secondary: "#EBF5FF",
      },
      icon: "",
      questions: [
        {
          id: "test1",
          question: "Вкажіть ваше ім'я та прізвище",

        },
        {
          id: "test2",
          question: "Вкажіть ваш номер телефону",
          help: "Тут тобі потрібно ввести номер мобільного телефону, щоб роботодавець міг з тобою зв’язатися.",

        },
        {
          id: "test3",
          question: "Вкажіть ваш e-mail",
 
        },
        {
          id: "test4",
          question: "Оберіть мови, якими ви володієте",

        },
        {
          id: "test5",
          question: "Додайте своє фото",

        },
        {
          id: "test6",
          question: "Вкажіть посаду, на яку ви претендуєте",

        },
        {
          id: "test7",
          question: "Давайте перевіримо ваші відповіді",

          confirmation: true,
        },
      ],
    },
    {
      id: "1",
      title: "Оберіть шаблон резюме",
      key: CONTENTS,
      palette: {
        primary: ["#FED255", "#F4BF2A"],
        secondary: "#FFF4E1",
      },
      icon: "",
      questions: [
        {
          id: "test1",
          question: "Вкажіть ваше ім'я та прізвище",

        },
        {
          id: "test2",
          question: "Вкажіть ваш номер телефону",
          help: "Тут тобі потрібно ввести номер мобільного телефону, щоб роботодавець міг з тобою зв’язатися.",

        },
        {
          id: "test3",
          question: "Вкажіть ваш e-mail",

        },
        {
          id: "test4",
          question: "Оберіть мови, якими ви володієте",

        },
        {
          id: "test5",
          question: "Додайте своє фото",

        },
        {
          id: "test6",
          question: "Вкажіть посаду, на яку ви претендуєте",

        },
        {
          id: "test7",
          question: "Давайте перевіримо ваші відповіді",

          confirmation: true,
        },
      ],
    },
    {
      id: "2",
      title: "Проекти або портфоліо",
      key: SIGNATURE,
      palette: {
        primary: ["#ABD777", "#91C355"],
        secondary: "#F3FAEA",
      },
      icon: "",
      questions: [
        {
          id: "test1",
          question: "Вкажіть ваше ім'я та прізвище",

        },
        {
          id: "test2",
          question: "Вкажіть ваш номер телефону",
          help: "Тут тобі потрібно ввести номер мобільного телефону, щоб роботодавець міг з тобою зв’язатися.",

        },
        {
          id: "test3",
          question: "Вкажіть ваш e-mail",

        },
        {
          id: "test4",
          question: "Оберіть мови, якими ви володієте",

 
        },
        {
          id: "test5",
          question: "Додайте своє фото",

        },
        {
          id: "test6",
          question: "Вкажіть посаду, на яку ви претендуєте",

        },
        {
          id: "test7",
          question: "Давайте перевіримо ваші відповіді",

          confirmation: true,
        },
      ],
    },
  ];

//       palette: {
//   primary: ["#FF6A9F", "#EE598E"],
//   secondary: "#FFEEF4",
// },
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
              onPress={() => navigation.navigate("NavigationScreen", {
                data : resumeData,
                section: 'resume'
              })}
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
                onPress={() => navigation.navigate("NavigationScreen", {
                  data: coverLetterData,
                  section: 'letter'
                })}
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
