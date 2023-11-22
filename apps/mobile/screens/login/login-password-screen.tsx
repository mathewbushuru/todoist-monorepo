import { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "config/colors";
import { type NativeStackScreenProps } from "@react-navigation/native-stack";

import Button from "../../components/ui/button";
import { type stackParamsList, type loginModalParamsList } from "../../App";

type mainPropTypes = NativeStackScreenProps<stackParamsList, "loginModal">;
type modalPropTypes = NativeStackScreenProps<
  loginModalParamsList,
  "loginPassword"
>;

export default function LoginPasswordScreen() {
  const modalNavigation: modalPropTypes["navigation"] = useNavigation();
  const mainNavigation: mainPropTypes["navigation"] = useNavigation();
  const [password, onChangePassword] = useState<string>("");

  return (
    <View style={styles.container}>
      <Button
        variant="link"
        iconName="chevron-back"
        iconSize={22}
        containerStyles={styles.linkBtnContainer}
        textStyles={styles.linkBtnText}
        onPress={() => {
          modalNavigation.goBack();
        }}
      >
        Back
      </Button>
      <Text style={styles.title}>Log in with your password</Text>
      <Text style={styles.emailText}>
        Using <Text style={styles.emailTextBold}>email@test.com</Text> to log in
      </Text>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>YOUR PASSWORD</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          value={password}
          placeholder="Password"
          keyboardType="visible-password"
          secureTextEntry={true}
          autoFocus={true}
        />
        <Button
          variant="primary"
          onPress={() => {
            console.log("TODO: validate password input");
            mainNavigation.getParent()?.goBack();
            mainNavigation.navigate("home");
          }}
        >
          Log in
        </Button>
        <Text style={styles.forgotPasswordText}>Forgot your password</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 4,
    paddingHorizontal: 12,
    paddingVertical: 18,
    backgroundColor: Colors.secondaryBackground,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "left",
    paddingHorizontal: 12,
  },
  emailText: {
    marginTop: 12,
    paddingHorizontal: 12,
    color: Colors.muted,
    fontSize: 15,
  },
  emailTextBold: {
    fontWeight: "bold",
  },
  inputContainer: {
    gap: 4,
    paddingHorizontal: 12,
    marginTop: 84,
  },
  inputLabel: {
    color: Colors.muted,
  },
  input: {
    height: 48,
    marginVertical: 12,
    borderWidth: 0,
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    backgroundColor: Colors.popoverBackground,
  },
  forgotPasswordText: {
    color: Colors.muted,
    marginTop: 8,
    textAlign: "center",
    textDecorationLine: "underline",
  },
  linkBtnContainer: {
    alignSelf: "flex-start",
  },
  linkBtnText: {
    fontWeight: "normal",
    fontSize: 18,
  },
});
