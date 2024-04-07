import React from "react";
import { View, Text, StyleSheet } from "react-native";

const OrdersItem = ({ order }) => {

  if (!order) {
    return <Text>No hay datos de orden</Text>;
  }

  const orderId = Object.keys(order)[0]; 
  const orderDetails = order[orderId]; 

  const { cartItems, orderDate, user } = orderDetails;

  return (
    <View style={styles.container}>
      <Text>Usuario: {user}</Text>
      <Text>Fecha de compra: {orderDate}</Text>
      <Text>Total de la compra: ${
        cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
      }</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
});

export default OrdersItem;
