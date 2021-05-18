import React from 'react';
import { Button, TextInput } from 'react-native-paper';
import {
  ActivityIndicator,
  View,
  StyleSheet
} from 'react-native';

const LoadingScreen = () => {
  return (
    <>
    <View style={styles.loading}>
    <ActivityIndicator size="large" color="#2864FF"/>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
    loading:{
      flex:1,
      justifyContent:"center",
      alignItems:"center"
    }
});
  
export default LoadingScreen;
