import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ACHIEVMENTS, BASIC_INFO, EDUCATION, PORTFOLIO, SKILLS, WORK } from "../utils/constants";

export const DataContext = createContext();

export const DataProvider = ({ value, children }) => {
  const [progress, setProgress] = useState({
    [BASIC_INFO]: 0,
    [EDUCATION]: 0,
    [WORK]: 0,
    [PORTFOLIO]: 0,
    [SKILLS]: 0,
    [ACHIEVMENTS]: 0,
  });

  const storeData = async (name, value) => {
    let obj = { ...progress, [name]: value };
    let objStr = JSON.stringify(obj);
    let res;
    try {
      await AsyncStorage.setItem("@progress", objStr);
      res = await AsyncStorage.getItem("@progress");
      setProgress(JSON.parse(res));
    } catch (e) {
      // saving error
    }
  };
  const getData = async () => {
    try {
        // await AsyncStorage.setItem("@progress", JSON.stringify(progress)); // DATA RESET
      const value = await AsyncStorage.getItem("@progress");
      // set variable with the basic information
      value && setProgress(JSON.parse(value));
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
    <DataContext.Provider value={{ progress, setProgress, storeData }}>
      {children}
    </DataContext.Provider>
  );
};
