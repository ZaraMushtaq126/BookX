import React, { useState } from 'react';
import { Button, TextInput } from 'react-native-paper';
import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';

const LoginScreen = () => {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  return (
    <>
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss();
    }}>
    <KeyboardAvoidingView behavior="position">
    <Image
        style={styles.logo}
        source={require('../asset/logo.png')}
      />
    
    <TextInput
      label="Email"
      mode="outlined"
      name={email}
      style={styles.textfield}
      onChange={text=> setEmail(text)}
    />
    <TextInput
      label="Password"
      value={password}
      mode="outlined"
      style={styles.textfield}
      secureTextEntry={true}
      onChange={text=> setPassword(text)}
    />
    <Button 
    mode="contained" 
    style={styles.submitButton}
    onPress={()=>console.log("Press me")}
    >
     Login
    </Button>
    <TouchableOpacity>
    <Text
      style={styles.footer} 
      >Don't have a account ?<Text style={{color:"#2864FF"}}> Sign Up</Text></Text>
      </TouchableOpacity>
      </KeyboardAvoidingView>
      </TouchableWithoutFeedback> 
    </>
  );
};

const styles = StyleSheet.create({
  logo:{
    height:110,
    width:80,
    marginLeft:155,
    marginTop:100,
    marginBottom:20

  },
  textfield:{
    marginLeft:40,
    marginTop:12,
    height:45,
    width:'80%',
   },
  submitButton:{
    marginLeft:40,
    marginTop:18,
    height:45,
    width:'80%',
    justifyContent:"center",
    alignContent:"center"
  },
  footer:{
    fontSize:18,
    marginLeft:40,
    marginTop:20,
    color:"#3b3b3b"
  }
  
});

export default LoginScreen;
