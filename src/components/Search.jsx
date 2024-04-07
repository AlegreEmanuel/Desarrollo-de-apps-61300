import { Pressable, StyleSheet, TextInput, View } from "react-native";
import React, { useState } from "react";
import {AntDesign} from '@expo/vector-icons';
import { useDispatch } from "react-redux";
import { setSearchKeyword } from "../features/shop/shopSlice";


const Search = ({ setKeyword }) => {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();

    const search = () => {
        dispatch(setSearchKeyword(input));
        setKeyword(input); 
        removeInput();
    }

    const removeInput = () => {
        setInput("");
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={input}
                onChangeText={setInput}
                placeholder="Buscar Producto"
            />
            <Pressable onPress={search}>
                <AntDesign name="search1" size={25} color={'white'} />
            </Pressable>
        </View>
    );
}

export default Search;


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%', 
        paddingHorizontal: 16, 
        marginBottom: 16, 
    },
    input: {
        flex: 1, 
        backgroundColor: '#000',
        borderRadius: 8,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        paddingVertical: 12,
        paddingHorizontal: 12,
        color: 'white',
    },
});