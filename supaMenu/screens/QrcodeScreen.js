import tailwind from "twrnc";
import { View, Text, Pressable } from "react-native";
import Search from "../components/Search";
import TextInput from "../components/TextInput";

export default function QrcodeScreen() {
  return (
    <View style={tailwind`flex-1 w-full items-center justify-center bg-[#e68a00]`}>
      <View>
      <Search placeholder="Search for your preferred restaurant" />
      <Text style={[tailwind`text-center p-8`]}>OR</Text>
      <Text style={[tailwind`text-center text-gray-700 font-bold text-2xl`]}>Scan, Pay & Enjoy!</Text>
      </View>
    </View>
  );
}


