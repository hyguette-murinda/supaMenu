import React from 'react';
import { View } from 'react-native';
import LandingPage from './screens/LandingPage';
import SignUp from './screens/SignUpScreen';
import SignIn from './screens/SignInScreen';
import QrcodeScreen from './screens/QrcodeScreen';

const App = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <QrcodeScreen/>
    </View>
  );
};

export default App;
