import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingPage from './screens/LandingPage';
import SignUp from './screens/SignUpScreen';
import SignIn from './screens/SignInScreen';
import QrcodeScreen from './screens/QrcodeScreen';
import NearbyRestoCard from './components/NearRestoComponent';
// import FeedbackScreen from './screens/feedbackScreen';

const Stack = createStackNavigator();
const App = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={LandingPage} options={{ headerShown: false }}/>
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
        <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }}/>
        <Stack.Screen name="qrcode" component={QrcodeScreen} options={{ headerShown: false }}/>
        {/* <Stack.Screen name="feedback" component={FeedbackScreen} options={{headerShown: false}} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
