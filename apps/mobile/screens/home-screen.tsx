import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { type NativeStackScreenProps } from "@react-navigation/native-stack";

import Button from "../components/ui/button";
import { type stackParamsList } from "../App";

type propTypes = NativeStackScreenProps<stackParamsList, "home">;

export default function HomeScreen({
  navigation,
}: {
  navigation: propTypes["navigation"];
}) {
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.rootContainer}>
        <Text>HomeScreen</Text>
        <Button onPress={() => {}}>View tasks in inbox</Button>
        <Button variant="outline" onPress={() => navigation.navigate("start")}>
          Back to start page
        </Button>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
  },
});
