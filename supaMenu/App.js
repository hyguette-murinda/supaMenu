import React from 'react';
import { View } from 'react-native';
import LandingPage from './screens/LandingPage';
import SignUp from './screens/SignUpScreen';
import SignUp from './screens/SignInScreen';

const App = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <SignUp/>
    </View>
  );
};

export default App;
