import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useContext, useRef, useState } from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  FlatList,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import QuestionFooter from "../components/QuestionsFooter";
import QuestionHeader from "../components/QuestionsHeader";
import BasicQuestion from "../components/screens/QuestionScreen/BasicQuestion";
import { ProgressContext } from "../contexts/ProgressContext";
import { BASIC_INFO } from "../utils/constants";

// import ImageUpload from "../global-components/ImageUpload";

const Stack = createNativeStackNavigator();

const Item = ({ item, questionKey }) => {
  const handleComponentRender = () => {
    switch (item.type) {
      case "basic":
        return <BasicQuestion item={item} questionKey={questionKey} />;
      case "dropdown":
        break;
      default:
        break;
    }
  };

  return (
    <View
      style={{
        padding: 10,
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width,
      }}
    >
      {handleComponentRender()}
    </View>
  );
};

const QuestionTemplateScreen = ({ route, navigation: { goBack } }) => {
  const ref = useRef(null);
  const { progress, storeData } = useContext(ProgressContext);
  const [index, setIndex] = useState(progress[route.params.key]);

  const renderItem = ({ item }) => {
    return (
      <Item item={item} questionKey={route.params.key} />
    );
  };

  const handleBack = () => {
    if (index === 0) return;
    setIndex(index - 1);
  };
  const handleForward = () => {
    if (index === route.params.questions.length - 1) return;
    storeData(route.params.key, index + 1);
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
      style={[
        styles.background,
        { backgroundColor: route.params.palette.secondary },
      ]}
    >
      <View style={styles.innerBackground}>
        {/* setHelp={setHelp} */}
        <QuestionHeader
          palette={route.params.palette}
          progress={index / (route.params.questions.length - 1)}
          goBack={goBack}
        />
        <FlatList
          ref={ref}
          scrollEnabled={false}
          horizontal
          data={route.params.questions}
          initialScrollIndex={index}
          onScrollToIndexFailed={(info) => {
            // console.log(info);
            setIndex(progress[route.params.key]);
          }}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          snapToAlignment="start"
          decelerationRate={"fast"}
          snapToInterval={Dimensions.get("window").width}
          contentContainerStyle={{}}
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
