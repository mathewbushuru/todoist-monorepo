import React from "react";
import { StyleSheet, View, type StyleProp, type ViewStyle } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "config/colors";

interface propTypes {
  selected: boolean;
  outerStyle?: StyleProp<ViewStyle>;
  innerStyle?: StyleProp<ViewStyle>;
}

export default function RadioButton({
  selected,
  outerStyle,
  innerStyle,
}: propTypes) {
  return (
    <View style={[styles.outer, outerStyle]}>
      {selected && (
        <View style={[styles.inner, innerStyle]}>
          <Ionicons name="checkmark-sharp" color="white" size={18} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  outer: {
    height: 24,
    width: 24,
    borderWidth: 2,
    borderColor: Colors.primaryBackground,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  inner: {
    justifyContent: "center",
    alignItems: "center",
    height: 24,
    width: 24,
    borderRadius: 12,
    backgroundColor: Colors.primaryBackground,
  },
});
