import React from "react";
import { View,Text, FlatList, StyleSheet } from "react-native";
import orders from '../data/Orders.json'
import OrdersItem from "../components/OrdersItem";
import { colors } from "../global/colors";



const Orders = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={orders}
        renderItem={({ item }) => <OrdersItem item={item} />}
        keyExtractor={(order) => order.id.toString()}
      />
    </View>
  );
};



export default Orders;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue_200,
    padding: 16,
  },
  
});