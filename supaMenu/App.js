import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingPage from './screens/LandingPage';
import SignUp from './screens/SignUpScreen';
import SignIn from './screens/SignInScreen';
import QrcodeScreen from './screens/QrcodeScreen';
import NearbyRestoCard from './components/NearRestoComponent';


const Stack = createStackNavigator();
const App = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="landing" component={LandingPage} />
        <Stack.Screen name="Home" component={SignUp} />
        <Stack.Screen name="SignIn" component={SignIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
