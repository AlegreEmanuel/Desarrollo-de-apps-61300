import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../global/colors";

const OrdersItem = ({ item }) => {
  const total = item.items.reduce(
    (acc, currentItem) => acc + currentItem.quantity * currentItem.price,
    0
  );

  return (
    <View style={styles.container}>
      <Text style={styles.date}>
        {new Date(item.createdAt).toLocaleDateString()}
      </Text>
      <Text style={styles.total}>Total: ${total}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue_100,
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
  },
  date: {
    fontSize: 25,
    fontFamily: 'debil',
    marginBottom: 8,
  },
  total: {
    fontSize: 18,
    fontFamily: 'debil'
  },
});

export default OrdersItem;