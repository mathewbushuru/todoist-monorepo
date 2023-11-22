// Third party imports
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Package imports
import { Colors } from "config/colors";

// General screen imports
import StartScreen from "./screens/start-screen";
import HomeScreen from "./screens/home-screen";

// Components imports
import HeaderSettingsIcon from "./components/header-settings-icon";

export type stackParamsList = {
  start: undefined;
  home: undefined;
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
          <Stack.Screen
            name="home"
            component={HomeScreen}
            options={{
              title: "Welcome",
              headerRight: ({ tintColor }) => {
                return <HeaderSettingsIcon tintColor={tintColor} />;
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
