import React, { useState } from 'react';
import { Button, TextInput } from 'react-native-paper';
import {
  StatusBar,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';

const SignupScreen = () => {
  
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [name,setName]= useState('')
  return (
    <>
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss();
    }}>
    <KeyboardAvoidingView behavior="position">
    <StatusBar backgroundColor="#2864FF" barStyle="light-content" />
    <Image
        style={styles.logo}
        source={require('../asset/logo.png')}
      />
      <TextInput
      label="Name"
      value={name}
      mode="outlined"
      style={styles.textfield}
      onChange={text=> setName(text)}
    />
    <TextInput
      label="Email"
      value={email}
      mode="outlined"
      style={styles.textfield}
      onChange={text=> setEmail(text)}
    />
    <TextInput
      label="Password"
      value={password}
      mode="outlined"
      style={styles.textfield}
      onChange={text=> setPassword(text)}
    />
    <Button 
    mode="contained" 
    style={styles.submitButton}
    onPress={()=>console.log("Press me")}
    >
     SignUp
    </Button>
    <TouchableOpacity>
    <Text
      style={styles.footer} 
      >Already have a account ?<Text style={{color:"#2864FF"}}> Login</Text></Text>
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

export default SignupScreen;
