import React from 'react';
import { Button, TextInput } from 'react-native-paper';
import {
  StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {  DefaultTheme,Provider as PaperProvider } from 'react-native-paper';
import SignupScreen from './screens/SignupScreen';
import LoginScreen from './screens/LoginScreen';
import LoadingScreen from './screens/LoadingScreen';
import CreateAdScreen from './screens/CreateAdScreen';
import HomeScreen from './screens/ListItemScreen';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#2864FF',
  },
}; 
const App = () => {
  return (
    <>
    
    <PaperProvider theme={theme}>
       <StatusBar backgroundColor="#2864FF" barStyle="light-content" />
       <LoginScreen/>
       {/* <SignupScreen/> */}
       {/* <CreateAdScreen/> */}
       {/* <HomeScreen/> */}
       {/* <LoadingScreen/> */}
       </PaperProvider>
    </>
  );
};

export default App;