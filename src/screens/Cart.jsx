import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";
import CartItems from "../components/CartItem";
import { colors } from "../global/colors";
import { useSelector } from "react-redux";
import { usePostOrderMutation } from "../services/ShopService";


const Cart = () => {

  const cartItems = useSelector((state)=>state.cartReducer.value.items)
  const total = useSelector((state)=>state.cartReducer.value.total)
  const [triggerPost, result] = usePostOrderMutation()

  const confirmCart=()=>{
    triggerPost({total, cartItems,user:"loggedUser"})
  }


  return (
    <View style={styles.container}>
      {cartItems.length > 0 ?(
        <>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => <CartItems item={item} />}
        keyExtractor={(cartItem) => cartItem.id.toString()}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: ${total}</Text>
        <Pressable onPress={confirmCart}>
          <Text>Confirm</Text>
        </Pressable>
        
      </View>
      </>
      ) : (<Text>No Hay Productos agregados</Text>)}
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
