import { Test3 } from "@monorepo/utils/other/test3";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

import { Test1, Test2 } from "./other";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <StatusBar style="auto" />
      <Text>My App</Text>
      <Text>{Test1}</Text>
      <Text>{Test2}</Text>
      <Text>{Test3}</Text>
    </View>
  );
}
