import { StyleSheet } from "react-native";
import tailwind from "twrnc";
import { Text, View } from "../components/Themed";

export default function LandingPage() {
  return (
    <View style={tailwind`flex-1 w-full items-center justify-center bg-amber-700`}>
      <Text>SupaMenu</Text>
    </View>
  );
}


