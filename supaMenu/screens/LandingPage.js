import tailwind from "twrnc";
import { View, Text, Pressable } from "react-native";

export default function LandingPage() {
  return (
    <View style={tailwind`flex-1 w-full items-center justify-center bg-[#e68a00]`}>
      <Text style={tailwind`text-4xl`}>
        <Text style={[tailwind`text-black font-bold`]}>Supa</Text>
        <Text style={[tailwind`text-white font-bold `]}>Menu</Text>
      </Text>
    </View>
  );
}


