import { Test1 } from "@monorepo/utils/common/test1";
import { Test2 } from "@monorepo/utils/common/test2";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

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
    </View>
  );
}
