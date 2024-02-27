import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import allCartItems from '../data/Cart.json';
import CartItems from "../components/CartItem";
import { colors } from "../global/colors";

const Cart = () => {
  const [cartItem, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const calculatedTotal = allCartItems.reduce((acc, currentItem) => acc += (currentItem.quantity * currentItem.price), 0);
    setTotal(calculatedTotal);
    setCartItems(allCartItems);
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItem}
        renderItem={({ item }) => <CartItems item={item} />}
        keyExtractor={(cartItem) => cartItem.id}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: ${total}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.blue_100,
  },
  totalContainer: {
    marginTop: 20,
    alignItems: 'flex-end',
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Cart;
