import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native";
import { colors } from "../global/colors";


const InputForm = ({label, error, onChange,isSecure})=>{

    const[input,setInput] = useState("")
    const onChangeText = (text) =>{
        setInput(text);
        onChange(text);
    }


    return(

        <View style={styles.inputContainer}>
            <Text style={styles.text}>{label}</Text>
            <TextInput style={styles.input} 
            value={input} 
            onChangeText={onChangeText} 
            secureTextEntry={isSecure}/>
            {error ? <Text style={styles.error}>{error}</Text> : null}
        </View>




    )
}

const styles = StyleSheet.create({
    inputContainer: {
      marginBottom: 16,
    },
    input: {
      borderWidth: 1,
      width: 200,
      borderColor: colors.blue_400,
      borderRadius: 8,
      padding: 10,
      fontSize: 16,
      backgroundColor: colors.blue_200,
    },
    error: {
      color: "red",
      marginTop: 4,
      fontSize: 14,
    },
  
  });
  
  export default InputForm;
  