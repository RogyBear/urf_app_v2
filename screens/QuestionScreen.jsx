import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  View,
  Button,
  Text,
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  Dimensions,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";
import QuestionFooter from "../components/QuestionsFooter";
import QuestionHeader from "../components/QuestionsHeader";

// import ImageUpload from "../global-components/ImageUpload";

const Stack = createNativeStackNavigator();

// function TestScreen({route, navigation}: TestProps) {

//     return (
//         <View  style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//             {/* {route.params.question.children}
//             <Text>{route.params.question.question}</Text> */}
//             <Button title="Pop" onPress={()=>{
//                 navigation.pop()
//             }} />
//             <Button title="Navigate" onPress={()=>{
//                 navigation.navigate(`screen${route.params.nextScreen}`)
//             }} />
//         </View>
//     );
// }

const Item = ({ question }) => { // QUestion Template
  return (
    <View
      style={{
        padding: 10,
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width,
      }}
    >
      {/* Giant switch statement */}
   {/* <input type='text' name='theInput' value='test' onChange={(e)=>{
      const {name, value} = e.target;
      setValue((prevState)=> ({...prevState, [name] : value}))
   }}/> */}
{/* 
      switch(){
        case 'basic': <Component/>
        break;
        case 'dropdown': <Component/>
        break;
        case 'multipleChoice': <Component/>
        break;
        case 'basic': <Component/>
        break;
        case 'basic': <Component/>
        break;
        case 'basic': <Component/>
        break;
      } */}
      <Text style={{ fontFamily: 'Nunito', color: '#082844', fontSize: 28, fontWeight: '700'}}>{question}</Text>
      <TextInput
        style={{ padding: 15, fontSize: 18, borderColor: "gray", borderWidth: 1, backgroundColor: '#FFF', borderRadius: 20 }}
        // onChangeText={onChangeText}
      />
    </View>
  );
};

