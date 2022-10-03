import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import SettingsSVG from "./SettingsSVG";

const HomeHeader = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate('SettingsScreen')
  }
  return (<View style={{ paddingVertical: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
    <Text>Створити документ</Text>
    {/* <View style={{ flexDirection: 'row' }}> */}
        <TouchableOpacity style={{ zIndex: 1, height: 50, width: 50, backgroundColor: "#F7F7F8", borderRadius: 15, justifyContent: 'center', alignItems: 'center'}} onPress={handlePress}>
            <SettingsSVG/>
        </TouchableOpacity>
    {/* </View> */}
  </View>)
};

export default HomeHeader;
