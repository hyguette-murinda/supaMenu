import { View, Text, Pressable } from "react-native";
import tailwind from "twrnc";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
const SignUp = () =>{
    return (
        <View
          style={tailwind`flex-1 w-full items-center justify-center bg-amber-700`}
        >
          <View style={tailwind`px-4 w-full h-[70%] max-w-sm bg-white`}>
            <Text style={tailwind`text-5xl font-bold mb-6 `}>
            <Text style={[tailwind`text-black bold text-xl`]}>Supa</Text>
            <Text style={[tailwind`text-white bold text-xl`]}>Menu</Text>
            </Text>
            <Text>Welcome...</Text>
            <Text>Please fill in the information</Text>
    
            <View style={tailwind`flex flex-col gap-4`}>
              <TextInput placeholder="Enter email address" />
              <TextInput placeholder="Enter password" />
            </View>
    
            <View style={tailwind`flex flex-row justify-between items-center my-8`}>
              <View style={tailwind`flex-row items-center`}>
                <Pressable
                  style={tailwind`bg-gray-50 h-6 w-6 rounded-sm mr-2`}
                ></Pressable>
                <Text style={tailwind`text-gray-50`}>Remember me</Text>
              </View>
              <Pressable>
                <Text style={tailwind`text-gray-50 font-bold`}>Reset password</Text>
              </Pressable>
            </View>
    
            <Button text="Login" variant="success" />
          </View>
        </View>
      );
}
export default SignUp