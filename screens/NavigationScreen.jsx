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
import { basicQuestions } from "../utils/BasicQuestions";
import { DataContext } from "../contexts/DataContext";

function Item({ id, title, palette, questionsLength, handlePress }) {
  const [answers, setAnswers] = useState();
  const { progress } = useContext(DataContext);
  // const isFocused = useIsFocused();
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
            progress={Object.values(progress)[id - 1] / (questionsLength - 1)}
            colors={palette.primary}
            style={{ height: 10, borderRadius: 100, backgroundColor: "#FFF" }}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const NavigationScreen = ({ navigation }) => {
  const [answers, setAnswers] = useState();
  const [index, setIndex] = useState(0);
  
  const DATA = [
    basicQuestions,
    {
      id: "2",
      title: "Освіта",
      key: 'education',
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
          // children: (
          //     <Input
          //         key="name"
          //         placeholder='Наприклад, Тарас Шевченко'
          //         // value={answers?.name}
          //         multiline
          //         handleBlur={(newInput: string) => {}}
          //         // style={styles.input}
          //     />
          // )
          // setAnswers(a  => ({ ...a, name: newInput }))
        },
        {
          id: "test2",
          question: "Вкажіть ваш номер телефону",
          help: "Тут тобі потрібно ввести номер мобільного телефону, щоб роботодавець міг з тобою зв’язатися.",
          // children: (
          //     <Input
          //         key="phone"
          //         placeholder='Наприклад, +38 (098) 987 76 65'
          //         // value={answers?.phone}
          //         multiline
          //         handleBlur={(newInput: string) => {}}
          //         // style={styles.input}
          //     />
          //     // setAnswers(a => ({ ...a, phone: newInput }))
          // )
        },
        {
          id: "test3",
          question: "Вкажіть ваш e-mail",
          // children: (
          //     <Input
          //         key="email"
          //         placeholder='Наприклад, example@gmail.com'
          //         value={answers?.email}
          //         multiline
          //         handleBlur={(newInput: string) => setAnswers(a => ({ ...a, email: newInput }))}
          //         style={styles.input}
          //     />
          // )
        },
        {
          id: "test4",
          question: "Оберіть мови, якими ви володієте",
          // children: (
          //     <View style={{ marginTop: 10, alignItems: 'center' }}>
          //         {
          //             answers?.languages && answers.languages.length > 0
          //                 ? answers?.languages?.map((language, idx) => (
          //                     <Dropdown
          //                         menuItems={
          //                             Object
          //                                 .keys(Languages)
          //                                 .filter(key => !answers?.languages?.includes(key))
          //                                 .map(key => ({ title: Languages[key as keyof object], value: key }))
          //                         }
          //                         onPress={newVal => updateLanguages(newVal, idx)}
          //                         placeholder={language ? Languages[language as keyof object] : "Оберіть мову"}
          //                         style={{ zIndex: '-' + idx }}
          //                         key={language || idx}
          //                     />
          //                 ))
          //                 : <Dropdown
          //                     menuItems={
          //                         Object
          //                             .keys(Languages)
          //                             .filter(key => !answers?.languages?.includes(key))
          //                             .map(key => ({ title: Languages[key as keyof object], value: key }))
          //                     }
          //                     onPress={newVal => updateLanguages(newVal)}
          //                     placeholder="Оберіть мову"
          //                 />
          //         }
          //         {
          //             (!answers?.languages || answers.languages.length < 3) &&
          //             <Button
          //                 primary
          //                 onPress={() => setAnswers(a => ({ ...a, languages: [...(a?.languages || []), ""] }))}
          //                 style={{ width: 200, marginTop: 30 }}
          //                 palette={{ primary: ['#FED255', '#F4BF2A'] }}
          //             >
          //                 <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
          //                     <Ionicons name='add' color="white" size={25} style={{ marginRight: 10 }} />
          //                     <Text style={{ color: 'white' }}>Добавити мову</Text>
          //                 </View>
          //             </Button>
          //         }
          //     </View>
          // )
        },
        {
          id: "test5",
          question: "Додайте своє фото",
          // children: (
          //     <ImageUpload uploadStyles={{ marginTop: 50 }} />
          // )
        },
        {
          id: "test6",
          question: "Вкажіть посаду, на яку ви претендуєте",
          // children: (
          //     <Input
          //         key="position"
          //         placeholder='Наприклад, вчитель української мови та літератури...'
          //         value={answers?.position}
          //         multiline
          //         handleBlur={(newInput: string) => setAnswers(a => ({ ...a, position: newInput }))}
          //         style={styles.input}
          //     />
          // )
        },
        {
          id: "test7",
          question: "Давайте перевіримо ваші відповіді",
          // children: (
          //     <QuestionConfirmationSections confSections={confirmationSections} />
          // ),
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
          // children: (
          //     <Input
          //         key="name"
          //         placeholder='Наприклад, Тарас Шевченко'
          //         // value={answers?.name}
          //         multiline
          //         handleBlur={(newInput: string) => {}}
          //         // style={styles.input}
          //     />
          // )
          // setAnswers(a  => ({ ...a, name: newInput }))
        },
        {
          id: "test2",
          question: "Вкажіть ваш номер телефону",
          help: "Тут тобі потрібно ввести номер мобільного телефону, щоб роботодавець міг з тобою зв’язатися.",
          // children: (
          //     <Input
          //         key="phone"
          //         placeholder='Наприклад, +38 (098) 987 76 65'
          //         // value={answers?.phone}
          //         multiline
          //         handleBlur={(newInput: string) => {}}
          //         // style={styles.input}
          //     />
          //     // setAnswers(a => ({ ...a, phone: newInput }))
          // )
        },
        {
          id: "test3",
          question: "Вкажіть ваш e-mail",
          // children: (
          //     <Input
          //         key="email"
          //         placeholder='Наприклад, example@gmail.com'
          //         value={answers?.email}
          //         multiline
          //         handleBlur={(newInput: string) => setAnswers(a => ({ ...a, email: newInput }))}
          //         style={styles.input}
          //     />
          // )
        },
        {
          id: "test4",
          question: "Оберіть мови, якими ви володієте",
          // children: (
          //     <View style={{ marginTop: 10, alignItems: 'center' }}>
          //         {
          //             answers?.languages && answers.languages.length > 0
          //                 ? answers?.languages?.map((language, idx) => (
          //                     <Dropdown
          //                         menuItems={
          //                             Object
          //                                 .keys(Languages)
          //                                 .filter(key => !answers?.languages?.includes(key))
          //                                 .map(key => ({ title: Languages[key as keyof object], value: key }))
          //                         }
          //                         onPress={newVal => updateLanguages(newVal, idx)}
          //                         placeholder={language ? Languages[language as keyof object] : "Оберіть мову"}
          //                         style={{ zIndex: '-' + idx }}
          //                         key={language || idx}
          //                     />
          //                 ))
          //                 : <Dropdown
          //                     menuItems={
          //                         Object
          //                             .keys(Languages)
          //                             .filter(key => !answers?.languages?.includes(key))
          //                             .map(key => ({ title: Languages[key as keyof object], value: key }))
          //                     }
          //                     onPress={newVal => updateLanguages(newVal)}
          //                     placeholder="Оберіть мову"
          //                 />
          //         }
          //         {
          //             (!answers?.languages || answers.languages.length < 3) &&
          //             <Button
          //                 primary
          //                 onPress={() => setAnswers(a => ({ ...a, languages: [...(a?.languages || []), ""] }))}
          //                 style={{ width: 200, marginTop: 30 }}
          //                 palette={{ primary: ['#FED255', '#F4BF2A'] }}
          //             >
          //                 <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
          //                     <Ionicons name='add' color="white" size={25} style={{ marginRight: 10 }} />
          //                     <Text style={{ color: 'white' }}>Добавити мову</Text>
          //                 </View>
          //             </Button>
          //         }
          //     </View>
          // )
        },
        {
          id: "test5",
          question: "Додайте своє фото",
          // children: (
          //     <ImageUpload uploadStyles={{ marginTop: 50 }} />
          // )
        },
        {
          id: "test6",
          question: "Вкажіть посаду, на яку ви претендуєте",
          // children: (
          //     <Input
          //         key="position"
          //         placeholder='Наприклад, вчитель української мови та літератури...'
          //         value={answers?.position}
          //         multiline
          //         handleBlur={(newInput: string) => setAnswers(a => ({ ...a, position: newInput }))}
          //         style={styles.input}
          //     />
          // )
        },
        {
          id: "test7",
          question: "Давайте перевіримо ваші відповіді",
          // children: (
          //     <QuestionConfirmationSections confSections={confirmationSections} />
          // ),
          confirmation: true,
        },
      ],
    },
    {
      id: "4",
      title: "Проекти або портфоліо",
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
          // children: (
          //     <Input
          //         key="name"
          //         placeholder='Наприклад, Тарас Шевченко'
          //         // value={answers?.name}
          //         multiline
          //         handleBlur={(newInput: string) => {}}
          //         // style={styles.input}
          //     />
          // )
          // setAnswers(a  => ({ ...a, name: newInput }))
        },
        {
          id: "test2",
          question: "Вкажіть ваш номер телефону",
          help: "Тут тобі потрібно ввести номер мобільного телефону, щоб роботодавець міг з тобою зв’язатися.",
          // children: (
          //     <Input
          //         key="phone"
          //         placeholder='Наприклад, +38 (098) 987 76 65'
          //         // value={answers?.phone}
          //         multiline
          //         handleBlur={(newInput: string) => {}}
          //         // style={styles.input}
          //     />
          //     // setAnswers(a => ({ ...a, phone: newInput }))
          // )
        },
        {
          id: "test3",
          question: "Вкажіть ваш e-mail",
          // children: (
          //     <Input
          //         key="email"
          //         placeholder='Наприклад, example@gmail.com'
          //         value={answers?.email}
          //         multiline
          //         handleBlur={(newInput: string) => setAnswers(a => ({ ...a, email: newInput }))}
          //         style={styles.input}
          //     />
          // )
        },
        {
          id: "test4",
          question: "Оберіть мови, якими ви володієте",
          // children: (
          //     <View style={{ marginTop: 10, alignItems: 'center' }}>
          //         {
          //             answers?.languages && answers.languages.length > 0
          //                 ? answers?.languages?.map((language, idx) => (
          //                     <Dropdown
          //                         menuItems={
          //                             Object
          //                                 .keys(Languages)
          //                                 .filter(key => !answers?.languages?.includes(key))
          //                                 .map(key => ({ title: Languages[key as keyof object], value: key }))
          //                         }
          //                         onPress={newVal => updateLanguages(newVal, idx)}
          //                         placeholder={language ? Languages[language as keyof object] : "Оберіть мову"}
          //                         style={{ zIndex: '-' + idx }}
          //                         key={language || idx}
          //                     />
          //                 ))
          //                 : <Dropdown
          //                     menuItems={
          //                         Object
          //                             .keys(Languages)
          //                             .filter(key => !answers?.languages?.includes(key))
          //                             .map(key => ({ title: Languages[key as keyof object], value: key }))
          //                     }
          //                     onPress={newVal => updateLanguages(newVal)}
          //                     placeholder="Оберіть мову"
          //                 />
          //         }
          //         {
          //             (!answers?.languages || answers.languages.length < 3) &&
          //             <Button
          //                 primary
          //                 onPress={() => setAnswers(a => ({ ...a, languages: [...(a?.languages || []), ""] }))}
          //                 style={{ width: 200, marginTop: 30 }}
          //                 palette={{ primary: ['#FED255', '#F4BF2A'] }}
          //             >
          //                 <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
          //                     <Ionicons name='add' color="white" size={25} style={{ marginRight: 10 }} />
          //                     <Text style={{ color: 'white' }}>Добавити мову</Text>
          //                 </View>
          //             </Button>
          //         }
          //     </View>
          // )
        },
        {
          id: "test5",
          question: "Додайте своє фото",
          // children: (
          //     <ImageUpload uploadStyles={{ marginTop: 50 }} />
          // )
        },
        {
          id: "test6",
          question: "Вкажіть посаду, на яку ви претендуєте",
          // children: (
          //     <Input
          //         key="position"
          //         placeholder='Наприклад, вчитель української мови та літератури...'
          //         value={answers?.position}
          //         multiline
          //         handleBlur={(newInput: string) => setAnswers(a => ({ ...a, position: newInput }))}
          //         style={styles.input}
          //     />
          // )
        },
        {
          id: "test7",
          question: "Давайте перевіримо ваші відповіді",
          // children: (
          //     <QuestionConfirmationSections confSections={confirmationSections} />
          // ),
          confirmation: true,
        },
      ],
    },
    {
      id: "5",
      title: "Навички",
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
          // children: (
          //     <Input
          //         key="name"
          //         placeholder='Наприклад, Тарас Шевченко'
          //         // value={answers?.name}
          //         multiline
          //         handleBlur={(newInput: string) => {}}
          //         // style={styles.input}
          //     />
          // )
          // setAnswers(a  => ({ ...a, name: newInput }))
        },
        {
          id: "test2",
          question: "Вкажіть ваш номер телефону",
          help: "Тут тобі потрібно ввести номер мобільного телефону, щоб роботодавець міг з тобою зв’язатися.",
          // children: (
          //     <Input
          //         key="phone"
          //         placeholder='Наприклад, +38 (098) 987 76 65'
          //         // value={answers?.phone}
          //         multiline
          //         handleBlur={(newInput: string) => {}}
          //         // style={styles.input}
          //     />
          //     // setAnswers(a => ({ ...a, phone: newInput }))
          // )
        },
        {
          id: "test3",
          question: "Вкажіть ваш e-mail",
          // children: (
          //     <Input
          //         key="email"
          //         placeholder='Наприклад, example@gmail.com'
          //         value={answers?.email}
          //         multiline
          //         handleBlur={(newInput: string) => setAnswers(a => ({ ...a, email: newInput }))}
          //         style={styles.input}
          //     />
          // )
        },
        {
          id: "test4",
          question: "Оберіть мови, якими ви володієте",
          // children: (
          //     <View style={{ marginTop: 10, alignItems: 'center' }}>
          //         {
          //             answers?.languages && answers.languages.length > 0
          //                 ? answers?.languages?.map((language, idx) => (
          //                     <Dropdown
          //                         menuItems={
          //                             Object
          //                                 .keys(Languages)
          //                                 .filter(key => !answers?.languages?.includes(key))
          //                                 .map(key => ({ title: Languages[key as keyof object], value: key }))
          //                         }
          //                         onPress={newVal => updateLanguages(newVal, idx)}
          //                         placeholder={language ? Languages[language as keyof object] : "Оберіть мову"}
          //                         style={{ zIndex: '-' + idx }}
          //                         key={language || idx}
          //                     />
          //                 ))
          //                 : <Dropdown
          //                     menuItems={
          //                         Object
          //                             .keys(Languages)
          //                             .filter(key => !answers?.languages?.includes(key))
          //                             .map(key => ({ title: Languages[key as keyof object], value: key }))
          //                     }
          //                     onPress={newVal => updateLanguages(newVal)}
          //                     placeholder="Оберіть мову"
          //                 />
          //         }
          //         {
          //             (!answers?.languages || answers.languages.length < 3) &&
          //             <Button
          //                 primary
          //                 onPress={() => setAnswers(a => ({ ...a, languages: [...(a?.languages || []), ""] }))}
          //                 style={{ width: 200, marginTop: 30 }}
          //                 palette={{ primary: ['#FED255', '#F4BF2A'] }}
          //             >
          //                 <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
          //                     <Ionicons name='add' color="white" size={25} style={{ marginRight: 10 }} />
          //                     <Text style={{ color: 'white' }}>Добавити мову</Text>
          //                 </View>
          //             </Button>
          //         }
          //     </View>
          // )
        },
        {
          id: "test5",
          question: "Додайте своє фото",
          // children: (
          //     <ImageUpload uploadStyles={{ marginTop: 50 }} />
          // )
        },
        {
          id: "test6",
          question: "Вкажіть посаду, на яку ви претендуєте",
          // children: (
          //     <Input
          //         key="position"
          //         placeholder='Наприклад, вчитель української мови та літератури...'
          //         value={answers?.position}
          //         multiline
          //         handleBlur={(newInput: string) => setAnswers(a => ({ ...a, position: newInput }))}
          //         style={styles.input}
          //     />
          // )
        },
        {
          id: "test7",
          question: "Давайте перевіримо ваші відповіді",
          // children: (
          //     <QuestionConfirmationSections confSections={confirmationSections} />
          // ),
          confirmation: true,
        },
      ],
    },
    {
      id: "6",
      title: "Досягнення",
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
          // children: (
          //     <Input
          //         key="name"
          //         placeholder='Наприклад, Тарас Шевченко'
          //         // value={answers?.name}
          //         multiline
          //         handleBlur={(newInput: string) => {}}
          //         // style={styles.input}
          //     />
          // )
          // setAnswers(a  => ({ ...a, name: newInput }))
        },
        {
          id: "test2",
          question: "Вкажіть ваш номер телефону",
          help: "Тут тобі потрібно ввести номер мобільного телефону, щоб роботодавець міг з тобою зв’язатися.",
          // children: (
          //     <Input
          //         key="phone"
          //         placeholder='Наприклад, +38 (098) 987 76 65'
          //         // value={answers?.phone}
          //         multiline
          //         handleBlur={(newInput: string) => {}}
          //         // style={styles.input}
          //     />
          //     // setAnswers(a => ({ ...a, phone: newInput }))
          // )
        },
        {
          id: "test3",
          question: "Вкажіть ваш e-mail",
          // children: (
          //     <Input
          //         key="email"
          //         placeholder='Наприклад, example@gmail.com'
          //         value={answers?.email}
          //         multiline
          //         handleBlur={(newInput: string) => setAnswers(a => ({ ...a, email: newInput }))}
          //         style={styles.input}
          //     />
          // )
        },
        {
          id: "test4",
          question: "Оберіть мови, якими ви володієте",
          // children: (
          //     <View style={{ marginTop: 10, alignItems: 'center' }}>
          //         {
          //             answers?.languages && answers.languages.length > 0
          //                 ? answers?.languages?.map((language, idx) => (
          //                     <Dropdown
          //                         menuItems={
          //                             Object
          //                                 .keys(Languages)
          //                                 .filter(key => !answers?.languages?.includes(key))
          //                                 .map(key => ({ title: Languages[key as keyof object], value: key }))
          //                         }
          //                         onPress={newVal => updateLanguages(newVal, idx)}
          //                         placeholder={language ? Languages[language as keyof object] : "Оберіть мову"}
          //                         style={{ zIndex: '-' + idx }}
          //                         key={language || idx}
          //                     />
          //                 ))
          //                 : <Dropdown
          //                     menuItems={
          //                         Object
          //                             .keys(Languages)
          //                             .filter(key => !answers?.languages?.includes(key))
          //                             .map(key => ({ title: Languages[key as keyof object], value: key }))
          //                     }
          //                     onPress={newVal => updateLanguages(newVal)}
          //                     placeholder="Оберіть мову"
          //                 />
          //         }
          //         {
          //             (!answers?.languages || answers.languages.length < 3) &&
          //             <Button
          //                 primary
          //                 onPress={() => setAnswers(a => ({ ...a, languages: [...(a?.languages || []), ""] }))}
          //                 style={{ width: 200, marginTop: 30 }}
          //                 palette={{ primary: ['#FED255', '#F4BF2A'] }}
          //             >
          //                 <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
          //                     <Ionicons name='add' color="white" size={25} style={{ marginRight: 10 }} />
          //                     <Text style={{ color: 'white' }}>Добавити мову</Text>
          //                 </View>
          //             </Button>
          //         }
          //     </View>
          // )
        },
        {
          id: "test5",
          question: "Додайте своє фото",
          // children: (
          //     <ImageUpload uploadStyles={{ marginTop: 50 }} />
          // )
        },
        {
          id: "test6",
          question: "Вкажіть посаду, на яку ви претендуєте",
          // children: (
          //     <Input
          //         key="position"
          //         placeholder='Наприклад, вчитель української мови та літератури...'
          //         value={answers?.position}
          //         multiline
          //         handleBlur={(newInput: string) => setAnswers(a => ({ ...a, position: newInput }))}
          //         style={styles.input}
          //     />
          // )
        },
        {
          id: "test7",
          question: "Давайте перевіримо ваші відповіді",
          // children: (
          //     <QuestionConfirmationSections confSections={confirmationSections} />
          // ),
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
    //       // children: (
    //       //     <Input
    //       //         key="name"
    //       //         placeholder='Наприклад, Тарас Шевченко'
    //       //         // value={answers?.name}
    //       //         multiline
    //       //         handleBlur={(newInput: string) => {}}
    //       //         // style={styles.input}
    //       //     />
    //       // )
    //       // setAnswers(a  => ({ ...a, name: newInput }))
    //     },
    //     {
    //       id: "test2",
    //       question: "Вкажіть ваш номер телефону",
    //       help: "Тут тобі потрібно ввести номер мобільного телефону, щоб роботодавець міг з тобою зв’язатися.",
    //       // children: (
    //       //     <Input
    //       //         key="phone"
    //       //         placeholder='Наприклад, +38 (098) 987 76 65'
    //       //         // value={answers?.phone}
    //       //         multiline
    //       //         handleBlur={(newInput: string) => {}}
    //       //         // style={styles.input}
    //       //     />
    //       //     // setAnswers(a => ({ ...a, phone: newInput }))
    //       // )
    //     },
    //     {
    //       id: "test3",
    //       question: "Вкажіть ваш e-mail",
    //       // children: (
    //       //     <Input
    //       //         key="email"
    //       //         placeholder='Наприклад, example@gmail.com'
    //       //         value={answers?.email}
    //       //         multiline
    //       //         handleBlur={(newInput: string) => setAnswers(a => ({ ...a, email: newInput }))}
    //       //         style={styles.input}
    //       //     />
    //       // )
    //     },
    //     {
    //       id: "test4",
    //       question: "Оберіть мови, якими ви володієте",
    //       // children: (
    //       //     <View style={{ marginTop: 10, alignItems: 'center' }}>
    //       //         {
    //       //             answers?.languages && answers.languages.length > 0
    //       //                 ? answers?.languages?.map((language, idx) => (
    //       //                     <Dropdown
    //       //                         menuItems={
    //       //                             Object
    //       //                                 .keys(Languages)
    //       //                                 .filter(key => !answers?.languages?.includes(key))
    //       //                                 .map(key => ({ title: Languages[key as keyof object], value: key }))
    //       //                         }
    //       //                         onPress={newVal => updateLanguages(newVal, idx)}
    //       //                         placeholder={language ? Languages[language as keyof object] : "Оберіть мову"}
    //       //                         style={{ zIndex: '-' + idx }}
    //       //                         key={language || idx}
    //       //                     />
    //       //                 ))
    //       //                 : <Dropdown
    //       //                     menuItems={
    //       //                         Object
    //       //                             .keys(Languages)
    //       //                             .filter(key => !answers?.languages?.includes(key))
    //       //                             .map(key => ({ title: Languages[key as keyof object], value: key }))
    //       //                     }
    //       //                     onPress={newVal => updateLanguages(newVal)}
    //       //                     placeholder="Оберіть мову"
    //       //                 />
    //       //         }
    //       //         {
    //       //             (!answers?.languages || answers.languages.length < 3) &&
    //       //             <Button
    //       //                 primary
    //       //                 onPress={() => setAnswers(a => ({ ...a, languages: [...(a?.languages || []), ""] }))}
    //       //                 style={{ width: 200, marginTop: 30 }}
    //       //                 palette={{ primary: ['#FED255', '#F4BF2A'] }}
    //       //             >
    //       //                 <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
    //       //                     <Ionicons name='add' color="white" size={25} style={{ marginRight: 10 }} />
    //       //                     <Text style={{ color: 'white' }}>Добавити мову</Text>
    //       //                 </View>
    //       //             </Button>
    //       //         }
    //       //     </View>
    //       // )
    //     },
    //     {
    //       id: "test5",
    //       question: "Додайте своє фото",
    //       // children: (
    //       //     <ImageUpload uploadStyles={{ marginTop: 50 }} />
    //       // )
    //     },
    //     {
    //       id: "test6",
    //       question: "Вкажіть посаду, на яку ви претендуєте",
    //       // children: (
    //       //     <Input
    //       //         key="position"
    //       //         placeholder='Наприклад, вчитель української мови та літератури...'
    //       //         value={answers?.position}
    //       //         multiline
    //       //         handleBlur={(newInput: string) => setAnswers(a => ({ ...a, position: newInput }))}
    //       //         style={styles.input}
    //       //     />
    //       // )
    //     },
    //     {
    //       id: "test7",
    //       question: "Давайте перевіримо ваші відповіді",
    //       // children: (
    //       //     <QuestionConfirmationSections confSections={confirmationSections} />
    //       // ),
    //       confirmation: true,
    //     },
    //   ],
    // },
  ];


  const renderItem = ({ item }) => {
    const { palette, questions, key } = item;
    const handlePress = () => {
      navigation.navigate("QuestionScreen", {
        palette: palette,
        questions: questions,
        key: key
      });
    };
    return (
      <Item
        title={item.title}
        handlePress={handlePress}
        palette={item.palette}
        questionsLength={questions.length}
        id={item.id}
        icon={item.icon}
      />
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }}>
      <StatusBar barStyle="dark-content" />
      <View style={{ flex: 1, margin: 15 }}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default NavigationScreen;
