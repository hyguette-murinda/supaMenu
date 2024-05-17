import React, {useState} from 'react'
import { View, Text, Pressable } from "react-native";
import tailwind from "twrnc";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import axios from 'axios';
const SignUp = ({navigation}) =>{
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginPress = () => {
    navigation.navigate('SignIn');
  }

  const handleProceedPress = () =>{
    navigation.navigate('qrcode');
  }

  const  handleSignUp = async () =>{
    
    if (!fullName || !password){
      alert('please fill the form')
      return;
    }
    try {
      
      const api = await fetch('http://10.5.220.184:8080/api/user/register', {
        method: 'POST',
        body: JSON.stringify({
          userName: fullName,
          password: password,
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await api.json();
      if (data) {
        console.log(data);
      }
    } catch (err) {
      console.log('The pro error', err);
    }
  }
  const handleSignUpAndProceedPress = () =>{
    handleSignUp();
    handleProceedPress();
  }

    return (
        <View
          style={tailwind`flex-1 w-full items-center justify-center bg-[#e68a00]`}
        >
          <View style={tailwind`px-4 w-full h-[90%] max-w-sm bg-white mt-[58%] rounded-t-3xl`}>
            <Text style={tailwind`text-3xl font-bold pt-6 pb-4 text-center `}>
            <Text style={[tailwind`text-black`]}>Supa</Text>
            <Text style={[tailwind`text-[#e68a00]`]}>Menu</Text>
            </Text>
            <Text style={[tailwind`text-center text-[#004080] font-bold pb-2`]}>Welcome...</Text>
            <Text style={[tailwind`text-center text-gray-500  pb-2`]}>Please fill in the information</Text>
    
            <View style={tailwind`flex flex-col gap-4 mb-3`}>
              <TextInput placeholder="Full Name" value={fullName} onChangeText={text =>setFullName(text)}/>
              <TextInput placeholder="Enter Password" secureTextEntry={true} value={password} onChangeText={text =>setPassword(text)} />
              {/* <TextInput placeholder="Your email" /> */}
            </View>
    
            <Button text="Proceed" variant="success" onPress={handleSignUpAndProceedPress}/>
            <Text style={[tailwind`text-[#8c8c8c] text-center p-1`]}>OR</Text>
            <Text style={[tailwind`text-center  pb-2`]}>if you have a PMG account</Text>
            <Button text="Login" variant="success" onPress={handleLoginPress} />
            <Text style={tailwind`text-gray-500 text-center mt-2`}>
              <Text style={tailwind``}>Don't have an account?</Text>
                <Text style={[tailwind`text-[#e68a00] font-bold`]}> Register</Text>
            </Text>
          </View>
          
        </View>
      );
}
export default SignUp