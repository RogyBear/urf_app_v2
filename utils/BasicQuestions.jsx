

export const basicQuestions =  {
    id: "1",
    section: "personalInformation",
    title: "Базова інформація",
    palette: {
      primary: ["#65ADEE", "#3599F3"],
      secondary: "#EBF5FF",
    },
    icon: "",
    progress: 0.5, // Will be in context
    questions: [
      {
        id: "test1",
        type: "basic",
        section: "",
        question: "THis is question one",
        // children: (
        //     <Input
        //         key="name"
        //         placeholder='Наприклад, Тарас Шевченко'
        //         value={answers?.name}
        //         multiline
        //         handleBlur={(newInput) => {}}
        //         // style={styles.input}
        //     />
        // )
        // setAnswers(a  => ({ ...a, name: newInput }))
      },
      {
        id: "test2",
        type: "basic",
        question: "Question 2",
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
        type: "basic",
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
        type: "basic",
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
        type: "basic",
        question: "Додайте своє фото",
        // children: (
        //     <ImageUpload uploadStyles={{ marginTop: 50 }} />
        // )
      },
      {
        id: "test6",
        type: "basic",
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
        type: "basic",
        question: "Давайте перевіримо ваші відповіді",
        // children: (
        //     <QuestionConfirmationSections confSections={confirmationSections} />
        // ),
        confirmation: true,
      },
    ],
  }