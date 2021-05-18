import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper'

const CreateAdScreen = () => {

    const [name, setName] = useState('')     // Name of Book
    const [desc, setDesc] = useState('')     // Description of Book
    const [typ, setTyp] = useState('')       // Type of Book (lend,donate,sell)
    const [price, setPrice] = useState('')   // Price of Book 
    const [phone, setPhone] = useState('')   // Phone Number of Seller
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Create Ad!</Text>
            <TextInput
                label="Title of Ad"
                value={name}
                mode="outlined"
                onChange={text => setName(text)}
            />
               <TextInput
                label="Decription what you are selling"
                value={desc}
                mode="outlined"
                numberOfLines={3}
                multiline={true}
                onChange={text => setDesc(text)}
            />
               <TextInput
                label="Type of Sale"
                value={typ}
                mode="outlined"
                onChange={text => setTyp(text)}
            />
               <TextInput
                label="Price in Rs."
                value={price}
                mode="outlined"
                onChange={text => setPrice(text)}
            />
               <TextInput
                label="Your Contact Number"
                value={phone}
                mode="outlined"
                onChange={text => setPhone(text)}
            />
            <Button
             mode="contained" 
             style={styles.submitButton}
             onPress={()=>console.log("Press me")}
            >
            +Upload Image
            </Button>

            <Button
             mode="contained" 
             style={styles.submitButton}
             onPress={()=>console.log("Press me")}
            >
            Post
            </Button>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        marginHorizontal:30,
        marginLeft:40,
        marginTop:12,
        justifyContent: "space-evenly",
        width:'80%'
    },
    text:{
        fontSize:22,
        textAlign:"center"
    },
    submitButton:{
        height:45,
        justifyContent:"center",
        alignContent:"center"
      },
});


export default CreateAdScreen
