import React, {useState} from "react";
import { Dimensions, FlatList, Text, TouchableOpacity, View, Modal, Pressable } from "react-native";


function Item({ title, setModalVisible, modalVisible }) {
    return (
      <TouchableOpacity onPress={() => {setModalVisible(!modalVisible)}} style={{}}>
        <View
          style={{
            backgroundColor: '#FFFFFF',
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
            title: 'Мова',
            icon: '',
        },
        {
            id: 2,
            title: 'Про проект',
            icon: ''
        }
    ]
  return (
    <View style={{ backgroundColor: "#EBF5FF", paddingHorizontal: 15, height: Dimensions.get('window').height }}>
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
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={{height: Dimensions.get('window').height, justifyContent: 'center', alignItems: 'center'}}>
            <View style={{ backgroundColor:'#FFF', height: Dimensions.get('window').height / 3, width: Dimensions.get('window').width/ 1.2}}>
                <Pressable 
                    style={{backgroundColor: '#FF0000', alignItems: 'center', width: 100}}
                    onPress={()=> setModalVisible(false)}
                >
                    <Text>RU</Text>
                </Pressable>
                <Pressable 
                    style={{backgroundColor: '#FF0000', alignItems: 'center', width: 100}}
                    onPress={()=> setModalVisible(false)}
                >
                    <Text>EN</Text>
                </Pressable>
            </View>
        </View>
      </Modal>
    </View>
  );
};

export default SettingsScreen;
