import tailwind from "twrnc";
import { View, Text, Pressable } from "react-native";

export default function LandingPage({navigation}) {
  const handleClick = () =>{
    navigation.navigate('SignUp');
  }
  return (
    <View style={tailwind`flex-1 w-full items-center justify-center bg-[#e68a00]`}>
      <Pressable onPress={handleClick}>
      <Text style={tailwind`text-4xl`}>
        <Text style={[tailwind`text-black font-bold`]}>Supa</Text>
        <Text style={[tailwind`text-white font-bold `]}>Menu</Text>
      </Text>
      </Pressable>
    </View>
  );
}


