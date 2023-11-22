import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function HeaderSettingsIcon({
  tintColor,
}: {
  tintColor: string | undefined;
}) {
  return (
    <Pressable onPress={() => console.log("open settings")}>
      <Ionicons name="settings-outline" color={tintColor} size={22} />
    </Pressable>
  );
}
