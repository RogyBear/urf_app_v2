import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const DataContext = createContext();

export const DataProvider = ({ value, children }) => {
  const [basicInformation, setBasicInformation] = useState({});

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem("@basicInfo", value);
    } catch (e) {
      // saving error
    }
  };
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("@basicInfo");
      // set variable with the basic information
      value && setBasicInformation(value);
    } catch (e) {
      // error reading value
      return;
    }
  };

  let [flag, setFlag] = useState(false);
  useEffect(() => {
    // Load Data in useEffect
    getData();
  }, []);

  useEffect(() => {
    // When basic information updates, save the data to the phone
    if (flag) {
      console.log("Yo, I was called because the basic info updated. Whaaa!");
    }
    setFlag(true);
  }, [basicInformation]);

  return <DataContext.Provider value={{}}>{children}</DataContext.Provider>;
};
