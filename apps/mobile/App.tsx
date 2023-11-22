// Third party imports
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Project imports
import { Colors } from "config/colors";

// General screen imports
import StartScreen from "./screens/start-screen";

export type stackParamsList = {
  start: undefined;
};

const Stack = createNativeStackNavigator<stackParamsList>();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="start"
          screenOptions={{
            headerStyle: { backgroundColor: Colors.primaryBackground },
            headerTintColor: Colors.primaryForeground,
            headerTitleStyle: { fontWeight: "bold" },
          }}
        >
          <Stack.Screen
            name="start"
            component={StartScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
