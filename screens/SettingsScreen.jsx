import React, { useState } from "react";
import {
  Dimensions,
  FlatList,
  Text,
  TouchableOpacity,
  View,
  Modal,
  Pressable,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Item({ title, setModalVisible, modalVisible }) {
  return (
    <TouchableOpacity
      onPress={() => {
        setModalVisible(!modalVisible);
      }}
      style={{}}
    >
      <View
        style={{
          backgroundColor: "#FFFFFF",
          borderRadius: 10,
          padding: 10,
          marginBottom: 15,
          flexDirection: "row",
        }}
      >
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const SettingsScreen = ({ children, style, ...rest }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const renderItem = ({ item }) => {
    return (
      <Item
        title={item.title}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    );
  };
  const DATA = [
    {
      id: 1,
      title: "Мова",
      icon: "",
    },
    {
      id: 2,
      title: "Про проект",
      icon: "",
    },
  ];

  const handleLanguage = (lang) => {
    // Store the locale
    storeData(lang);
    // Close locale
    setModalVisible(false);
  };
  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem("@locale", value);
    } catch (e) {
      // saving error
    }
  };

//   const getData = async () => {
//     try {
//       let res = await AsyncStorage.getItem("@locale");
//         console.log('Stored Value: ',res)
//     } catch (e) {
//       // saving error
//       console.log(e)
//     }
//   };

  return (
    <View
      style={{
        backgroundColor: "#EBF5FF",
        paddingHorizontal: 15,
        height: Dimensions.get("window").height,
      }}
    >
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
        //   Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View
          style={{
            height: Dimensions.get("window").height,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              backgroundColor: "#FFF",
              height: Dimensions.get("window").height / 3,
              width: Dimensions.get("window").width / 1.2,
            }}
          >
            <Pressable
              style={{
                backgroundColor: "#FF0000",
                alignItems: "center",
                width: 100,
                padding: 30,
              }}
              value='ru'
              onPress={()=> handleLanguage('ru')}
            >
              <Text>RU</Text>
            </Pressable>
            <Pressable
              style={{
                backgroundColor: "#FF0",
                alignItems: "center",
                width: 100,
                marginTop: 10,
                padding: 30,
              }}
              onPress={()=> handleLanguage('en')}
            >
              <Text>EN</Text>
            </Pressable>
            <Pressable
              style={{
                backgroundColor: "#3dd",
                alignItems: "center",
                width: 100,
                marginTop: 10,
                padding: 30,
              }}
              onPress={()=> handleLanguage('uk')}
            >
              <Text>UA</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default SettingsScreen;
