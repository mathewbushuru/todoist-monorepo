import { useState } from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "config/colors";
import { type NativeStackScreenProps } from "@react-navigation/native-stack";

import RadioButton from "../../components/ui/radio-button";
import Button from "../../components/ui/button";
import { type stackParamsList, type signupModalParamsList } from "../../App";

type mainPropTypes = NativeStackScreenProps<stackParamsList, "signupModal">;
type modalPropTypes = NativeStackScreenProps<
  signupModalParamsList,
  "signupSelectExperience"
>;

export default function SignupSelectExperienceScreen() {
  const mainNavigation: mainPropTypes["navigation"] = useNavigation();
  const modalNavigation: modalPropTypes["navigation"] = useNavigation();
  
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.title}>
          How experienced are you with productivity apps?
        </Text>
        <Text style={styles.instructionText}>
          Choose whichever applies most.
        </Text>
        <UseCard
          selected={false}
          description="Beginner"
          imgName="beginner-exp"
        />
        <UseCard
          selected={false}
          description="Intermediate"
          imgName="intermediate-exp"
        />
        <UseCard
          selected={false}
          description="Productivity Pro"
          imgName="pro-exp"
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          variant="secondary"
          onPress={() => {
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
            modalNavigation.navigate("signupProfile");
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
          {imgName === "beginner-exp" && (
            <Image
              source={require(`../../assets/imgs/beginner-exp.webp`)}
              style={styles.useImage}
            />
          )}
          {imgName === "intermediate-exp" && (
            <Image
              source={require(`../../assets/imgs/intermediate-exp.webp`)}
              style={styles.useImage}
            />
          )}
          {imgName === "pro-exp" && (
            <Image
              source={require(`../../assets/imgs/pro-exp.avif`)}
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
    fontSize: 27,
    fontWeight: "bold",
    textAlign: "left",
    paddingHorizontal: 12,
    maxWidth: "95%",
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
