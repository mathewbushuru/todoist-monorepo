import React from "react";
import {
  Pressable,
  View,
  Text,
  StyleSheet,
  type StyleProp,
  type ViewStyle,
  type TextStyle,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Colors } from "../../constants/colors";

interface propsType {
  variant?: "default" | "outline" | "primary" | "link" | "secondary";
  onPress: () => void;
  iconName?: keyof typeof Ionicons.glyphMap;
  containerStyles?: StyleProp<ViewStyle>;
  textStyles?: StyleProp<TextStyle>;
  iconSize?: number;
  children: React.ReactNode;
}

export default function Button({
  variant = "default",
  onPress,
  iconName,
  containerStyles,
  textStyles,
  iconSize = 18,
  children,
}: propsType) {
  let buttonContainerStyles, buttonTextStyles, iconColor;

  switch (variant) {
    case "outline":
      buttonContainerStyles = styles.buttonContainerOutline;
      buttonTextStyles = styles.buttonTextOutline;
      iconColor = Colors.black;
      break;

    case "primary":
      buttonContainerStyles = styles.buttonContainerPrimary;
      buttonTextStyles = styles.buttonText;
      iconColor = Colors.primaryForeground;
      break;

    case "secondary":
      buttonContainerStyles = styles.buttonContainerSecondary;
      buttonTextStyles = styles.buttonTextSecondary;
      iconColor = Colors.black;
      break;

    case "link":
      buttonContainerStyles = styles.buttonContainerLink;
      buttonTextStyles = styles.buttonTextLink;
      iconColor = Colors.primaryBackground;
      break;

    default:
      buttonContainerStyles = styles.buttonContainer;
      buttonTextStyles = styles.buttonText;
      iconColor = Colors.background;
  }

  return (
    <View style={[buttonContainerStyles, containerStyles]}>
      <Pressable style={styles.pressableContainer} onPress={onPress}>
        {iconName && (
          <Ionicons name={iconName} size={iconSize} color={iconColor} />
        )}
        <Text style={[buttonTextStyles, textStyles]}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  // button container
  buttonContainer: {
    backgroundColor: Colors.black,
    borderRadius: 8,
  },
  buttonContainerOutline: {
    borderColor: Colors.black,
    borderWidth: 2,
    borderRadius: 8,
  },
  buttonContainerPrimary: {
    backgroundColor: Colors.primaryBackground,
    borderRadius: 8,
  },
  buttonContainerSecondary: {
    backgroundColor: Colors.secondaryBackground,
    borderRadius: 8,
  },
  buttonContainerLink: {
    backgroundColor: "transparent",
    borderRadius: 8,
  },
  // button text
  buttonText: {
    color: Colors.background,
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonTextOutline: {
    color: Colors.black,
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonTextSecondary: {
    color: Colors.popoverForeground,
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonTextLink: {
    color: Colors.primaryBackground,
    fontSize: 16,
    fontWeight: "bold",
  },
  // pressable
  pressableContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    padding: 12,
  },
});
