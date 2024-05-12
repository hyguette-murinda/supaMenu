import tailwind from "twrnc";
import { View, Text, Pressable } from "react-native";

export default function LandingPage() {
  return (
    <View style={tailwind`flex-1 w-full items-center justify-center bg-amber-700`}>
      <Text>
        <Text style={[tailwind`text-black bold text-xl`]}>Supa</Text>
        <Text style={[tailwind`text-white bold text-xl`]}>Menu</Text>
      </Text>
    </View>
  );
}


