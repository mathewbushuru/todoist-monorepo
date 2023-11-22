import { Text, View } from "react-native";
import { type NativeStackScreenProps } from "@react-navigation/native-stack";

import { type stackParamsList } from "../App";

type propTypes = NativeStackScreenProps<stackParamsList, "inbox">;

export default function InboxScreen({ navigation, route }: propTypes) {
  const { userId } = route.params;
  return (
    <View>
      <Text>InboxScreen</Text>
      <Text>Welcome {userId}</Text>
    </View>
  );
}

