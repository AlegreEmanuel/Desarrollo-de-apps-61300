import React, { useState } from "react";
import { View, Pressable, StyleSheet, TextInput, Image } from "react-native";

const AddItem = ({ setCartItems, cartItems }) => {
  const handleInputChange = (value) => setInputValue(value);
  const addItem = () => {
      const newItem = { name: inputValue, id: new Date().getTime() };
      setCartItems([...cartItems, newItem]);
  };

  const [inputValue, setInputValue] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={handleInputChange}
        value={inputValue}
        style={styles.input}
        placeholder="Ingrese un producto"
      />
      <Pressable onPress={addItem} style={styles.addButton}>
      <Image style={styles.addButtonText} source={{ uri: 'https://purepng.com/public/uploads/large/black-plus-symbol-4oz.png' }} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    width: '85%'
  },
  input: {
    flex: 1,
    borderColor: "silver", 
    borderWidth: 2,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5,
    marginRight: 5,
    color: 'white',
  },
  addButton: {
    backgroundColor: "darkred", 
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    padding: 'auto',
    height: 40,
    width: 40,
  },
  addButtonText: {
    height: 35,
    width: 35,
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
});

export default AddItem;