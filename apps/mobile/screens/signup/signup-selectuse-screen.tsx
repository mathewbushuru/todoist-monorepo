import { useState } from "react";
import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "config/colors";
import { type NativeStackScreenProps } from "@react-navigation/native-stack";

import RadioButton from "../../components/ui/radio-button";
import Button from "../../components/ui/button";
import { type stackParamsList, type signupModalParamsList } from "../../App";

type mainPropTypes = NativeStackScreenProps<stackParamsList, "signupModal">;
type modalPropTypes = NativeStackScreenProps<
  signupModalParamsList,
  "signupSelectUse"
>;

export default function SignupSelectUseScreen() {
  const mainNavigation: mainPropTypes["navigation"] = useNavigation();
  const modalNavigation: modalPropTypes["navigation"] = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.title}>How do you plan to use Todoist</Text>
        <Text style={styles.instructionText}>Choose all that apply</Text>
        <UseCard
          selected={true}
          description="Personal"
          imgName="personal-use"
        />
        <UseCard selected={false} description="Work" imgName="work-use" />
        <UseCard
          selected={false}
          description="Education"
          imgName="education-use"
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          variant="secondary"
          onPress={() => {
            // navigation.popToTop();
            // navigation.goBack();
            mainNavigation.getParent()?.goBack();
            mainNavigation.navigate("home");
          }}
          containerStyles={styles.button}
        >
          Skip
        </Button>
        <Button
          variant="primary"
          onPress={() => {
            modalNavigation.navigate("signupSelectExperience");
          }}
          containerStyles={styles.button}
        >
          Continue
        </Button>
      </View>
    </View>
  );
}

function UseCard({
  selected,
  description,
  imgName,
}: {
  selected: boolean;
  description: string;
  imgName: string;
}) {
  const [selectedCard, setSelectedCard] = useState<boolean>(selected);
  const handlePress = () => {
    setSelectedCard((currentValue) => !currentValue);
  };
  return (
    <Pressable onPress={handlePress}>
      <View style={[styles.card, selectedCard && styles.cardSelected]}>
        <View style={styles.cardLeft}>
          {imgName === "personal-use" && (
            <Image
              source={require(`../../assets/imgs/personal-use.avif`)}
              style={styles.useImage}
            />
          )}
          {imgName === "work-use" && (
            <Image
              source={require(`../../assets/imgs/work-use.avif`)}
              style={styles.useImage}
            />
          )}
          {imgName === "education-use" && (
            <Image
              source={require(`../../assets/imgs/education-use.webp`)}
              style={styles.useImage}
            />
          )}
          <Text style={styles.cardText}>{description}</Text>
        </View>
        <RadioButton selected={selectedCard} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingTop: 60,
    paddingBottom: 84,
    backgroundColor: Colors.background,
  },
  topContainer: {
    gap: 12,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "left",
    paddingHorizontal: 12,
    maxWidth: "75%",
  },
  instructionText: {
    paddingHorizontal: 12,
    color: Colors.muted,
    fontSize: 16,
    marginBottom: 48,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 14,
    marginHorizontal: 12,
  },
  cardSelected: {
    borderColor: Colors.primaryBackground,
  },
  cardLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  useImage: {
    width: 480 / 6,
    height: 333 / 6,
  },
  cardText: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.foreground,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 12,
    paddingHorizontal: 12,
  },
  button: {
    flex: 1,
  },
});
