import { View, Text, StyleSheet } from "react-native";

export default function StartScreen() {
  return (
    <View style={styles.screen}>
      <Text>Start Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 70
  },
});
