import { BASIC_INFO } from "./constants";


export const basicQuestions =  {
    id: "1",
    key: BASIC_INFO,
    title: "Базова інформація",
    palette: {
      primary: ["#65ADEE", "#3599F3"],
      secondary: "#EBF5FF",
    },
    icon: "",
    questions: [
      {
        id: 0,
        type: "basic",
        section: "",
        question: "This is question one",
     
      },
      {
        id: 1,
        type: "basic",
        question: "Question 2",
        help: "Тут тобі потрібно ввести номер мобільного телефону, щоб роботодавець міг з тобою зв’язатися.",
  
      },
      {
        id: 2,
        type: "basic",
        question: "Вкажіть ваш e-mail",
    
      },
      {
        id: 3,
        type: "basic",
        question: "Оберіть мови, якими ви володієте",
       
      },
      {
        id: 4,
        type: "basic",
        question: "Додайте своє фото",
       
      },
      {
        id: 5,
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
        id: 6,
        type: "basic",
        question: "Давайте перевіримо ваші відповіді",
        // children: (
        //     <QuestionConfirmationSections confSections={confirmationSections} />
        // ),
        confirmation: true,
      },
    ],
  }