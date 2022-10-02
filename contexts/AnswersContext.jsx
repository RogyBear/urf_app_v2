import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  ACHIEVMENTS,
  BASIC_INFO,
  EDUCATION,
  PORTFOLIO,
  SKILLS,
  WORK,
} from "../utils/constants";

export const AnswersContext = createContext();

export const AnswersProvider = ({ value, children }) => {
  const [answer, setAnswer] = useState({
    [BASIC_INFO]: {},
    [EDUCATION]: {},
    [WORK]: {},
    [PORTFOLIO]: {},
    [SKILLS]: {},
    [ACHIEVMENTS]: {},
  });

  const saveInput = async (name, index, value) => {
    let obj = { ...answer, [name]: {...answer[name],[index]: value} };
    let objStr = JSON.stringify(obj);
    let res;
    try {
      await AsyncStorage.setItem("@answers", objStr);
      res = await AsyncStorage.getItem("@answers");
      setAnswer(JSON.parse(res))
    } catch (e) {
      // saving error
    }
  };
  const getData = async () => {
    try {
      // await AsyncStorage.setItem("@progress", JSON.stringify(progress)); // DATA RESET
      const value = await AsyncStorage.getItem("@answers");
      // set variable with the basic information
      value && setAnswer(JSON.parse(value));
    } catch (e) {
      // error reading value
      return;
    }
  };

  useEffect(() => {
    // Load Data in useEffect
    getData();
  }, []);

  return (
    <AnswersContext.Provider value={{answer ,setAnswer, saveInput}}>{children}</AnswersContext.Provider>
  );
};
