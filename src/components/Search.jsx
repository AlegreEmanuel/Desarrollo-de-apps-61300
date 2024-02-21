import { Pressable, StyleSheet, TextInput, View } from "react-native";
import React, { useState } from "react";
import {AntDesign} from '@expo/vector-icons';



const Search = ({onSearch  }) => {

    const [input, setInput] = useState("");

    const search = () => {
        console.log("Search:", input);
        onSearch(input)
    }

  

 

    const removeInput = ()=>{
        setInput(""); 
    }


    return(


            <View style = {styles.container}>
                <TextInput 
                style={styles.input}
                value={input}
                onChangeText={setInput}
                placeholder="Buscar Producto" 
                />
                <Pressable onPress={search}>
                    <AntDesign name="search1" size={25} color={'white'}/>
                </Pressable>

            </View>


    )

}


export default Search;


const styles = StyleSheet.create({



    container: {
        minWidth:'90%',
        flexDirection: 'row',
        alignItems:'center'
    },


    input:{
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#000', 
        borderRadius: 8, 
        margin: 16, 
        elevation: 2,
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 }, 
        shadowOpacity: 0.2, 
        shadowRadius: 4,
        padding: 12, 
        color: 'white'

    }
})