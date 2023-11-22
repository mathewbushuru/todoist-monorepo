import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "config/colors";
import { type NativeStackScreenProps } from "@react-navigation/native-stack";

import Button from "../../components/ui/button";
import { type stackParamsList, type signupModalParamsList } from "../../App";

type mainPropTypes = NativeStackScreenProps<stackParamsList, "signupModal">;
type modalPropTypes = NativeStackScreenProps<
  signupModalParamsList,
  "signupProfile"
>;

export default function SignupProfileScreen() {
  const mainNavigation: mainPropTypes["navigation"] = useNavigation();
  const modalNavigation: modalPropTypes["navigation"] = useNavigation();
  
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
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
        <Text style={styles.title}>Thanks for your answers 🎉</Text>
        <Text style={styles.instructionText}>
          Congratulations for taking the first step towards feeling more
          organized.
        </Text>

        <View style={styles.card}>
          <Text style={styles.cardHeader}>Your Profile</Text>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>M</Text>
          </View>
          <Button
            variant="secondary"
            onPress={() => {}}
            containerStyles={styles.cardBtnContainer}
            textStyles={styles.cardBtnText}
            iconName="camera-outline"
            iconSize={22}
          >
            Upload Photo
          </Button>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>YOUR NAME</Text>
            <TextInput
              style={styles.input}
              value="Mathew"
              placeholder="Your name"
              autoFocus={false}
            />
          </View>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          variant="primary"
          onPress={() => {
            mainNavigation.getParent()?.goBack();
            mainNavigation.navigate("home");
          }}
          containerStyles={styles.button}
        >
          Launch Todoist
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingTop: 20,
    paddingBottom: 84,
    backgroundColor: Colors.background,
  },
  topContainer: {
    gap: 12,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "left",
    paddingHorizontal: 12,
    maxWidth: "100%",
  },
  instructionText: {
    paddingHorizontal: 12,
    color: Colors.muted,
    fontSize: 16,
    marginBottom: 32,
  },
  card: {
    alignItems: "center",
    gap: 18,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 8,
    padding: 18,
    marginHorizontal: 12,
  },
  cardHeader: {
    fontSize: 16,
    fontWeight: "bold",
  },
  avatar: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#06b6d4",
    width: 72,
    height: 72,
    borderRadius: 36,
  },
  avatarText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
  },
  cardBtnContainer: {
    alignSelf: "stretch",
  },
  cardBtnText: {
    fontWeight: "normal",
    fontSize: 18,
  },
  cardText: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.foreground,
  },
  inputContainer: {
    alignSelf: "stretch",
    gap: 4,
  },
  inputLabel: {
    color: Colors.muted,
    paddingHorizontal: 12,
    fontSize: 13,
  },
  input: {
    height: 48,
    marginVertical: 4,
    paddingHorizontal: 16,
    borderWidth: 0,
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    backgroundColor: Colors.secondaryBackground,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 12,
    paddingHorizontal: 12,
  },
  button: {
    flex: 1,
  },
  linkBtnContainer: {
    alignSelf: "flex-start",
  },
  linkBtnText: {
    fontWeight: "normal",
    fontSize: 18,
  },
});
