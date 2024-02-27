import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../global/colors";

const CartItems = ({ item }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.brand}>{item.brand}</Text>
      <Text style={styles.price}>Price: ${item.price.toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue_200,
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    borderColor: colors.blue_300,
    borderWidth: 2, 
    borderRadius: 5,
    
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  brand: {
    fontSize: 16,
    color: colors.gray_500,
    marginBottom: 8,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CartItems;