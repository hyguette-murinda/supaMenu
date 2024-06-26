import React, {useState} from 'react'
import { View, Text, Pressable } from "react-native";
import tailwind from "twrnc";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import axios from 'axios';
const SignIn = () =>{
  const [userName, setuserName] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginPress = () => {
    navigation.navigate('SignIn');
  }
  
  const handleSignIn = async () => {
    if (!userName) {
      alert('Please fill in the form');
      return;
    }

    const url = `http://10.5.223.67:8080/api/user/${userName}`;

    try {
      const response = await axios.get(url, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.data) {
        console.log(response.data);
        console.log("Login successful");
      }
    } catch (err) {
      console.log('The pro error', err);
    }
  }
  const handleLogInPressAndSignIn = () =>{
    handleSignIn();
    handleLoginPress();
  }
    return (
      
        <View
          style={tailwind`flex-1 w-full items-center justify-center bg-[#e68a00]`}
        >
          <View style={tailwind`px-4 w-full h-[80%] max-w-sm bg-white mt-[58%] rounded-t-3xl`}>
            <Text style={tailwind`text-3xl font-bold pt-6 pb-4 text-center `}>
            <Text style={[tailwind`text-black`]}>Supa</Text>
            <Text style={[tailwind`text-[#e68a00] bold`]}>Menu</Text>
            </Text>
            <Text style={[tailwind`text-center text-[#004080] font-bold pb-2`]}>Welcome...</Text>
            <Text style={[tailwind`text-center  pb-2`]}>Sign in to continue</Text>
    
            <View style={tailwind`flex flex-col gap-4 mb-3`}>
              <TextInput placeholder="Enter username" value={userName} onChangeText={text =>setuserName(text)} />
              <TextInput placeholder="Enter password" secureTextEntry={true} value={password} onChangeText={text =>setPassword(text)}/>
            </View>
    
            <Button text="Login" variant="success" onPress={handleLogInPressAndSignIn} />
            <Text style={[tailwind`text-[#8c8c8c] text-center p-3`]}>OR</Text>
            <Button text="Login with Google" variant="default" />
            <Button text="Login with Facebook" variant="default" />
          </View>
          
        </View>
      );
}
export default SignIn