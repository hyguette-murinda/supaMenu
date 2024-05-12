import React from 'react';
import { View } from 'react-native';
import LandingPage from './screens/LandingPage';

const App = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <LandingPage/>
    </View>
  );
};

export default App;
