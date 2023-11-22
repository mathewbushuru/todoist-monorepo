// Third party imports
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Package imports
import { Colors } from "config/colors";

// General screen imports
import StartScreen from "./screens/start-screen";
import HomeScreen from "./screens/home-screen";
import InboxScreen from "./screens/inbox-screen";
// Signup screen imports
import SignupEmailScreen from "./screens/signup/signup-email-screen";
import SignupPasswordScreen from "./screens/signup/signup-password-screen";
import SignupSelectUseScreen from "./screens/signup/signup-selectuse-screen";
import SignupSelectExperienceScreen from "./screens/signup/signup-selectexperience-screen";
import SignupProfileScreen from "./screens/signup/signup-profile-screen";

// Components imports
import HeaderSettingsIcon from "./components/header-settings-icon";

export type stackParamsList = {
  start: undefined;
  home: undefined;
  inbox: { userId: string };
  signupModal: undefined;
};

export type signupModalParamsList = {
  signupEmail: undefined;
  signupPassword: undefined;
  signupSelectUse: undefined;
  signupSelectExperience: undefined;
  signupProfile: undefined;
};

const Stack = createNativeStackNavigator<stackParamsList>();
const SignupModalStack = createNativeStackNavigator<signupModalParamsList>();

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
          <Stack.Screen
            name="inbox"
            component={InboxScreen}
            options={{ title: "All tasks" }}
            initialParams={{ userId: "some_dummy_id_for_now" }}
          />
          <Stack.Screen
            name="signupModal"
            component={SignupModalScreens}
            options={{ headerShown: false, presentation: "modal" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

function SignupModalScreens() {
  return (
    <SignupModalStack.Navigator screenOptions={{ headerShown: false }}>
      <SignupModalStack.Screen
        name="signupEmail"
        component={SignupEmailScreen}
      />
       <SignupModalStack.Screen
        name="signupPassword"
        component={SignupPasswordScreen}
      />
      <SignupModalStack.Screen
        name="signupSelectUse"
        component={SignupSelectUseScreen}
      />
      <SignupModalStack.Screen
        name="signupSelectExperience"
        component={SignupSelectExperienceScreen}
      />
      <SignupModalStack.Screen
        name="signupProfile"
        component={SignupProfileScreen}
      />
    </SignupModalStack.Navigator>
  );
}