const QuestionTemplateScreen = ({ route, navigation: { goBack } }) => {
  const [answers, setAnswers] = useState();
  const ref = useRef(null);
  const [index, setIndex] = useState(0);
  // const confirmationSections = useMemo(() => {
  //     return [
  //         {
  //             title: 'Особиста інфомація',
  //             info: ["Тарас Шевченко", "+38 (098) 876 78 76", "taras_shevchenko@gmail.com"] // answers?.name, answers?.phone, answers?.email
  //         },
  //         {
  //             title: 'Мови',
  //             info: ["Українська — рідна", "Англійська — В2 Upper-Intermediate", "Німецька — A2 Grundlagen"]
  //         },
  //         {
  //             title: 'Посада, на яку претендуєте',
  //             info: ['Вчитель української мови та літератури']
  //         },
  //         {
  //             title: 'Фото',
  //             component: <ImageUpload />
  //         }
  //     ]
  // }, [answers])

  // const questions = [
  //     {
  //         id: 'test1',
  //         question: "Вкажіть ваше ім'я та прізвище",
  //         // children: (
  //         //     <Input
  //         //         key="name"
  //         //         placeholder='Наприклад, Тарас Шевченко'
  //         //         // value={answers?.name}
  //         //         multiline
  //         //         handleBlur={(newInput: string) => {}}
  //         //         // style={styles.input}
  //         //     />
  //         // )
  //         // setAnswers(a  => ({ ...a, name: newInput }))
  //     },
  //     {
  //         id: 'test2',
  //         question: "Вкажіть ваш номер телефону",
  //         help: "Тут тобі потрібно ввести номер мобільного телефону, щоб роботодавець міг з тобою зв’язатися.",
  //         // children: (
  //         //     <Input
  //         //         key="phone"
  //         //         placeholder='Наприклад, +38 (098) 987 76 65'
  //         //         // value={answers?.phone}
  //         //         multiline
  //         //         handleBlur={(newInput: string) => {}}
  //         //         // style={styles.input}
  //         //     />
  //         //     // setAnswers(a => ({ ...a, phone: newInput }))
  //         // )
  //     },
  //     {
  //         id: 'test3',
  //         question: "Вкажіть ваш e-mail",
  //         // children: (
  //         //     <Input
  //         //         key="email"
  //         //         placeholder='Наприклад, example@gmail.com'
  //         //         value={answers?.email}
  //         //         multiline
  //         //         handleBlur={(newInput: string) => setAnswers(a => ({ ...a, email: newInput }))}
  //         //         style={styles.input}
  //         //     />
  //         // )
  //     },
  //     {
  //         id: 'test4',
  //         question: "Оберіть мови, якими ви володієте",
  //         // children: (
  //         //     <View style={{ marginTop: 10, alignItems: 'center' }}>
  //         //         {
  //         //             answers?.languages && answers.languages.length > 0
  //         //                 ? answers?.languages?.map((language, idx) => (
  //         //                     <Dropdown
  //         //                         menuItems={
  //         //                             Object
  //         //                                 .keys(Languages)
  //         //                                 .filter(key => !answers?.languages?.includes(key))
  //         //                                 .map(key => ({ title: Languages[key as keyof object], value: key }))
  //         //                         }
  //         //                         onPress={newVal => updateLanguages(newVal, idx)}
  //         //                         placeholder={language ? Languages[language as keyof object] : "Оберіть мову"}
  //         //                         style={{ zIndex: '-' + idx }}
  //         //                         key={language || idx}
  //         //                     />
  //         //                 ))
  //         //                 : <Dropdown
  //         //                     menuItems={
  //         //                         Object
  //         //                             .keys(Languages)
  //         //                             .filter(key => !answers?.languages?.includes(key))
  //         //                             .map(key => ({ title: Languages[key as keyof object], value: key }))
  //         //                     }
  //         //                     onPress={newVal => updateLanguages(newVal)}
  //         //                     placeholder="Оберіть мову"
  //         //                 />
  //         //         }
  //         //         {
  //         //             (!answers?.languages || answers.languages.length < 3) &&
  //         //             <Button
  //         //                 primary
  //         //                 onPress={() => setAnswers(a => ({ ...a, languages: [...(a?.languages || []), ""] }))}
  //         //                 style={{ width: 200, marginTop: 30 }}
  //         //                 palette={{ primary: ['#FED255', '#F4BF2A'] }}
  //         //             >
  //         //                 <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
  //         //                     <Ionicons name='add' color="white" size={25} style={{ marginRight: 10 }} />
  //         //                     <Text style={{ color: 'white' }}>Добавити мову</Text>
  //         //                 </View>
  //         //             </Button>
  //         //         }
  //         //     </View>
  //         // )
  //     },
  //     {
  //         id: 'test5',
  //         question: "Додайте своє фото",
  //         // children: (
  //         //     <ImageUpload uploadStyles={{ marginTop: 50 }} />
  //         // )
  //     },
  //     {
  //         id: 'test6',
  //         question: "Вкажіть посаду, на яку ви претендуєте",
  //         // children: (
  //         //     <Input
  //         //         key="position"
  //         //         placeholder='Наприклад, вчитель української мови та літератури...'
  //         //         value={answers?.position}
  //         //         multiline
  //         //         handleBlur={(newInput: string) => setAnswers(a => ({ ...a, position: newInput }))}
  //         //         style={styles.input}
  //         //     />
  //         // )
  //     },
  //     {
  //         id: 'test7',
  //         question: "Давайте перевіримо ваші відповіді",
  //         // children: (
  //         //     <QuestionConfirmationSections confSections={confirmationSections} />
  //         // ),
  //         confirmation: true
  //     }
  // ]

  const renderItem = ({ item }) => {
    return <Item question={item.question} />;
  };

  const handleBack = () => {
    if (index === 0) return;
    setIndex(index - 1);
  };
  const handleForward = () => {
    if (index === route.params.questions.length - 1) return;
    setIndex(index + 1);
  };

  useEffect(() => {
    ref.current?.scrollToIndex({
      index: index,
      animated: true,
    });
  }, [index]);

  return (
    <SafeAreaView
      // source={require(`../assets/backgrounds/background-blue.png`)}
      // resizeMode="cover"
      style={[
        styles.background,
        { backgroundColor: route.params.palette.secondary },
      ]}
    >
      <View style={styles.innerBackground}>
        {/* setHelp={setHelp} */}
        <QuestionHeader
          color={route.params.palette.primary[1]}
          progress={index / (route.params.questions.length - 1)}
          goBack={goBack}
        />
        <FlatList
          ref={ref}
          scrollEnabled={false}
          horizontal
          data={route.params.questions}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          snapToAlignment="start"
          decelerationRate={"fast"}
          snapToInterval={Dimensions.get("window").width}
          contentContainerStyle={{  }}
          style={{
            height: Dimensions.get("window").height,
            width: Dimensions.get("window").width,
          }}
        />

        <QuestionFooter
          handleForward={handleForward}
          handleBack={handleBack}
          palette={route.params.palette}
          totalQuestions={route.params.questions.length}
          confirmation={false}
          // questions[index].confirmation
          // setOpenConfirm={setOpenConfirm}
        />
      </View>
    </SafeAreaView>
  );
};

export default QuestionTemplateScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    // width: Dimensions.get('window').width,
    // height: Dimensions.get('window').height,
    // paddingHorizontal: 15,
    // paddingTop: 20,
    // paddingBottom: 40,
  },
  innerBackground: {
    padding: 15,
  },
});
